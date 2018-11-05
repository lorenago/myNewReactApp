// Import a library to help create a component 
import React, { Component} from 'react';

import './App.scss';

import TopMenu from './components/TopMenuComponent/TopMenu';
import MainContent from './components/MainContentComponent/MainContent';

// Create a component
class App extends Component {
  render() {
    return (
      <div className="App">
        <TopMenu headerText={ 'Tu video' } />
        <MainContent />
      </div>
    )
  }
};

// Make the component available to other parts of the app
export default App;
