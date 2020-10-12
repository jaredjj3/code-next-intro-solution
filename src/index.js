import React from 'react';
import ReactDOM from 'react-dom';
import { HookCounter } from './HookCounter';
import { ClassCounter } from './ClassCounter';

// Vanilla JS App
let count = 0;

const countSpan = document.getElementById('count');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

const render = () => {
  countSpan.innerText = count;
};

const increment = () => {
  count++;
  render();
};

const decrement = () => {
  count--;
  render();
};

incrementButton.onclick = increment;
decrementButton.onclick = decrement;

// React App w/ Hooks (the new way)
const reactAppHooksDiv = document.getElementById('react-app-hooks');
ReactDOM.render(<HookCounter />, reactAppHooksDiv);

// React App w/ classes (the old way)
const reactAppClassesDiv = document.getElementById('react-app-classes');
ReactDOM.render(<ClassCounter />, reactAppClassesDiv);