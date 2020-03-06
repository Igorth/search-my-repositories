import React, { Component } from 'react';
import api from '../../services/api';

export default class Main extends Component {
    state = {
        repositories: [],
    }

    componentDidMount() {
        this.loadRepositories();
    }

    loadRepositories = async () => {
        const response = await api.get(`/repos`);

        this.setState({ repositories: response.data });

        console.log(response.data);
    };

    render(){
    return (
        <div className="repo-list">
            {this.state.repositories.map(repo => (
                <h2 key={repo.id}>{repo.name}</h2>
            ))}
        </div>
    )
    }
}