import React, { useEffect, useState } from 'react';

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
	let test: string[] = [];
	const [todoItems, setTodoItem]= useState(test);
	return (
		<>
			<header className="App-header">
				<h1>Todos</h1>
				<input 
					className="new-todo" 
					placeholder="What needs to be done?" 
					type="text"
					onKeyUp={(e) =>{
						const element = e.currentTarget as HTMLInputElement;
						let value = element.value;
						if(e.key === 'Enter') {
							setTodoItem([...todoItems, value]);
							e.currentTarget.value ='';
						}
					}}
				/>
			</header>
			<section className='main'>
				<input 
					id="toggle-all" 
					className='toggle-all' 
					type="checkbox" 
				/>
				<label htmlFor="toggle-all">
				
				</label>
				<List items={todoItems}/>
			
			</section>
		</>
	);
}
