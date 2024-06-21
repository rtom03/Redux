import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux";
 import { PersistGate } from "redux-persist/integration/react";
import { store,persistor } from "./redux/store";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
 </Provider>,
  </React.StrictMode>
  </BrowserRouter>
  
)
// import React from "react";
// import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import { store,persistor } from "./redux/store";
// import App from "./App";

// ReactDOM.render(
//   <Provider store={store}>
//     <PersistGate loading={null} persistor={persistor}>
//       <App />
//     </PersistGate>
//   </Provider>,
//   document.getElementById("root")
// );
