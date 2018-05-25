import React, { Component } from 'react';

import Loader from './Loader';
import MoviesGrid from './MoviesGrid';

const data = [
	{ title: 'Black Panther', year: 2018, 'poster': 'http://localhost:8080/images/black-panther.jpg' },
	{ title: 'Avengers: Inifinity War', year: 2018, 'poster': 'http://localhost:8080/images/avengers-iw.jpg' },
	{ title: 'Black Panther', year: 2018, 'poster': 'http://localhost:8080/images/black-panther.jpg' },
    { title: 'Avengers: Inifinity War', year: 2018, 'poster': 'http://localhost:8080/images/avengers-iw.jpg' },
    { title: 'Black Panther', year: 2018, 'poster': 'http://localhost:8080/images/black-panther.jpg' },
    { title: 'Avengers: Inifinity War', year: 2018, 'poster': 'http://localhost:8080/images/avengers-iw.jpg' },
    { title: 'Black Panther', year: 2018, 'poster': 'http://localhost:8080/images/black-panther.jpg' },
    { title: 'Avengers: Inifinity War', year: 2018, 'poster': 'http://localhost:8080/images/avengers-iw.jpg' },
    { title: 'Black Panther', year: 2018, 'poster': 'http://localhost:8080/images/black-panther.jpg' },
    { title: 'Avengers: Inifinity War', year: 2018, 'poster': 'http://localhost:8080/images/avengers-iw.jpg' },
    { title: 'Black Panther', year: 2018, 'poster': 'http://localhost:8080/images/black-panther.jpg' },
    { title: 'Avengers: Inifinity War', year: 2018, 'poster': 'http://localhost:8080/images/avengers-iw.jpg' },
];

class App extends Component {

	render() {
		return (
            <MoviesGrid data={data} />
		);
	}
}

export default App;
