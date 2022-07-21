import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Todo from './ToDoList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <App />
        <hr/>
        <Todo />
    </div>
);
