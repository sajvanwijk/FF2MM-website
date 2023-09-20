import React from 'react'

import PropTypes from 'prop-types'

import SectionSeparator from './section-separator'
import './footer.css'

const Footer = (props) => {
  return (
    <div className={`footer-footer-container ${props.rootClassName} `}>
      <SectionSeparator
        rootClassName="section-separator-root-class-name"
        className=""
      ></SectionSeparator>
      <div className="footer-footer">
        <div className="footer-social-links">
          <a
            href="https://www.facebook.com/profile.php?id=61550917932627"
            target="_blank"
            rel="noreferrer noopener"
            className="footer-link"
          >
            <svg viewBox="0 0 877.7142857142857 1024" className="footer-icon">
              <path
                d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"
                className=""
              ></path>
            </svg>
          </a>
          <a
            href="mailto:feelfree2makemusic@gmail.com?subject="
            className="footer-link1"
          >
            <svg viewBox="0 0 1024 1024" className="footer-icon2">
              <path
                d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"
                className=""
              ></path>
            </svg>
          </a>
          <span className="footer-text">{props.email_address}</span>
        </div>
        <div className="footer-copyright-container-sm">
          <span className="footer-link2 Anchor author-reference">
            <span className="">© S.A.J. van Wijk,</span>
            <span className=""> 2023</span>
          </span>
        </div>
        <div className="footer-copyright-container">
          <span className="footer-link3 Anchor author-reference">
            <span className="">
              Website designed and built by S.A.J. van Wijk, ©
            </span>
            <span className=""> 2023</span>
          </span>
        </div>
      </div>
    </div>
  )
}

Footer.defaultProps = {
  rootClassName: '',
  email_address: 'feelfree2makemusic@gmail.com',
}

Footer.propTypes = {
  rootClassName: PropTypes.string,
  email_address: PropTypes.string,
}

export default Footer
