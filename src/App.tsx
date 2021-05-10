import { Todos } from './components/Todos'
import { dummyList } from './__mocks__/dummyData.js';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <Todos items={dummyList}/>
    </div>
  );
}

export default App;
