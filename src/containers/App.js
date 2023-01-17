import React from 'react';
// components
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
// styles
import './App.css'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      robots: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        return response.json()
      })
      .then(users => {
        this.setState({robots: users})
      })
  }

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value})
  }

  render () {
    const {robots, searchField} = this.state
    const filteredRobots = robots?.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return !robots.length ? 
      <h1 className='tc'> loading...</h1> :
      (
        <div className="App tc">
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots}/>
          </Scroll>
        </div>
      );
  }
}

export default App;
