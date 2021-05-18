import { useState } from 'react';
import { Todos } from './components/Todos';
import { dummyList } from './__mocks__/dummyData.js';
import { Todo } from './models/todo';
import { NewTodo } from './components/NewTodo';
import './App.css';

function App() {
  const oldTodos = [new Todo('Third Entry'), new Todo('Fourth Entry')];

  const [todos, setTodos] = useState<Todo[]>(oldTodos);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div className='App'>
      {/* <Todos items={dummyList}/> */}
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onClickHandler={removeTodoHandler} />
    </div>
  );
}

export default App;
