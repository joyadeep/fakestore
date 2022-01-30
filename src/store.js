import {createStore, applyMiddleware,compose} from "redux"; //compose was here !!
import thunk from 'redux-thunk';
import rootreducer from "./Redux/reducers/rootreducer";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store=createStore(rootreducer,
    composeEnhancers(applyMiddleware(thunk))
    // applyMiddleware(thunk)
);

export default store;
