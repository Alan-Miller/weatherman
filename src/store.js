import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from 'redux-promise-middleware'

import weather from "./ducks/weather";

export default createStore( weather, null, applyMiddleware (promiseMiddleware() ) );





// import { createStore, applyMiddleware } from "redux";
// import promiseMiddleware from "redux-promise-middleware";
// import weather from "./ducks/weather";
//
// export default createStore( weather, undefined, applyMiddleware( promiseMiddleware() ) );
