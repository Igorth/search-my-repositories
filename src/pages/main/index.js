import React, { Component } from 'react';
import api from '../../services/api';

export default class Main extends Component {
    componentDidMount() {
        this.loadRepositories();
    }

    loadRepositories = async () => {
        const response = await api.get(`/repos`);

        console.log(response.data);
    };

    render(){
        return <h1>teste</h1>
    }
}