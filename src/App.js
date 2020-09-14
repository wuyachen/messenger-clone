import React,{useState, useEffect} from 'react';
import './App.css';
import Todo from './Todo'
import {Button, Input, FormControl, InputLabel} from '@material-ui/core'
import db from './firebase';

function App() {
  const [todos,setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection('to_dos').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().to_dos))
    })
  }, []);

  const addTodo = (event) => {
    event.preventDefault();

    db.collection('todos').add({
      todo: input
    })
    setTodos([...todos, input])
    setInput('');
  }
  return (
    <div className="App">
      <h1>hello</h1>
      <form>
        <FormControl>
          <InputLabel>write a todo</InputLabel>
          <Input value = {input} onChange = {event => setInput(event.target.value)}/>
        </FormControl>
        <Button disabled={!input} type = "submit" onClick= {addTodo} variant="contained" color="primary">
        AddTodo
        </Button>
      </form>
      <ul>
      {todos.map(todo => (
        <Todo text = {todo}/>
      ))}
      </ul>
    </div>
  );
}

export default App;
