import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header.js'
import Section from './components/Section.js'
import Login from './components/Login.js'
import {DataProvider} from './components/Context.js'
class App extends Component{
  render(){
    return(
      <DataProvider>
        <div className="App">
          <Router>
            
           <Login/>
          </Router>
        </div>
        </DataProvider>
    );    
  }
}

export default App;
