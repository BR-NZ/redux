import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';

import './index.css';



const initialState = { value: 0 };

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "INC":
            return {
                ...state,
                value: state.value + 1
            };
        case "DEC":
            return {
                ...state,
                value: state.value - 1
            };
        case "RND":
            return {
                ...state,
                value: state.value * action.payload
            };
        default:
            return state;
    }
}

const update = () => {
    document.getElementById("counter").textContent = store.getState().value;
}

// создаем объект action с помощью специальных функций actionCreators
const rnd = () => ({ type: "RND", payload: Math.random() * 10 });




const store = createStore(reducer);

store.subscribe(update);




document.getElementById("inc").addEventListener("click", () => {
    // можно создавать объект action сразу при передаче
    store.dispatch( {type: "INC"} );
});

document.getElementById("dec").addEventListener("click", () => {
    store.dispatch( {type: "DEC"} );
});

document.getElementById("rnd").addEventListener("click", () => {
    // а тут объект action получаем от actionCreators
    store.dispatch( rnd() );
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>

    </>
);