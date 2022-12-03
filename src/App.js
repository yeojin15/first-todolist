import './App.css';
import { useState } from 'react';
import TodoBoard from './components/TodoBoard';

const App = (props) => {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);
  const addItem =()=>{
    setTodoList([inputValue, ...todoList]); // 기존 투두리스트 유지하고 새로운 인풋밸류 넣어라(제일 위에)
  }

  return (
    <div className="App">
      <input type="text" value={inputValue} onChange={(event)=> setInputValue(event.target.value)} />
      <button onClick={addItem}>추가</button>

      <TodoBoard todoList={todoList}/>
    </div>
  );
}

export default App;
