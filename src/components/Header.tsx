import React, { useState, createContext } from 'react';
export const TodoContext = createContext([]);
 
export default function Header ( props: {children: React.ReactNode}) {	
	let test: any = [];
	const [todoItems, setTodoItems]= useState(test);
	return (
		<header className="App-header">
			<h1>Todos</h1>
			<TodoContext.Provider value = {todoItems}>
				<input 
					className="new-todo" 
					placeholder="What needs to be done?" 
					type="text"
					onKeyUp={(e) =>{
						const element = e.currentTarget as HTMLInputElement;
						let value = element.value;
						if(e.key === 'Enter') {
							if (value !=='') {
								setTodoItems([...todoItems, value]);
								e.currentTarget.value ='';
							}	
						}
					}}
				/>
				{props.children}
			</TodoContext.Provider>
		</header>
		
	);
}
