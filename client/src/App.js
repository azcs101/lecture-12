import React, { Component } from 'react';

import Loader from './Loader';
import MoviesGrid from './MoviesGrid';

const data = [
	{ title: 'Avengers: Inifinity War', year: 2018, 'poster': 'http://localhost:8080/images/avengers-iw.jpg' },
    { title: 'Black Panther', year: 2018, 'poster': 'http://localhost:8080/images/black-panther.jpg' },
	{ title: 'Aquaman', year: 2018, 'poster': 'http://localhost:8080/images/aquaman.jpg' },
    { title: 'Solo: A Star Wars Story', year: 2018, 'poster': 'http://localhost:8080/images/solo.jpg' },
    { title: 'Fantastic Beasts: The Crimes of Grindelwald', year: 2018, 'poster': 'http://localhost:8080/images/fantastic-beasts.jpg' },
    { title: 'Spider-Man: Into the Spider-Verse', year: 2018, 'poster': 'http://localhost:8080/images/spider-man.jpg' },
    { title: 'Jurassic World: Fallen Kingdom', year: 2018, 'poster': 'http://localhost:8080/images/jurassic-world.jpg' },
    { title: 'Ant-Man and the Wasp', year: 2018, 'poster': 'http://localhost:8080/images/ant-man.jpg' },
    { title: 'Hotel Transylvania 3: Summer Vacation', year: 2018, 'poster': 'http://localhost:8080/images/hotel-t.jpg' },
    { title: 'Sherlock Gnomes', year: 2018, 'poster': 'http://localhost:8080/images/sherlock-gnomes.jpg' },
    { title: 'Bumblebee', year: 2018, 'poster': 'http://localhost:8080/images/bumblebee.jpg' },
    { title: 'The Grinch', year: 2018, 'poster': 'http://localhost:8080/images/the-grinch.jpg' },
];

class App extends Component {

	render() {
		return (
            <MoviesGrid data={data} />
		);
	}
}

export default App;
