import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import './assets/css/style.css';
// import './assets/css/style2.css';
// import './assets/css/style3.css';
// import './assets/css/style4.css';
// import './assets/css/line-awesome.min.css';
// import './assets/css/opensans-font.css';
// import './assets/css/bootstrap.css';
// import './assets/css/font-awesome.css';
// import './assets/images'
// import './assets/js/main';
// import './assets/js/bootstrap.min';
// import './assets/js/popper';
// import './assets/js/jquery.min';
// import './assets/scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import mainReducer from "./reducers/RootReducer"
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import store from './store'

//Login
//const store = createStore(mainReducer,composeWithDevTools())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
