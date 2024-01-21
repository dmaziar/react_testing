import React, { useContext } from 'react';
import { TodoContext } from './Header';

const Item = (props: { itemText: string}) =>{
	return (
		<li>
			<div className='view'>
				<input className='toggle' type='checkbox'/>
				<label>{props.itemText}</label>
				<button className='destroy'></button>
			</div>
		</li>
	);
};

const List = (props: {items: string[]}) =>{
	return (
		<ul className='todo-list'>
			{
				props.items.map((item, index) => {
					return <Item key={index} itemText={item} />;
				})
			}
		</ul>
	);
};

export default function Main() {
	const items = useContext(TodoContext);
	if (items.length !== 0) {
		return (
			<section className='main'>
				<input 
					id="toggle-all" 
					className='toggle-all' 
					type="checkbox" 
				/>
				<label htmlFor="toggle-all">
					
				</label>
				<List items={items}/>
			</section>
		);
	} else return null;
}
