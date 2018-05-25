import React, { Component } from 'react';

import MoviesGrid from './MoviesGrid';

const data = [
	{ title: 'Black Panther', year: 2018, 'poster': 'http://localhost:8080/black-panther.jpg' },
	{ title: 'Avengers: Inifinity War', year: 2018, 'poster': 'http://localhost:8080/avengers-iw.jpg' },
	{ title: 'Black Panther', year: 2018, 'poster': 'http://localhost:8080/black-panther.jpg' },
    { title: 'Avengers: Inifinity War', year: 2018, 'poster': 'http://localhost:8080/avengers-iw.jpg' },
    { title: 'Black Panther', year: 2018, 'poster': 'http://localhost:8080/black-panther.jpg' },
    { title: 'Avengers: Inifinity War', year: 2018, 'poster': 'http://localhost:8080/avengers-iw.jpg' },
    { title: 'Black Panther', year: 2018, 'poster': 'http://localhost:8080/black-panther.jpg' },
    { title: 'Avengers: Inifinity War', year: 2018, 'poster': 'http://localhost:8080/avengers-iw.jpg' },
    { title: 'Black Panther', year: 2018, 'poster': 'http://localhost:8080/black-panther.jpg' },
    { title: 'Avengers: Inifinity War', year: 2018, 'poster': 'http://localhost:8080/avengers-iw.jpg' },
    { title: 'Black Panther', year: 2018, 'poster': 'http://localhost:8080/black-panther.jpg' },
    { title: 'Avengers: Inifinity War', year: 2018, 'poster': 'http://localhost:8080/avengers-iw.jpg' },
];

class App extends Component {
	render() {
		return (
			<MoviesGrid data={data} />
		);
	}
}

export default App;
