import React from 'react';

// components
import CardList from './components/CardList'

// robots list
import {robots} from './robots'

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <CardList robots={robots}/>
      </div>
    );
  }
}

export default App;
