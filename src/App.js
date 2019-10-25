import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import {HashRouter} from 'react-router-dom'
import routes from './routes';
import {Provider} from 'react-redux';
import store from './ducks/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HashRouter>
          <Nav />
          {routes}
        </HashRouter>
      </Provider>
    </div>
  );
}

export default App;
