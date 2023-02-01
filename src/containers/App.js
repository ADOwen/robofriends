import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// components
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary';
import Header from '../components/Header';
// styles
import './App.css'

import { requestRobots, setSearchField } from '../actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

const App = (props) => {
  const {searchField, onSearchChange, onRequestRobots, robots, isPending} = props
  
  const filteredRobots = robots?.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase())
  })

  useEffect(()=>{
    onRequestRobots()
  },[])
   console.log('app rerendered')
  return isPending ? 
    <h1 className='tc'> loading...</h1> :
    (
      <div className="App tc">
        <Header/>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots}/>
          </ErrorBoundary>
        </Scroll>
      </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
