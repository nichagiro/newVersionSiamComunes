import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import * as serviceWorker from './serviceWorker';
import store from "./Store/index";
import AlertasSiam from './TableroAlertas/containers/Main';
import Store from './TableroAlertas/store/Store';
import './styles.sass'

ReactDOM.render(
  <React.StrictMode>
    <Store key={'AlertStore'}>
      <Provider store={store}>
        {/* <App /> */}
        <AlertasSiam />
      </Provider>
    </Store>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
