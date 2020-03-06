import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './styles.css';

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

    render() {
        const { repositories } = this.state;

        return (
            <div className="repo-list">
                {repositories.map(repo => (
                    <article key={repo.id}>
                        <strong>{repo.name}</strong>
                        <Link to={`repos/${repo.id}`}>Acessar</Link>
                    </article>
                ))}
            </div>
        )
    }
}