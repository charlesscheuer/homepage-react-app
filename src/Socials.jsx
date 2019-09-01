import React from 'react'
import DribbleIcon from './DribbleIcon'
import EmailIcon from './EmailIcon'
import LinkedInIcon from './LinkedInIcon'
import MediumIcon from './MediumIcon'

export default function Socials() {
    return (
        <div class="bottom">
        <div class="social">
          <a
            href="https://medium.com/@charlieschr"
            title="Read my writing on Medium"
            class="social_link medium"
            ><MediumIcon /></a>
          <a
            href="https://www.linkedin.com/in/charles-scheuer/"
            title="Connect with me on LinkedIn"
            class="social_link"
            ><LinkedInIcon /></a>
          <a
            href="https://dribbble.com/Charlesscheuer"
            title="My Dribbble profile"
            class="social_link"
            ><DribbleIcon /></a>
          <a
            href="Mailto:hi@charlesscheuer.com"
            title="email me"
            class="social_link"
            ><EmailIcon />
          </a>
        </div>
        <a
          href="Mailto:hi@charlesscheuer.com"
          title="email me"
          class="bottom_email"
          >hi@charlesscheuer.com</a
        >
      </div>
    )
}
