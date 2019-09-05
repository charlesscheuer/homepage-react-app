import React, { Component } from 'react'
import Bio from './Bio.jsx'
import Socials from './Socials.jsx'
import Projects from './Projects.jsx'

export default class Home extends Component {
    render() {
        return (
            <div className="container">
      <h1 className="name">Charles Scheuer</h1>
      <div className="rectangle"></div>
      <div className="content">
        <Bio />
        <Projects category={this.props.category}/>
      </div>
      <Socials />
    </div>
        )
    }
}
