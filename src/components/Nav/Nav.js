import React from 'react';
import './Nav.css'

import logo from '../../symmetriclens-logo.png'

class Nav extends React.Component {
  constructor(props){
    super(props);
    this.state={
      search:"nosearch",
      hamburger:"hamburger-menu-hidden"
    }
    this.hamburgerToggle=this.hamburgerToggle.bind(this)
    
  }

  hamburgerToggle(){
    if(this.state.hamburger==="hamburger-menu-hidden"){
      this.setState({hamburger:"hamburger-menu"})
    } else {
      this.setState({hamburger:"hamburger-menu-hidden"})
    }
  }

  
  render() {
    return (
      <div>
        <div id="navBar">
          <a href="/"><h1 id="logo">symmetriclens.</h1></a>
          <ul id="mainlist">
            <a href="clothing"><li>CLOTHING</li></a>
            <a href="footwear"><li>FOOTWEAR</li></a>
            <a href="accessories"><li>BAGS/ACCESSORIES</li></a>
          </ul>
          <ul id="sublist">
            <li onClick={()=>{return this.hamburgerToggle()}}><i class="fas fa-bars" id="hamburger"></i></li>
            <li onClick={()=>{this.setState({search:"searchbar"})}}><i class="fas fa-search" id="searchicon"></i></li>
            <li><a href="https://www.instagram.com/symmetriclens" target="blank"><i class="fab fa-instagram" id="ig-icon"></i></a></li>
            <li id="contact-link"><a href="/contact">CONTACT</a></li>
            <a href="/"><img src={logo} id="nav-logo" alt="symmetriclens. logo"/></a>
          </ul>
          
        </div>
        <div>
          <form id={this.state.search} action="/search">
            <i class="far fa-times-circle" id="closesearch" onClick={()=>{this.setState({search:"nosearch"})}}></i>
            <input type="text" id="searchtext" name="q" autocomplete="off"/>
          </form>
        </div>
        <div id={this.state.hamburger}>
          <ul id="mainlist-small-width">
            <li></li><br/><br/>
            <a href="clothing"><li>CLOTHING</li></a><br/><br/>
            <a href="footwear"><li>FOOTWEAR</li></a><br/><br/>
            <a href="accessories"><li>BAGS/ACCESSORIES</li></a><br/><br/>
            <a href="contact"><li>CONTACT</li></a><br/><br/><br/>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;