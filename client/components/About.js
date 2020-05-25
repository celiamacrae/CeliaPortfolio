import React, {Component} from 'react'
import {Helmet} from 'react-helmet'

const About = () => {
  return (
    <div id="about_wrapper" className="content">
      <Helmet>
        <title>Celia Macrae</title>
      </Helmet>
      <br />
      <h1>Hello, World.</h1>
      <img id="self" src="https://i.imgur.com/Zaxi80t.jpg" />

      <h4 id="aboutme">
        My name is Celia Macrae. I am a full-stack web developer based in New
        York, NY. I recently graduated from Duke University (2019) with a
        Bachelor's Degree in Computer Science and a minor in Sociology that
        focused on Educational Sociology. After graduating, I completed the
        Grace Hopper Program at Fullstack Academy to sharpen my technical skills
        (NERDS Stack) and gain experience working on agile teams. I am currently
        working as a Software Engineering Teaching Fellow at Fullstack Academy
        and seeking full-time employment as a Software Engineer.
      </h4>
      <br />
    </div>
  )
}

export default About
