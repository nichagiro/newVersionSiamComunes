import { createStore, applyMiddleware, combineReducers, compose } from "redux";
//import ReduxPromise from "redux-promise";
//import ReduxThunk from "redux-thunk";
import { reducer as ReduxFormReducer } from "redux-form";
import { ErrorHandler, ComunesReducer } from "siampluscomunes";
//import Consulta from './Consulta/index';
//import Crear from './Crear/index';

// MAIN REDUCER
const rootReducer = combineReducers({
  form: ReduxFormReducer,
  ...ComunesReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(ErrorHandler))
);

// EXPORTS
export default store;