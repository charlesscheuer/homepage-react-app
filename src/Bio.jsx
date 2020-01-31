import React from "react";

export default function Bio() {
  return (
    <p className="about">
      From developing web apps to producing wool fleeces, I find learning
      intriguing and I am passionate about chasing my curiousity by building my
      ideas. <br />
      <br />
      Right now I'm doing a study abroad program for my Operations and Supply
      Chain Management major at the Copenhagen Business School, building side
      projects from web apps to apparel, and making music.
      <br />
      <br />
      Previously I have worked as a software engineering intern at Flyhomes,
      built web apps like{" "}
      <a className="about_email" href="https://www.imfree.fyi/" target="_blank">
        ImFreeFYI
      </a>{" "}
      and{" "}
      <a className="about_email" href="https://www.juried.co/" target="_blank">
        Juried
      </a>
      , developed prototypes of{" "}
      <a
        href="https://rocketapparel.company/"
        title="Check out the original site here."
        className="about_email"
        target="blank"
      >
        a fleece,
      </a>{" "}
      and{" "}
      <a
        href="https://medium.com/swlh/lessons-learned-selling-cheap-electronics-on-amazon-7941dfe3eaac"
        title="lessons learned selling $30,000 worth of earbuds."
        className="about_email"
        target="blank"
      >
        sold earbuds on Amazon.
      </a>
      <br />
      <br />
      If you would like to discuss anything mentioned here or just chat, please{" "}
      <a
        href="Mailto:hi@charlesscheuer.com"
        title="email me"
        className="about_email"
      >
        reach out.
      </a>
    </p>
  );
}
