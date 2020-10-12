import React from 'react';
import ReactDOM from 'react-dom';
import { Counter } from './Counter';
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

// React App
const reactAppDiv = document.getElementById('react-app');
ReactDOM.render(<Counter />, reactAppDiv);