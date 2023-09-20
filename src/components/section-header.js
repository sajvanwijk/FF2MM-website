import React from 'react'

import PropTypes from 'prop-types'

import './section-header.css'

const SectionHeader = (props) => {
  return (
    <div className={`section-header-container ${props.rootClassName} `}>
      <h2 className="section-header-text BigCard-Heading">{props.heading}</h2>
    </div>
  )
}

SectionHeader.defaultProps = {
  heading: 'Neem contact met ons op voor meer informatie!',
  rootClassName: '',
}

SectionHeader.propTypes = {
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default SectionHeader
