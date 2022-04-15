import React, { useState, useEffect, useRef } from 'react';
import { BlobServiceClient } from '@azure/storage-blob';
import streamToBuffer from 'stream-to-buffer';
import { Chess } from 'chess.js';
import { Chessboard } from "react-chessboard";

import '../../styles/chess.css';

const ChessPage = () => {
    const chessboardRef = useRef();

    const [blobServiceClient, setBlobServiceClient] = useState(new BlobServiceClient('https://jakebaylissgb5e5yphyxao2.blob.core.windows.net/chess?sp=rw&st=2022-04-15T00:37:45Z&se=2023-02-01T07:37:45Z&sip=1.1.1.1-255.255.255.255&spr=https&sv=2020-08-04&sr=c&sig=eASjQycMH3FjcDs1baYWoTBwAMADsgIbqspfTnuMIJ4%3D'));
    const [containerClient, setContainerClient] = useState(blobServiceClient.getContainerClient(''));
    const [game, setGame] = useState(new Chess());

    const getBlob = async () => {
        const blobClient = containerClient.getBlockBlobClient('fen.txt');
        const downloadBlockBlobResponse = await blobClient.download();
        return await (await downloadBlockBlobResponse.blobBody).text();
    }
    
    useEffect(() => {
        (async () => {
            // sp=rw&st=2022-04-15T00:37:45Z&se=2023-02-01T07:37:45Z&sip=1.1.1.1-255.255.255.255&spr=https&sv=2020-08-04&sr=c&sig=eASjQycMH3FjcDs1baYWoTBwAMADsgIbqspfTnuMIJ4%3D
            const fen = await getBlob();
            if(fen) {
                setGame(new Chess(fen));
            }
            else {
                setGame();
            }
        })();
    }, []);

    useEffect(() => {
        console.log(game, game.fen());
    }, [game]);

    const [rightClickedSquares, setRightClickedSquares] = useState({});
    const [moveSquares, setMoveSquares] = useState({});
    const [optionSquares, setOptionSquares] = useState({});

    const uploadBlob = async () => {
        const blobClient = containerClient.getBlockBlobClient("fen.txt");
        return await blobClient.upload(game.fen(), game.fen().length);
    }
  
    function safeGameMutate(modify) {
      setGame((g) => {
        const update = { ...g };
        modify(update);
        return update;
      });
    }
  
    function onDrop(sourceSquare, targetSquare) {
        const gameCopy = { ...game };
        const move = gameCopy.move({
            from: sourceSquare,
            to: targetSquare,
            promotion: 'q' // always promote to a queen for example simplicity
        });
        setGame(gameCopy);
        // illegal move
        if (move === null) return false;
        setMoveSquares({
            [sourceSquare]: { backgroundColor: 'rgba(255, 255, 0, 0.4)' },
            [targetSquare]: { backgroundColor: 'rgba(255, 255, 0, 0.4)' }
        });
        //localStorage.setItem('fen', game.fen());

        uploadBlob();

        return true;
    }
  
    function onMouseOverSquare(square) {
      getMoveOptions(square);
    }
  
    // Only set squares to {} if not already set to {}
    function onMouseOutSquare() {
      if (Object.keys(optionSquares).length !== 0) setOptionSquares({});
    }
  
    function getMoveOptions(square) {
      const moves = game.moves({
        square,
        verbose: true
      });
      if (moves.length === 0) {
        return;
      }
  
      const newSquares = {};
      moves.map((move) => {
        newSquares[move.to] = {
          background:
            game.get(move.to) && game.get(move.to).color !== game.get(square).color
              ? 'radial-gradient(circle, rgba(0,0,0,.1) 85%, transparent 85%)'
              : 'radial-gradient(circle, rgba(0,0,0,.1) 25%, transparent 25%)',
          borderRadius: '50%'
        };
        return move;
      });
      newSquares[square] = {
        background: 'rgba(255, 255, 0, 0.4)'
      };
      setOptionSquares(newSquares);
    }
  
    function onSquareClick() {
      setRightClickedSquares({});
    }
  
    function onSquareRightClick(square) {
      const colour = 'rgba(0, 0, 255, 0.4)';
      setRightClickedSquares({
        ...rightClickedSquares,
        [square]:
          rightClickedSquares[square] && rightClickedSquares[square].backgroundColor === colour
            ? undefined
            : { backgroundColor: colour }
      });
    }
  
    return <div className='chess-container'>
        <Chessboard
          id="SquareStyles"
          arePremovesAllowed={true}
          animationDuration={200}
          boardWidth={500}
          position={game.fen()}
          onMouseOverSquare={onMouseOverSquare}
          onMouseOutSquare={onMouseOutSquare}
          onSquareClick={onSquareClick}
          onSquareRightClick={onSquareRightClick}
          onPieceDrop={onDrop}
          customBoardStyle={{
            borderRadius: '4px',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)'
          }}
          customSquareStyles={{
            ...moveSquares,
            ...optionSquares,
            ...rightClickedSquares
          }}
          ref={chessboardRef}
        />
        <button
          className="rc-button"
          onClick={() => {
            safeGameMutate((game) => {
              game.reset();
              uploadBlob();
            });
            chessboardRef.current.clearPremoves();
            setMoveSquares({});
            setRightClickedSquares({});
          }}
        >
          reset
        </button>
        <div className='info'>
            <p>{game.turn() == 'w' ? 'White' : 'Black'}s turn</p>
        </div>
    </div>
}

export default ChessPage;