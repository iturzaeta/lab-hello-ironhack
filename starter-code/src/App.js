import React, { Component, Fragment } from 'react'
import FeatureList from './FeatureList'
import Main from './Main'
import './App.css'

class App extends Component {
  render() {
    return (
    <div className="App">
      <Main/>
      <FeatureList/>
    </div>
      
    
    )
  }
}

export default App