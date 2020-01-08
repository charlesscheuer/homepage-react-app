import React, { Component } from 'react';
import Socials from './Socials.jsx';

export default class CodePage extends Component {
  render() {
    return (
      <div>
        <h1 class='name'>Charles' Code</h1>
        <div class='rectangle'></div>
        <div class='content'>
          <p class='about'>
            I'm a developer that speaks the language of designers. I have two
            years of experience as a JavaScript developer and I really enjoy
            building side projects in React.
            <br /> <br />
            This summer, I was a software engineering intern at{' '}
            <a
              href='https://www.Flyhomes.com'
              title='Flyhomes'
              class='about_email'
              target='blank'
            >
              Flyhomes.
            </a>
            <br /> <br />
            Right now, I’m studying computer science and working on side
            projects. If you'd like to see see the code for these projects,
            please see my{' '}
            <a
              href='https://github.com/charlesscheuer'
              title='my github'
              class='about_email'
            >
              Github.
            </a>
          </p>
          <div class='links'>
            <h2 class='portfolio'>Technologies</h2>
            <h4 class='portfolio_subhead'>I'm very comfortable working with</h4>
            <p class='portfolio_paragraph'>
              JavaScript, React, postgreSQL, SCSS, NodeJS
            </p>
            <h2 class='portfolio'>Projects</h2>
            <h4 class='portfolio_subhead'>
              Some personal projects I have built
            </h4>
            <p class='portfolio_paragraph portfolio_paragraph-code'>
              I built{' '}
              <a
                href='https://www.imfree.fyi/'
                title='Calendar'
                class='portfolio_link'
                target='blank'
              >
                ImFreeFYI
              </a>{' '}
              using React and NodeJS with Google Cloud Functions.
            </p>
            <p class='portfolio_paragraph portfolio_paragraph-code'>
              I used React and NodeJS (and FullStory) to test the
              click-through-rate for a{' '}
              <a
                href='https://github.com/charlesscheuer/rocket-git'
                title='Brand prototype'
                class='portfolio_link'
                target='blank'
              >
                Fleece I made.
              </a>
            </p>

            <p class='portfolio_paragraph'>
              I'm currently hacking on a curated art collection called{' '}
              <a
                href='https://juried.co/home'
                title='Juried fine art'
                class='portfolio_link'
                target='blank'
              >
                Juried
              </a>{' '}
              and a community for music producers called{' '}
              <a
                href='https://thevoltage.club'
                title='The Voltage Club'
                class='portfolio_link'
                target='blank'
              >
                Voltage.
              </a>
            </p>
          </div>
        </div>
        <Socials />
      </div>
    );
  }
}
