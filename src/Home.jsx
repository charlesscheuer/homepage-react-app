import React, { Component } from 'react'
import Bio from './Bio.jsx'
import Socials from './Socials.jsx'
import Projects from './Projects.jsx'

export default class Home extends Component {
    render() {
      console.log(this.props.category)
        return (
            <div class="container">
      <h1 class="name">Charles Scheuer</h1>
      <div class="rectangle"></div>
      <div class="content">
        <Bio />
        <Projects category={this.props.category}/>
      </div>
      <Socials />
    </div>
        )
    }
}
