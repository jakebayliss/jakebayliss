import React, { useState, useEffect } from 'react';

export default class API extends React.Component {
    constructor(baseUrl) {
        this.baseUrl = baseUrl
    }

    async getInstagram() {
        let response = await fetch(`${this.baseUrl}?client_id=169671868244577&redirect_uri=https://localhost:8080/auth&scope=user_profile&response_type=code`);
    };
}