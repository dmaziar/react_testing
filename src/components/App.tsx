import React from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
	return (
		<div className="App">
			<div>
				<section className='todoapp'>
					<Main />
					<Footer />
				</section>
				<footer />
			</div>
		</div>
	);
}

export default App;
