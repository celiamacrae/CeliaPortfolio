import React from 'react'
import {NavLink} from 'react-router-dom'

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.onHover = this.onHover.bind(this)
    this.offHover = this.offHover.bind(this)
  }

  onHover(e) {
    this.setState({
      [e.target.id]: true
    })
  }
  offHover(e) {
    this.setState({
      [e.target.id]: false
    })
  }

  render() {
    const aboutHov = this.state.about_nav ? 'nav_item select_nav' : 'nav_item'
    const eduexHov = this.state.eduex_nav ? 'nav_item select_nav' : 'nav_item'
    const projectsHov = this.state.projects_nav
      ? 'nav_item select_nav'
      : 'nav_item'
    const skillsHov = this.state.skills_nav ? 'nav_item select_nav' : 'nav_item'
    const contactHov = this.state.contact_nav
      ? 'nav_item select_nav'
      : 'nav_item'
    return (
      <div>
        <div id="site_title">
          <h1 id="celia">CELIA MACRAE</h1>
          <img
            id="hamburger"
            src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png"
          />
        </div>

        <nav>
          <div id="nav">
            <NavLink
              id="about_nav"
              className={aboutHov}
              onMouseOver={this.onHover}
              onMouseOut={this.offHover}
              to="/about"
            >
              About Me
            </NavLink>
            <NavLink
              id="eduex_nav"
              className={eduexHov}
              onMouseOver={this.onHover}
              onMouseOut={this.offHover}
              to="/education_and_experience"
            >
              Education and Experience
            </NavLink>
            <NavLink
              id="projects_nav"
              className={projectsHov}
              onMouseOver={this.onHover}
              onMouseOut={this.offHover}
              to="/projects"
            >
              Projects
            </NavLink>
            <NavLink
              id="skills_nav"
              className={skillsHov}
              onMouseOver={this.onHover}
              onMouseOut={this.offHover}
              to="/skills"
            >
              Skills
            </NavLink>
            <NavLink
              id="contact_nav"
              className={contactHov}
              onMouseOver={this.onHover}
              onMouseOut={this.offHover}
              to="/contact"
            >
              Contact
            </NavLink>
          </div>
        </nav>
        {/* <hr /> */}
      </div>
    )
  }
}

export default Navbar
