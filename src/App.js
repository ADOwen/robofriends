import React from 'react';

// components
import CardList from './components/CardList'
import SearchBox from './components/SearchBox';

// robots list
import {robots} from './robots'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      robots: robots,
      searchField: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value})
  }

  render () {

    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })

    return (
      <div className="App tc">
        <h1>Robofriends</h1>
        <SearchBox searchField={this.searchField} searchChange={this.onSearchChange}/>
        <CardList robots={filteredRobots}/>
      </div>
    );
  }
}

export default App;
