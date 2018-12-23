import React from 'react';
import { Switch } from 'react-router-dom';
import routes from './routes';
import RoutesRenderer from './components/base/RoutesRenderer';
import Nav from './components/base/Nav';
import Footer from './components/base/Footer';

const App = () => (
  <div className="app">
    <Nav routes={ routes } />
    <div className="main">
      <Switch>
        {
          routes.map((route, idx) => (
            <RoutesRenderer key={ idx } { ...route } />
          ))
        }
      </Switch>
    </div>
    <Footer/>
  </div>
);

export default App;
