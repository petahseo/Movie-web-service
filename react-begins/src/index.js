import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Todo from './ToDoList';
import Coin from './Coin';
import Movie from './Movie';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <App />
        <hr/>
        <Todo />
        <hr />
        <Coin />
        <hr />
        <Movie />
        <hr />
    </div>
);
