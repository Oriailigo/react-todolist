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
  return (
    <>
      <TodoCount completed={3}
      total={3}></TodoCount>
      <TodoSearch/>
      <TodoList>
        {defaultTodos.map((todo)=><TodoItem key={todo.text} text={todo.text} completed={todo.completed}></TodoItem>)}
   
      </TodoList>

  <CreateTodoButton/> 
      
    </>
  );
}


export default App;

