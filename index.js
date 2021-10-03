const { createStore, combineReducers } = require("redux");
const buyCake = () => {
    return {
        type: "BUY_CAKE",
        info: "first redux"
    }
}
const buyChocolate = () => {
    return {
        type: "BUY_CHOCOLATE",
        info: "first redux"
    }
}
const initialState = {
    numberOfCakes: 10,
    numberOfChocolates: 20
}
const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "BUY_CAKE":
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - 1
            }
        default:
            return { ...state }
    }
}
const chocoateReducer = (state = initialState, action) => {
    switch (action.type) {
        case "BUY_CHOCOLATE":
            return {
                ...state,
                numberOfChocolates: state.numberOfChocolates - 1
            }
        default:
            return { ...state } 
    }
}
const rootReducer  = combineReducers({
    cake: cakeReducer,
    iceCream: chocoateReducer
})
const store = createStore(rootReducer);
console.log("initialState", store.getState());
const unSubscribe = store.subscribe(() => { console.log("Updated Satte", store.getState()) });
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

// unSubscribe()