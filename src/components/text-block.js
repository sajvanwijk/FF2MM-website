import React from 'react'

import PropTypes from 'prop-types'

import './text-block.css'

import parse from 'html-react-parser'

const TextBlock = (props) => {
  return (
    <div className={`text-block-container ${props.rootClassName} `}>
      <div className="text-block-block">
        <div className="text-block-content-container">
          <h1 className="text-block-text BigCard-Heading">{props.heading}</h1>
          <span className="text-block-text1 Card-Text">{parse(props.text)}</span>
        </div>
      </div>
    </div>
  )
}

TextBlock.defaultProps = {
  rootClassName: '',
  heading: 'Heading',
  text: 'Text',
}

TextBlock.propTypes = {
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
}

export default TextBlock
