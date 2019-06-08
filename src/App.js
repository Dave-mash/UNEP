import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Entries from './components/Entries';

const routes = (
  <BrowserRouter>
    
  </BrowserRouter>
)

class App extends Component {

  render () {
    return (
      <div className="App flex-lg-column">
     
        <Entries />
      </div>
    )
  }
}

export default App;
