import React, { Component } from 'react'
import Socials from './Socials.jsx'

export default class CodePage extends Component {
    render() {
        return (
            <div>
            <h1 class="name">Charles' Code</h1>
       <div class="rectangle"></div>
       <div class="content">
            <p class="about">These are some of the web development projects I have worked on.           
                    <br /> <br /> You can also check out my <a href="https://github.com/charlesscheuer" title="my github" class="about_email">github</a></p>
         <div class="links">
                <h2 class="portfolio">Technologies</h2>
                <h4 class="portfolio_subhead">Experienced with</h4>
                <p class="portfolio_paragraph">JavaScript, React, postgreSQL, SCSS, Ruby on Rails</p>
                <h2 class="portfolio">Projects</h2>
                <h4 class="portfolio_subhead">Developed in class</h4>
                <ul class="portfolio_paragraph">
                    <li class="portfolio_item"><a 
                        href="https://charlesscheuer.github.io/todoappcharlesscheuer/" 
                        title="Todo app" 
                        class="portfolio_link" 
                        target="blank">Todo app &#40;web only&#41;</a></li>
                    <li class="portfolio_item"><a 
                        href="https://charlesscheuer.github.io/background-generator/" 
                        title="Todo app" 
                        class="portfolio_link" 
                        target="blank">Background Generator &#40;web only&#41;</a></li>
                    <li class="portfolio_item"><a href="https://charlesscheuer.github.io/natours-project/" 
                            title="Travel company project" 
                            class="portfolio_link" 
                            target="blank">Travel company project</a>
                    </li>   
                    
                    <li class="portfolio_item"><a href="https://charlesscheuer.github.io/nexter/" 
                        title="Realty company project" 
                        class="portfolio_link" 
                        target="blank">Realty company project</a>
                    </li>  
                </ul>
                <h4 class="portfolio_subhead">Personal Projects</h4>
                <ul class="portfolio_paragraph">
                    <li class="portfolio_item"><a href="https://rickdstructurednotes.surge.sh/" 
                        title="Spreadsheet" 
                        class="portfolio_link" 
                        target="blank">Live excel spreadsheets</a>
                    </li>
                    <li class="portfolio_item"><a href="https://www.imfree.fyi/" 
                        title="Calendar" 
                        class="portfolio_link" 
                        target="blank">Calendar meeting organization</a>
                    </li>
                    <li class="portfolio_item"><a href="https://github.com/charlesscheuer/rocket-git" 
                        title="Brand prototype" 
                        class="portfolio_link" 
                        target="blank">Fleece brand concept</a>
                    </li>
                    
                </ul>
           </div>
            
       </div>
       <Socials />
       </div>
        )
    }
}
