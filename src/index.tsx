import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import {BrowserRouter} from 'react-router-dom';
import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from "./store/reducers/reducer";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import { getUser } from "./store/actions/actions";

const actionSanitizer = (action: any) =>
    action.type === 'FILE_DOWNLOAD_SUCCESS' && action.data ? { ...action, data: '<<LONG_BLOB>>' } : action;

const composeEnhancers =
    // @ts-ignore
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        // @ts-ignore
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            actionSanitizer,
            stateSanitizer: (state: any) => (state.data ? { ...state, data: '<<LONG_BLOB>>' } : state),
        })
        : compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
const { dispatch } = store;

const update = () => ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// @ts-ignore
update();
store.subscribe(update);