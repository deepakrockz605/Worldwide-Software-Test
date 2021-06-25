import React, { PureComponent } from 'react'
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Chatbox from "./components/Chatbox"
import './App.css';
import './CSS/Chatbox.css';

class App extends PureComponent {
  constructor(props) {
      super(props)

      this.state = {
        searchText: ""   
      }
  }

  handleSearch = (value) => {
    this.setState({
      searchText: value
    })
  }

  render() {
  return (
    <div className="App">
      <div className="header">
        <Header  handleSearch = { this.handleSearch }/>
      </div>
      <div className="chatboxWrapper">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="chatbox">
        <Chatbox searchText = { this.state } />
      </div>
      </div>
    </div>
  );
  }
}

export default App;
