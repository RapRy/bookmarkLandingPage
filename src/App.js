import React, { Component } from 'react'

import GlobalStyle from './globalStyles';

import { HeaderNav, NavMenu, Hero, Features, DLextension, Faq, Newsletter, Sitemap } from './components';

class App extends Component {
  constructor(){
    super()
    this.state = {
      navToggle: false
    }
  }

  toggleNavigation = (val) => {
    this.setState({navToggle:val})
  }

  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        {this.state.navToggle &&  <NavMenu toggleNavigation={this.toggleNavigation} />}
        <HeaderNav toggleNavigation={this.toggleNavigation} />
        <Hero />
        <Features />
        <DLextension />
        <Faq />
        <Newsletter />
        <Sitemap />
      </React.Fragment>  
    )
  }
}

export default App;