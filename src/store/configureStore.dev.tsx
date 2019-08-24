import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
const rootReducer = require("../reducers").default;

const configureStore = (preloadedState: any) => {
  const devTools =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__();
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(thunk),
      devTools
    )
  );
  return store;
};

export default configureStore;
