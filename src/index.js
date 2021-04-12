import React from 'react';
import './index.css';
import store from './redux/reduxStore';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
        </BrowserRouter>, document.getElementById('root'));
}

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});

rerenderEntireTree(store.getState());


