import React, { useState, useEffect } from 'react';
// components
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary';
// styles
import './App.css'

const App = () => {
  const [robots, setRobots] = useState([])
  const [searchField, setSearchField] = useState('')
  
  const filteredRobots = robots?.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase())
  })

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      return response.json()
    })
    .then(users => {
      setRobots(users)
    })
  },[])

  const onSearchChange = (event) => {
    setSearchField(event.target.value)
  }

  return !robots.length ? 
    <h1 className='tc'> loading...</h1> :
    (
      <div className="App tc">
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots}/>
          </ErrorBoundary>
        </Scroll>
      </div>
    );
}

export default App;
