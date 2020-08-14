import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';

// store - global state

// action - describes what you want to do. - increment. it's a function that returns an object, that's the name.
// these don't actually do anything for now.
const increment = () => {
	return {
		type: 'INCREMENT'
	}
}

const decrement = () => {
	return {
		type: 'DECREMENT'
	}
}

// reducer - describes how an action transforms a state into the next
const counter = (state = 0, action) => {
	switch(action.type){
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
	}
}

let store = createStore(counter);

// display on console
store.subscribe(() => console.log(store.getState()));

// dispatch - execute the action (dispatch the action to the reducer)
store.dispatch(increment())


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
