import App from './components/App';
import React from 'react';
import {
	createBrowserRouter,
} from 'react-router-dom';


export const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<App />
		),
	},
	{
		path: 'about',
		element: <div>About</div>,
	},
]);
