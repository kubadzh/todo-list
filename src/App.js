import React from 'react';
import './App.css';
import background from "./image/template.PNG";

import TodoList from './components/TodoList';

function App() {
  return (
    <div className="todo-app" style={{ backgroundImage: `url(${background})` }}>
     <TodoList />
    </div>
  );
}

export default App;
