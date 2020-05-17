import React, {Component} from 'react'

const Projects = () => {
  return (
    <div className="content">
      <br />
      <div id="project_wrapper">
        {/* GRAPHIT */}
        <div className="project">
          <h2 className="project_name">GraphIt</h2>
          <h4 className="fullstackdev">Fullstack Developer, 2020</h4>

          <img className="proj_snip" src="https://i.imgur.com/3FaNEkC.jpg" />

          <br />

          <p className="project_description">
            GraphIt is a platform that transforms uploaded data from a
            non-technical user to “magically” produce the most appropriate graph
            in seconds.
          </p>
          <br />

          <div className="projinfo">
            <div className="pinfo1">
              <div className="repo">
                <img
                  className="project_repo"
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                />
                <a href="https://github.com/celiamacrae/Graphit2.0">Code</a>
              </div>
              <div className="deployedproj">
                <img
                  className="project_img"
                  src="https://avatars2.githubusercontent.com/u/60450249?s=400&u=b50a16566758429f3ee239735bdadd7ab61b9abc&v=4"
                />
                <a href="https://graphit2.herokuapp.com/">Demo</a>
              </div>
            </div>

            <br />

            <div className="pinfo">
              <p>GraphIt Tech Stack:</p>
              <ul>
                <li>PostgreSQL</li>
                <li>Express.js</li>
                <li>React.js</li>
                <li>React-Redux.js</li>
                <li>Node.js</li>
                <li>Chart.js </li>
              </ul>
            </div>
          </div>

          <br />
        </div>

        {/* MUSHROOM MARKET */}
        <div className="project">
          <h2 className="project_name">Mushroom Marketplace</h2>
          <h4 className="fullstackdev">Fullstack Developer, 2020</h4>
          <img className="proj_snip" src="https://i.imgur.com/Ck3Gf7G.jpg" />
          <br />
          <p className="project_description">
            Mushroom Marketplace is eCommerce web application where users can
            purchase groceries and recipes.
          </p>
          <br />

          <div className="projinfo">
            <div className="pinfo1">
              <div className="repo">
                <img
                  className="project_repo"
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                />
                <a href="https://github.com/1911-GH-mushrooms/GraceShopper">
                  Code
                </a>
              </div>
              <div className="deployedproj">
                <img
                  className="project_img"
                  src="https://avatars3.githubusercontent.com/u/59840616?s=200&v=4"
                />
                <a href="https://graceshopper2020mushroom.herokuapp.com/home">
                  Demo
                </a>
              </div>
            </div>

            <br />

            <div className="pinfo">
              <p>Mushroom Marketplace Tech Stack:</p>
              <ul>
                <li>PostgreSQL</li>
                <li>Express.js</li>
                <li>React.js</li>
                <li>React-Redux.js</li>
                <li>Node.js</li>
                <li>Google OAuth</li>
                <li>Stripe Payment Platform</li>
              </ul>
            </div>
          </div>
        </div>

        {/* STUDY BUDDY */}
        <div className="project">
          <h2 className="project_name">Study Buddy</h2>
          <h4 className="fullstackdev">Fullstack Developer, 2020</h4>
          <img className="proj_snip" src="https://i.imgur.com/s85t7aD.jpg" />
          <br />
          <p className="project_description">
            Study Buddy is an IOS meetup app for study groups that allows you to
            create and attend events.
          </p>
          <br />

          <div className="projinfo">
            <div className="pinfo1">
              <div className="repo">
                <img
                  className="project_repo"
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                />
                <a href="https://github.com/Stackathon-Studdy-Buddy/Study-Buddy">
                  Code
                </a>
              </div>
              <div className="deployedproj">
                {/* <img
                  className="project_img"
                  src="https://avatars1.githubusercontent.com/u/60267185?s=400&u=6bdcd2359d29593392d41f452213606b43cd3f92&v=4"
                /> */}
              </div>
            </div>

            <br />

            <div className="pinfo">
              <p>Study Buddy Tech Stack:</p>
              <ul>
                <li>Firebase Services</li>
                <li>Express.js</li>
                <li>React-Native.js</li>
                <li>React-Redux.js</li>
                <li>Node.js</li>
                <li>Apple Maps API</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  )
}

export default Projects
