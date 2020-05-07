import React, {Component} from 'react'

const Footer = () => {
  return (
    <div>
      <footer id="footer">
        <div>
          <a href="https://github.com/celiamacrae" className="footer_contact">
            <img
              className="contact_img"
              src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/celia-macrae/"
            className="footer_contact"
          >
            <img
              className="contact_img"
              src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-circle-512.png"
            />
            {/* <img className='contact_img'
            src='https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/linkedin-2-icon-18-256.png' /> */}
          </a>

          <a href="mailto:celiamacrae@gmail.com" className="footer_contact">
            <img
              className="contact_img"
              src="https://cdn.clipart.email/d161e3ad2459c7b51f7888466a5aeff0_circle-email-inbox-letter-mail-message-messages-icon_512-512.png"
            />
          </a>
        </div>

        <p>Created by Celia Macrae in 2020</p>
      </footer>
    </div>
  )
}

export default Footer
