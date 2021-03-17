import React,{useState} from 'react' ;
import './App.css';
//Importing Component 
import Form from './component/Form'
import TodoList from './component/Todolist' ;
function App() {
  const [ inputText, setInputText ] = useState("");
  const [todos , setTodos] = useState("");
  return (
    <div className="App">
      <header>
        <h1>Mobina's Todo List</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} 
        setInputText={setInputText} inputText={inputText} />
      <TodoList inputText={inputText}/>
    </div>
  );
}

export default App;
