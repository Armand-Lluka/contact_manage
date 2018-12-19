import React, { Component } from 'react';
import Header from './components/Header';
import Contacts from './components/Contacts';

import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
import { faPlus, faSortDown } from '@fortawesome/free-solid-svg-icons';
library.add(faPlus, faSortDown);

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Contacts />
      </div>
    );
  }
}

export default App;
