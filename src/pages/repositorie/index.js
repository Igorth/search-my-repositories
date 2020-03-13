import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';

export default class Repositorie extends Component {
    state = {
        repositorie: {},
    };

    async componentDidMount() {
        const { id } = this.props.match.params;

        const response = await api.get(`/repos/${id}`);

        this.setState({ repositorie: response.data });
    }

    render() {
        const { repositorie } = this.state;

        return (
            <div className="repo-info">
                <h1>{repositorie.name}</h1>
                <p>{repositorie.description}</p>

                <p>
                    URL: <a href={repositorie.html_url}>{repositorie.html_url}</a>
                </p>
            </div>
        );
    }
}