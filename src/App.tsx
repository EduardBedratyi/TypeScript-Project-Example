import { Todos } from './components/Todos';
import { dummyList } from './__mocks__/dummyData.js';
import { Todo } from './components/models/todo';
import './App.css';

function App() {
  const todos = [new Todo('Third Entry'), new Todo('Fourth Entry')];
  return (
    <div className='App'>
      {/* <Todos items={dummyList}/> */}
      <Todos items={todos} />
    </div>
  );
}

export default App;
