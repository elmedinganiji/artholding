import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import dyer from './components/pages/dyer';
import windows from './components/pages/windows';
import laminate from './components/pages/laminate';
import shutters from './components/pages/shutters';
import outdoors from './components/pages/outdoors';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/windows' component={windows} />
          <Route path='/dyer' component={dyer} />
          <Route path='/ContactUs' component={ContactUs} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/windows' component={windows} />
          <Route path='/laminate' component={laminate} />
          <Route path='/shutters' component={shutters} />
          <Route path='/outdoors' component={outdoors} />

        </Switch>
      </Router>
    </>
  );
}

export default App;