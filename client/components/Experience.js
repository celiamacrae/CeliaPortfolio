import React, {Component} from 'react'
import {exlogos} from '../logos'
import {Helmet} from 'react-helmet'

const Experience = () => {
  return (
    <div id="experiences" className="content">
      <Helmet>
        <title>Celia Macrae | Education and Experience</title>
      </Helmet>

      <br />

      <div className="experience">
        <h2 className="exname">Fullstack Academy</h2>
        <h4 className="extitle">Software Engineering Teaching Fellow (2020)</h4>
        <img className="eduex_img" src={exlogos.fullstack} />
        <ul className="responsibilities">
          <li className="bullet">
            Reviewed fundamental algorithms with 31 junior engineering students
          </li>
          <li className="bullet">
            Provided technical support to 7 student mentees through office hours
            and learning team lunches
          </li>
          <li className="bullet">
            Oversaw student projects from ideation to deployment through agile
            workflow and code reviews
          </li>
          <li className="bullet">
            Administered 3-4 behavioral and technical interviews per week to
            prospective students
          </li>
        </ul>
      </div>

      <div className="experience">
        <h2 className="exname">Grace Hopper Program at Fullstack Academy</h2>
        <h4 className="extitle">Software Engineering Student (2019-2020)</h4>
        <img className="eduex_img" src={exlogos.gracehopper} />
        <ul className="responsibilities">
          <li className="bullet">
            17-week immersive software engineering program based in New York
            City
          </li>
          <li className="bullet">
            Centered on full-stack JavaScript development, including Node.js,
            Express, Sequelize ORM for PostgreSQL databases, React and Redux;
            along with HTML & CSS, and CS fundamentals
          </li>
        </ul>
      </div>

      <div className="experience">
        <h2 className="exname">Duke University</h2>
        <h4 className="extitle">
          Bachelors Degree Computer Science & Sociology Minor (2015-2019)
        </h4>
        <img className="eduex_img" src={exlogos.duke} />
        <ul className="responsibilities">
          <li className="bullet">
            <p className="bebold">Relevant Cousework:</p>
            Data Structures and Algorithms - Discrete Math for Computer Science
            - Computer Architecture - Introduction to Operating Systems - Design
            & Analysis of Algorithms
          </li>
          <li className="bullet">
            <p className="bebold">Extracurriculars:</p>
            Duke Varsity Women's Rowing - Duke Student Government Research Unit
            (DSGRU) - Duke Peer Advocates for Sexual Health (PASH)
          </li>
          <li className="bullet">
            <p className="bebold">Volunteer:</p>
            Hillcrest Convalescent Center - Zero Waste Game Day -
            Rubenstein-Bing Student-Athlete Civic Engagement (ACE) Program -
            George Watts Elementary School
          </li>
        </ul>
      </div>

      <div className="experience">
        <h2 className="exname">Social Science Research Institute</h2>
        <h4 className="extitle">
          Lab Assistant, Research on the Education and Development of Youth
          (REDY) Lab (2018)
        </h4>
        <img className="eduex_img" src={exlogos.ssri} />
        <ul className="responsibilities">
          <li className="bullet">
            Analyzed minority child participation in gifted classes in North
            Carolina public schools for state funded project Nurturing Bright
            Tomorrow (NBT)
          </li>
          <li className="bullet">
            Assisted planning and hosting the Bold Ideas in Education: School
            Readiness Summit
          </li>
          <li className="bullet">
            Produced summer readiness packets for students entering
            Kindergarten, 1st, and 2nd grade in Wake County Public Schools
          </li>
        </ul>
      </div>

      <br />
    </div>
  )
}

export default Experience
