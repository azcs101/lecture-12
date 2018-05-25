import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faCircleNotch from '@fortawesome/fontawesome-free-solid/faCircleNotch'

import './loader.css';

export default class Loader extends Component {
    render() {
        return (
            <div className="loader">
                <FontAwesomeIcon icon={faCircleNotch} spin />
            </div>
        );
    }
}
