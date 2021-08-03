import { createStore } from "redux";


const initialState = 0

const reducer = (prevState = initialState, action) => {
  switch (action.type) {
    case "COUNTER_ADD":
      return prevState +1;
    default:
      return prevState;
  }
};

const store = createStore(reducer);

store.dispatch({type:"COUNTER_ADD"})
store.dispatch({type:"COUNTER_ADD"})

console.log(store.getState());

