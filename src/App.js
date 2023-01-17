import React from 'react';
// components
import CardList from './components/CardList'
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll'
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
    const filteredRobots = this.state.robots?.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })


    if (this.state.robots.length === 0){
      return <h1> loading...</h1>
    } else { 
      return (
        <div className="App tc">
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchField={this.searchField} searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots}/>
          </Scroll>
        </div>
      );
    }

  }
}

export default App;
