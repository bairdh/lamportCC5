import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore } from 'redux'
import { Provider } from 'react-redux';


const shipStats = {
    speed: 0,
    people: ['Heather']
}
// put your reducer here!
const reducer = (state = shipStats, action) => {
    if(action.type === 'up'){
        state = {
            ...state,
            speed: state.speed + 1
        }
        console.log(state.speed);
        return state
    }
    else if (action.type === 'down'){
        state = {
            ...state,
            speed: state.speed - 1
        }
        console.log(state.speed);
        
    }

    else if(action.type === 'person'){
        state = {
            ...state,
            people: [...state.people, action.payload]
        }
        console.log(`In the List`);
        
    }
    return state;

}

// use reducer in store
const storeInstance = createStore(reducer);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
