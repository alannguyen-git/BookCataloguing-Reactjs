import React, { Component } from 'react'
import './App.css';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

import WelcomePage from './Components/WelcomePage/WelcomePage'
import InitialSearch from './Components/InitialSeachPage/InitialSearch'
import SearchByGroup from './Components/SearchByGroupPage/SearchByGroup'



import BookPage from './Components/BookPage'

import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'


export default class App extends Component {
  render() {
    let styleContainer = {
      height:700,
      margin:0,
    }
    return (
      <div>
        <BrowserRouter> 
          <Navbar/>
            <div style={styleContainer}>
              
            

              <Route exact path='/' component={WelcomePage}/>
              <Route  path='/search' component={InitialSearch}/>
              <Route  path='/searchbygroup' component={SearchByGroup}/>
              <Route  path='/.:book_id' component={BookPage} />
              
            </div>  
          <Footer/>
      
      </BrowserRouter>
      </div>
    )
  }
}





