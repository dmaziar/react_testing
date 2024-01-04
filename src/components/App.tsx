import React from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import Header from './Header';
import ToDo from './ToDo';

function App() {
	return (
		<div className="App">
			<div>
				<section className='todoapp'>
					<Header />
				</section>
				<footer />
			</div>
		</div>
	);
}

export default App;
