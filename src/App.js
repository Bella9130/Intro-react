import logo from './platzi.webp';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import './App.css';

function App() { //TodoItem: ejemplo de reutilizar y llamar al mismo componente
  return (
    <div className="App">

    <TodoCounter/>
    <TodoSearch/>

    <TodoList>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
    </TodoList>

    {/* <CreateTodoButton/> */}


    
    </div>
  );
}



export default App;
