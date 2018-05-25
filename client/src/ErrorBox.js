import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faExclamationCircle from '@fortawesome/fontawesome-free-solid/faExclamationCircle'

import './error-box.css';

export default class ErrorBox extends Component {
    render() {
        return (
            <div className="error-box">
                <div className="error-box-icon">
                    <FontAwesomeIcon icon={faExclamationCircle} />
                </div>
                <div className="error-box-msg">
                    <p>{this.props.message}</p>
                </div>
            </div>
        );
    }
}
