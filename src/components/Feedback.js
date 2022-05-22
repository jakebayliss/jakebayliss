import React, { useState } from 'react';
import { BlobServiceClient } from '@azure/storage-blob';
import { v4 as uuidv4 } from 'uuid';
import { AiOutlineMessage, AiFillRightCircle, AiFillCloseCircle } from 'react-icons/ai';

const Feedback = () => {
    const [blobServiceClient, setBlobServiceClient] = useState(new BlobServiceClient('https://jakebaylissgb5e5yphyxao2.blob.core.windows.net/feedback?sp=racw&st=2022-05-20T09:47:24Z&se=2023-11-30T16:47:24Z&spr=https&sv=2020-08-04&sr=c&sig=gF78zrS3ic390AToBZg8xtBWhN99TtIQaYvuPssoJ%2Bg%3D'));
    const [containerClient, setContainerClient] = useState(blobServiceClient.getContainerClient(''));

    const [showFeedbackDialog, setShowFeedbackDialog] = useState(false);

    const [message, setMessage] = useState('');

    const handleSend = async () => {
        const blobClient = containerClient.getBlockBlobClient(`${Date.now()}-${uuidv4().substring(0, 6)}-feedback.txt`);
        await blobClient.upload(message, message.length);

        setShowFeedbackDialog(!showFeedbackDialog);
        setMessage('');
    }

    return <div className='absolute right-4 bottom-4 hidden sm:block'>
        <AiOutlineMessage className={`w-6 h-6 hover:text-lime-400 cursor-pointer ${showFeedbackDialog ? 'hidden' : 'flex'} hover:animate-spin`} onClick={() => setShowFeedbackDialog(!showFeedbackDialog)}/>
        <div className={`${showFeedbackDialog ? 'flex' : 'hidden'} flex-col bg-zinc-900 rounded-lg p-3`}>
            <p className='mb-2 text-left text-sm'>Hey! If you have any feedback for me, I would love to hear it</p>
            <textarea placeholder='Tell me what you think!' className='p-2 text-sm text-zinc-900 bg-zinc-200 w-96 h-64 rounded-lg caret-lime-700 focus:caret-lime-700'
                 value={message} onChange={(e) => setMessage(e.target.value)}/>
            <div className='flex justify-between mt-2'>
                <button className='flex justify-evenly items-center p-1 bg-lime-400 hover:bg-lime-500 text-zinc-900 rounded-lg w-20'
                    onClick={() => handleSend()}>Send <AiFillRightCircle className='w-5 h-5'/></button>
                <button className='flex items-center p-1 hover:text-red-400' onClick={() => setShowFeedbackDialog(!showFeedbackDialog)}><AiFillCloseCircle className='w-5 h-5'/></button>
            </div>
        </div>
    </div>
}

export default Feedback;