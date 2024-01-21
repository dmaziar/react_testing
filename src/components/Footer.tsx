import React, { useContext } from 'react';
import { TodoContext } from './Header';

export default function Footer() {
	const items = useContext(TodoContext);
	if (items.length !== 0) {
		return (
			<footer className='footer'>
				<span className='todo-count'>
					<strong>1</strong>
					<span></span>
					<span>item</span>
					<span>left</span>
				</span>
				<ul className='filters'>
					<li>
						<a className='selected' href="#/">All</a>
					</li>
					<li>
						<a href="#/active">Active</a>
					</li>
					<li>
						<a href="#/completed">Completed</a>
					</li>
				</ul>
			</footer>
		);
	} else return null;
}
