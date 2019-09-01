import React, { Component } from 'react'
import Socials from './Socials.jsx'

export default class ElectronicMusic extends Component {
    render() {
        return (
            <div>
            <h1 class="name">Charles' Electronic Music</h1>
       <div class="rectangle"></div>
       <div class="content">
            <p class="about">Since the age of 13, I have been learning how to produce electronic music. My current production focuses on bass house and future bass. Check out some of my recent work in the embedded playlist.</p>
         <div class="edm">
         <iframe width="100%" title='soundcloud' height="400" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/684310476%3Fsecret_token%3Ds-Nc19b&color=%230c5a9f&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        </div>
            
       </div>
       <Socials />
       </div>
        )
    }
}
