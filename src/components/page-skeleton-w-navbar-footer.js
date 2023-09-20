import React from 'react'

import PropTypes from 'prop-types'

import Navbar from './navbar'
import Footer from './footer'
import './page-skeleton-w-navbar-footer.css'

const PageSkeletonWNavbarFooter = (props) => {
  return (
    <div
      className={`page-skeleton-w-navbar-footer-container ${props.rootClassName} `}
    >
      <div className="page-skeleton-w-navbar-footer-navbar-bg-container">
        <Navbar rootClassName="navbar-root-class-name1" className=""></Navbar>
      </div>
      {props.children}
      <Footer rootClassName="footer-root-class-name" className=""></Footer>
    </div>
  )
}

PageSkeletonWNavbarFooter.defaultProps = {
  rootClassName: '',
}

PageSkeletonWNavbarFooter.propTypes = {
  rootClassName: PropTypes.string,
}

export default PageSkeletonWNavbarFooter
