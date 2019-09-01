import React, { Component } from 'react'
import {withRouter, Link} from 'react-router-dom'

import ToggleArrow from './ToggleArrow.jsx'

class Projects extends Component {

    constructor(props) {
        super(props)
        this.state = {
            active: 1
        }
    }
     
    renderAcademics = () => {
        return (
            <p class="portfolio_paragraph">
            I'm currently studying supply chain management and computer science
            at{' '}<a
              href="https://wustl.edu/"
              title="I am studying business and computer science at Washington University in St. Louis."
              class="portfolio_link"
              target="blank"
              >WashU</a
            >, but I also learn about things like{' '}<a
              class="portfolio_link"
              title="I'm learning about the ecological impacts of increased demand for cashmere and the issues presented by overgrazing."
              href="https://medium.com/@charlieschr/wool-research-ddcca8036458"
              >Wool</a
            >.
          </p>
        )
    }

    renderProfessional = () => {
        return [
            <h4 class="portfolio_subhead">Projects</h4>, <ul class="portfolio_paragraph">
            <li class="portfolio_item">
              <a
                href="https://medium.com/swlh/lessons-learned-selling-cheap-electronics-on-amazon-7941dfe3eaac"
                title="My experience with private labeling / selling on Amazon."
                class="portfolio_link"
                target="blank"
                >Amazon private labeling:</a
              >{' '}
              lessons learned selling 2,400 earbuds on Amazon
            </li>
            <li class="portfolio_item">
              <a
                href="https://medium.com/@charlieschr/rocket-apparel-c16b4864b74"
                title="Check out my thought process here."
                class="portfolio_link"
                target="blank"
                >Rocket Apparel:</a
              >{' '}
              my fleece brand creation
            </li>
            <li class="portfolio_item">
              <a
                href="https://www.imfree.fyi"
                title="Meeting schedule app"
                class="portfolio_link"
                target="blank"
                >Meeting schedule app:</a
              >{' '} I built an app to allow individuals to find a mutual meeting time without signing up.
              
            </li>
          </ul>, <h4 class="portfolio_subhead">Internships</h4>, <ul class="portfolio_paragraph">
          <li class="portfolio_item">
            <a
              href="https://www.flyhomes.com/"
              title="Summer 2019 software engineering internship."
              class="portfolio_link"
              target="blank"
              >Flyhomes:</a
            >{' '}
            Software engineering internship during summer of 2019. Worked across the full stack (React & Ruby on Rails / postgresQL) to implement new features and improve performance of home search.
          </li>
          <li class="portfolio_item">
            <a
              href="https://www.backbayaudio.com/"
              title="Summer 2018 internship. I worked with a WashU alumnus who has his own private labeling audio brand on Amazon."
              class="portfolio_link"
              target="blank"
              >Back Bay Audio:</a
            >{' '}
            learned how to source private label products and get them ranked on
            Amazon's search engine
          </li>
          <li class="portfolio_item">
            <a
              href="https://www.yournational.com/"
              title="Summer 2018 internship. I worked with a $200m producer and did analysis on structured products."
              class="portfolio_link"
              target="blank"
              >National Securities:</a
            >{' '}
            performed research on structured products and improved automation
            for a &#36;200m producer
          </li>
        </ul>
        ]
    }

    renderCreative = () => {
        return (
            <p class="portfolio_paragraph">
              <Link
                to='/code'
                title="Some code I've written"
                class="portfolio_link"
                >Code,</Link>{' '}
              <a
                href="https://dribbble.com/Charlesscheuer"
                title="Check out some of my logo design work here."
                class="portfolio_link"
                target="blank"
                >Design,</a
              >{' '}
              <Link
                to="/electronic"
                title="In my free time, I like to make electronic music in Ableton live"
                class="portfolio_link"
                >Electronic music production </Link>
            </p>
        )
    }

    activeChangeHandler = (changeTo) => {
        if (changeTo === 0) {
          this.props.history.push('/Academic')
        } else if (changeTo === 1) {
            this.props.history.push('/Professional')
        } else if (changeTo === 2) {
            this.props.history.push('/Creative')
        }

        this.setState({
            active: changeTo
        })
    }

    pushToCodePage = () => {
        this.props.history.push('/code')
    }

    componentDidMount() {
        const {active} = this.state
        const {category} = this.props.match.params
        if (this.props.match.params.category) {
           if (category === 'Academic' && active !== 0) {
               this.setState({active: 0})
           } else if (category === 'Professional' && active !== 1) {
            this.setState({active: 1})
           } else if (category === 'Creative' && active !== 2) {
            this.setState({active: 2})
           }
        }
    }
    
    render() {
        const {active} = this.state
        return (
            <div class="links">
            <div className="selector" onClick={() => this.activeChangeHandler(0)}>
            <ToggleArrow active={active === 0}/>
            <h2 class="portfolio">Academic</h2>
            </div>
            {active === 0  && this.renderAcademics()}
            <div className="selector" onClick={() => this.activeChangeHandler(1)}>
            <ToggleArrow active={active === 1}/>
            <h2 class="portfolio">Professional</h2>
            </div>
            {active === 1  && this.renderProfessional()}
            <div className="selector" onClick={() => this.activeChangeHandler(2)}>
            <ToggleArrow active={active === 2}/>
            <h2 class="portfolio">Creative</h2>
            </div>
            {active === 2 && this.renderCreative()}
          </div>
        )
    }
}

export default withRouter(Projects)
