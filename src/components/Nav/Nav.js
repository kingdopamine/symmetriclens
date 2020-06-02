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
            <a href="clothing"><li>clothing.</li></a>
            <a href="footwear"><li>footwear.</li></a>
            <a href="accessories"><li>bags./accesories.</li></a>
          </ul>

          <ul id="sublist">
            <li onClick={()=>{return this.hamburgerToggle()}}><i class="fas fa-bars" id="hamburger"></i></li>
            <li onClick={()=>{this.setState({search:"searchbar"})}}><i class="fas fa-search" id="searchicon"></i></li>
            <li><a href="https://www.instagram.com/symmetriclens" target="blank"><i class="fab fa-instagram" id="ig-icon"></i></a></li>
            <li id="contact-link"><a href="/contact">contact.</a></li>
            <a href="/"><img src={logo} id="nav-logo" alt="symmetriclens. logo"/></a>
          </ul>
          
        </div>
        <div>
          <form id={this.state.search} action="/search">
            <i class="far fa-times-circle" id="closesearch" onClick={()=>{this.setState({search:"nosearch"})}}></i>
            <input type="text" id="searchtext" name="q" autocomplete="off" placeholder="Search..." autofocus/>
          </form>
        </div>
        <div id={this.state.hamburger}>
          <ul id="mainlist-small-width">
            <li></li><br/><br/>
            <a href="clothing"><li>clothing.</li></a><br/><br/>
            <a href="footwear"><li>footwear.</li></a><br/><br/>
            <a href="accessories"><li>bags./accessories</li></a><br/><br/>
            <a href="contact"><li>contact.</li></a><br/><br/>
            <li onClick={()=>{
              this.setState({search:"searchbar"});
              this.hamburgerToggle()
              }} id="searchsubmenu">search.  <i class="fas fa-search" ></i></li><br/><br/><br/>

          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;