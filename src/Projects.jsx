import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

import ToggleArrow from "./ToggleArrow.jsx";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: null
    };
  }

  renderAcademics = () => {
    return (
      <p class="portfolio_paragraph">
        I'm currently studying supply chain management and computer science at{" "}
        <a
          href="https://wustl.edu/"
          title="I am studying business and computer science at Washington University in St. Louis."
          class="portfolio_link"
          target="blank"
        >
          WashU
        </a>
        , but I also learn about things like{" "}
        <a
          class="portfolio_link"
          title="I'm learning about the ecological impacts of increased demand for cashmere and the issues presented by overgrazing."
          href="https://medium.com/@charlieschr/wool-research-ddcca8036458"
        >
          Wool.
        </a>
      </p>
    );
  };

  renderRecommendations = () => {
    return [
      <h4 class="portfolio_subhead">
        Stepen Wald – Senior Product Manager @ Flyhomes
      </h4>,
      <p class="portfolio_paragraph">
        "I had the pleasure of working with Charles over the summer of 2019 at
        Flyhomes. Charles was a Developer on our customer systems team for which
        I was a Product Manager. The team is responsible for our client facing
        websites, landing pages, search, and account experiences. In short,
        Charles was an amazing teammate, an impressive individual contributor,
        and any company would be lucky to have him on their team. Over the
        course of the summer Charles ramp was impressively quick. He quickly
        integrated with the team and started contributing meaningful features in
        only a week or so. His accomplishments include rebuilding the home
        listing details pages, building a new tour booking client flow,
        performance optimizations, and improving our mobile-web map. Each of
        these features were delivered with a sense of craftsmanship and polish -
        from minute animations of text and buttons to fluid page transitions.
        The things that really stuck out to me were Charles work ethic and his
        customer empathy. Charles was eager to make an impact and jump in on
        random bugs and projects throughout the whole summer. He worked
        diligently and collaboratively to get projects done on tight deadlines
        helping drive implementation discussions to arrive at the best
        solutions. He became my go-to engineer for quick fixes - able to quickly
        root cause, devise solutions and deploy. But -- and what I really
        appreciated as a Product Manager, was Charles sense of customer empathy.
        Often times Charles would think through the product and customer flows
        as he was working through the project and propose enhancements &
        improvements. Any company would be lucky to have to have Charles on
        their team."
      </p>,
      <h4 class="portfolio_subhead">
        Alexis Okamura – Software Engineer @ Flyhomes
      </h4>,
      <p class="portfolio_paragraph">
        "While working at Flyhomes I had the chance to work directly with
        Charles. And although our time working together was short, Charles was a
        fantastic intern. To put it simply, he was thrown into a fire and was
        expected to hit the ground running, and he did exactly that. Charles was
        a self-starter, quick at learning our tech stack and was always eager to
        help out whenever he could. When facing roadblocks he knew the right
        questions to ask and needed little direction to move forward. I
        definitely recommend Charles and I hope that we will someday cross paths
        again!"
      </p>
    ];
  };

  renderProjects = () => {
    return (
      <ul class="portfolio_paragraph">
        <li class="portfolio_item">
          <a
            href="https://www.imfree.fyi"
            title="Meeting schedule app"
            class="portfolio_link"
            target="blank"
          >
            ImFreeFYI:
          </a>{" "}
          a web app to find a mutual meeting time with no sign up necessary.
          Received 289 upvotes on ProductHunt, grew from 0-400 all time users
          over the course of 3 months, consistently 2-5 users per day.
        </li>
        <li class="portfolio_item">
          <a
            href="https://rocketapparel.company/"
            title="Check out the original site here."
            class="portfolio_link"
            target="blank"
          >
            Rocket Apparel:
          </a>{" "}
          my fleece brand creation. This project started a few years ago when I
          made the logo in my graphic design class. I always wanted to use the
          logo for a clothing brand and, after learning about private labeling
          through my experience selling on Amazon, I built a prototype of a
          quarter zip fleece. After testing the click-through-rate for this
          fleece, I decided to iterate on the concept and develop embroidered
          t-shirts. I am currently building a new website for the brand while I
          am studying abroad and plan to relaunch in the summer of 2020.
        </li>
        <li class="portfolio_item">
          <a
            href="https://juried.co/home"
            title="Juried."
            class="portfolio_link"
            target="blank"
          >
            Juried:
          </a>{" "}
          Juried is a friend inspired by a friend of mine asking me "What if we
          built a curated newsletter of fine art for sale?" I was intrigued by
          the idea, so over winter break of 2019-2020 we built it and are
          currently developing our list of featured artists.
        </li>

        <li class="portfolio_item">
          <a
            href="https://medium.com/swlh/lessons-learned-selling-cheap-electronics-on-amazon-7941dfe3eaac"
            title="My experience with private labeling / selling on Amazon."
            class="portfolio_link"
            target="blank"
          >
            Amazon private labeling:
          </a>{" "}
          during my freshman summer, I sold private label bluetooth earbuds on
          Amazon. These are the lessons I learned selling all 2,400 units in two
          months.
        </li>
      </ul>
    );
  };

  renderProfessional = () => {
    return [
      <ul class="portfolio_paragraph">
        <li class="portfolio_item">
          <a
            href="https://www.flyhomes.com/"
            title="Summer 2019 software engineering internship."
            class="portfolio_link"
            target="blank"
          >
            Flyhomes:
          </a>{" "}
          Software engineering internship during summer of 2019. I worked across
          the full stack (React & Ruby on Rails / postgresQL) to implement new
          features and improve the performance of existing ones.
        </li>
        <li class="portfolio_item">
          <a
            href="https://www.backbayaudio.com/"
            title="Summer 2018 internship. I worked with a WashU alumnus who has his own private labeling audio brand on Amazon."
            class="portfolio_link"
            target="blank"
          >
            Back Bay Audio:
          </a>{" "}
          learned how to source private label products and get them ranked on
          Amazon's search engine.
        </li>
        <li class="portfolio_item">
          <a
            href="https://www.yournational.com/"
            title="Summer 2018 internship. I worked with a $200m producer and did analysis on structured products."
            class="portfolio_link"
            target="blank"
          >
            National Securities:
          </a>{" "}
          performed research on structured products and improved automation for
          a &#36;200m producer.
        </li>
      </ul>
    ];
  };

  renderCreative = () => {
    return (
      <p class="portfolio_paragraph">
        I like to{" "}
        <a
          href="https://dribbble.com/Charlesscheuer"
          title="Check out some of my logo design work here."
          class="portfolio_link"
          target="blank"
        >
          design,
        </a>{" "}
        <Link to="/code" title="Some code I've written" class="portfolio_link">
          code,
        </Link>{" "}
        and{" "}
        <Link
          to="/electronic"
          title="In my free time, I like to make electronic music in Ableton live"
          class="portfolio_link"
        >
          produce electronic music.{" "}
        </Link>
      </p>
    );
  };

  activeChangeHandler = changeTo => {
    if (changeTo === this.state.active) {
      this.props.history.push("/");
      this.setState({
        active: null
      });
    } else {
      if (changeTo === 0) {
        this.props.history.push("/Academic");
      } else if (changeTo === 1) {
        this.props.history.push("/Professional");
      } else if (changeTo === 3) {
        this.props.history.push("/Projects");
      } else if (changeTo === 2) {
        this.props.history.push("/Creative");
      }

      this.setState({
        active: changeTo
      });
    }
  };

  pushToCodePage = () => {
    this.props.history.push("/code");
  };

  componentDidMount() {
    const { category } = this.props;
    if (category && this.state.active !== category) {
      this.setState({ active: category });
    }
  }

  render() {
    const { active } = this.state;
    return (
      <div class="links">
        <div className="selector" onClick={() => this.activeChangeHandler(0)}>
          <ToggleArrow active={active === 0} />
          <h2 class="portfolio">Academic</h2>
        </div>
        {active === 0 && this.renderAcademics()}
        <div className="selector" onClick={() => this.activeChangeHandler(1)}>
          <ToggleArrow active={active === 1} />
          <h2 class="portfolio">Internships</h2>
        </div>
        {active === 1 && this.renderProfessional()}
        <div className="selector" onClick={() => this.activeChangeHandler(3)}>
          <ToggleArrow active={active === 3} />
          <h2 class="portfolio">Side Projects</h2>
        </div>
        {active === 3 && this.renderProjects()}
        {/** <div className="selector" onClick={() => this.activeChangeHandler(2)}>
          <ToggleArrow active={active === 3} />
          <h2 class="portfolio">Recommendations</h2>
        </>
        {active === 3 && this.renderRecommendations()}
     */}
        <div className="selector" onClick={() => this.activeChangeHandler(2)}>
          <ToggleArrow active={active === 2} />
          <h2 class="portfolio">Creative / Code </h2>
        </div>
        {active === 2 && this.renderCreative()}
      </div>
    );
  }
}

export default withRouter(Projects);
