import React from 'react';

export default function ToDo() {
	return (
		<section className='main'>
			<input id="toggle-all" className='toggle-all' type="checkbox" />
			<label htmlFor="toggle-all">
                ::before
                Mark all as complete
			</label>
		</section>
	);
}
