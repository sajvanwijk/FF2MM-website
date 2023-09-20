import React from 'react'

import PropTypes from 'prop-types'

import './title-block.css'

const TitleBlock = (props) => {
  return (
    <div className={`title-block-heading-container ${props.rootClassName} `}>
      <h1 className="title-block-text Section-Heading">{props.heading}</h1>
      <span className="title-block-text1 Section-Text">{props.text}</span>
    </div>
  )
}

TitleBlock.defaultProps = {
  rootClassName: '',
  text: 'Bekijk waar wij al hebben opgetreden',
  heading: 'Onze optredens',
}

TitleBlock.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  heading: PropTypes.string,
}

export default TitleBlock
