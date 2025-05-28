import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux';
// import { store } from './19_REDUX/redux_tool_kit_CRUD/app/store.js';
// import {store} from './19_REDUX/redux_tool_kit_demo3/app/store.js';
// import { store } from '../src/19_REDUX/redux_tool_kit_demo1/app/store.jsx';
import {store} from "../src/19_REDUX/redux_tool_kit_API/app/store.js";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
