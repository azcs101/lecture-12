import React, { Component } from 'react';

import './movies-grid.css';

export class MoviesGrid extends Component {

    renderItem(item, key) {
        return (
            <li key={key}>
                <img src={item.poster} alt={item.title} />
                <div className="movies-grid-item-content">
                    <h4>{item.title}</h4>
                </div>
            </li>
        );
    }

    render() {
        const { data } = this.props;
        return (
            <div className="movies-grid">
                <ul className="movies-grid-list">
                    {data.map(this.renderItem)}
                </ul>
            </div>
        );
    }
}

export default MoviesGrid;
