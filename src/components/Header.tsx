import React from 'react';
import Main from './Main';

export default function Header () {
	return (
		<header className="App-header">
			<h1>Todos</h1>
			<input className="new-todo" placeholder="What needs to be done?" type="text" />
		</header>
	);
}
