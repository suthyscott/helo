import React from 'react';
import './App.css';
import Auth from './Components/Auth/Auth';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Post from './Components/Post/Post';
import Nav from './Components/Nav/Nav';
import {HashRouter} from 'react-router-dom'
import routes from './routes';

function App() {
  return (
    <div className="App">
      <HashRouter>
        {routes}
        <Nav />
      </HashRouter>
    </div>
  );
}

export default App;
