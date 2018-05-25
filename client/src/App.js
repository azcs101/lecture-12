import React, { Component } from 'react';

import Loader from './Loader';
import ErrorBox from './ErrorBox';
import MoviesGrid from './MoviesGrid';

class App extends Component {

    constructor() {
        super();
        this.state = { data: [], loading: false, error: null };
    }

    async loadData() {
        this.setState({ loading: true });
        try {
            const res = await fetch('http://localhost:8080/movies');
            const data = await res.json();
            if (data.error) {
                throw data.error;
            }
            this.setState({ data, loading: false });
        } catch (error) {
            this.setState({ error, loading: false });
        }
    }

    componentDidMount() {
        this.loadData();
    }

	render() {
        const { data, loading, error } = this.state;

        if (loading) {
            return (<Loader />);
        }

        if (error) {
            return (<ErrorBox message={error} />);
        }

		return (
            <div>
                <MoviesGrid data={data} />
            </div>
		);
	}
}

export default App;
