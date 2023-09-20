import React from 'react'

import PropTypes from 'prop-types'

import './section-separator.css'

const SectionSeparator = (props) => {
  return (
    <div
      className={`section-separator-section-separator ${props.rootClassName} `}
    ></div>
  )
}

SectionSeparator.defaultProps = {
  rootClassName: '',
}

SectionSeparator.propTypes = {
  rootClassName: PropTypes.string,
}

export default SectionSeparator
