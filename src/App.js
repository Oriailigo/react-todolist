import React from 'react';
import {TodoCount} from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import {TodoList} from './TodoList';
import {TodoItem} from './TodoItem';
import {CreateTodoButton} from './CreateTodoButton';


const defaultTodos=[
{text:"hacer la cena", completed:false},
{text:"Sacar la basura", completed:true},
{text:"Tomar el curso de React", completed:true},
{text:"Comer sano", completed:false},
]

function App() {
  const [todos, setTodos]= React.useState(defaultTodos);
  const [searchValue, setSearchValue]= React.useState('');

  const completedTodos=todos.filter(
    todo => todo.completed
  ).length;


  const searchTodos=todos.filter(
    todo =>{ 
      let todoText=todo.text.toLowerCase();
      let searchText=searchValue.toLowerCase();
      return todoText.includes(searchText)}
  );

  const totaTodos=defaultTodos.length;
  console.log(searchValue);
  return (
    <>
      <TodoCount 
        completed={completedTodos}
        total={totaTodos}></TodoCount>
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchTodos.map((todo)=>
        <TodoItem 
          key={todo.text} 
          text={todo.text} 
          completed={todo.completed}></TodoItem>)}
    
      </TodoList>

  <CreateTodoButton/> 
      
    </>
  );
}


export default App;

