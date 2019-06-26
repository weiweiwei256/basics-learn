import React from 'react'
import logo from './logo.svg'
import './App.css'
import Demo from './components/Demo'
import TimeCpt from './components/TimeCpt'
import MyToggle from './components/MyToggle'
import MyForm from './components/MyForm'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Demo name="demo-name-1" />
        <TimeCpt />
        <MyToggle />
        <MyForm />
      </header>
    </div>
  )
}

export default App
