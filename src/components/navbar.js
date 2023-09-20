import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navbar.css'

const Navbar = (props) => {
  return (
    <div className={`navbar-container ${props.rootClassName} `}>
      <div className="navbar-container1">
        <Link to="/" className="navbar-navlink">
          <h1 className="navbar-text Logo-Text">
            <span className="navbar-text01">F</span>
            <span className="navbar-text02">f</span>
            <span className="navbar-text03">2</span>
            <span className="navbar-text04">mm</span>
            <span className="navbar-text05">!</span>
            <br className="navbar-text06"></br>
          </h1>
        </Link>
        <Link to="/" className="navbar-navlink01">
          <h1 className="navbar-text07 Logo-Text">
            <span className="navbar-text08">feel free </span>
            <span className="navbar-text09">2</span>
            <span className="navbar-text10"> make music!</span>
            <br className="navbar-text11"></br>
          </h1>
        </Link>
        <div className="navbar-container2">
          <Link
            to="/meer-over-ons"
            className="navbar-navlink02 Button-Text navbar-button button"
          >
            {props.button}
          </Link>
          <Link
            to="/aankomende-optredens"
            className="navbar-navlink03 Button-Text navbar-button button"
          >
            {props.button1}
          </Link>
          <Link
            to="/huur-ons-in"
            className="navbar-navlink04 Button-Text navbar-button button"
          >
            {props.button2}
          </Link>
          <Link
            to="/lid-worden"
            className="navbar-navlink05 Button-Text navbar-button button"
          >
            {props.button3}
          </Link>
          <Link
            to="/contact"
            className="navbar-navlink06 Button-Text navbar-button button"
          >
            {props.button4}
          </Link>
        </div>
        <div data-thq="thq-dropdown" className="navbar-thq-dropdown list-item">
          <div
            data-thq="thq-dropdown-toggle"
            className="navbar-dropdown-toggle"
          >
            <svg viewBox="0 0 1024 1024" className="navbar-icon">
              <path
                d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"
                className=""
              ></path>
              <path
                d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"
                className=""
              ></path>
              <path
                d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"
                className=""
              ></path>
            </svg>
            <div
              data-thq="thq-dropdown-arrow"
              className="navbar-dropdown-arrow"
            ></div>
          </div>
          <ul data-thq="thq-dropdown-list" className="navbar-dropdown-list">
            <li data-thq="thq-dropdown" className="navbar-dropdown list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="navbar-dropdown-toggle1"
              >
                <Link to="/meer-over-ons" className="navbar-navlink07 Anchor">
                  Meer over ons
                </Link>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="navbar-dropdown1 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="navbar-dropdown-toggle2"
              >
                <Link
                  to="/aankomende-optredens"
                  className="navbar-navlink08 Anchor"
                >
                  <span className="">Aankomende optredens</span>
                  <br className=""></br>
                </Link>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="navbar-dropdown2 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="navbar-dropdown-toggle3"
              >
                <Link to="/huur-ons-in" className="navbar-navlink09 Anchor">
                  Huur ons in!
                </Link>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="navbar-dropdown3 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="navbar-dropdown-toggle4"
              >
                <Link to="/lid-worden" className="navbar-navlink10 Anchor">
                  Lid worden
                </Link>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="navbar-dropdown4 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="navbar-dropdown-toggle5"
              >
                <Link to="/contact" className="navbar-navlink11 Anchor">
                  Contact
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

Navbar.defaultProps = {
  rootClassName: '',
  button2: 'Huur ons in!',
  button1: 'Aankomende optredens',
  button3: 'Lid worden',
  button4: 'Contact',
  button: 'Meer over ons',
}

Navbar.propTypes = {
  rootClassName: PropTypes.string,
  button2: PropTypes.string,
  button1: PropTypes.string,
  button3: PropTypes.string,
  button4: PropTypes.string,
  button: PropTypes.string,
}

export default Navbar
