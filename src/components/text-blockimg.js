import React from 'react'

import PropTypes from 'prop-types'

import './text-blockimg.css'

const TextBlockimg = (props) => {
  return (
    <div className={`text-blockimg-container ${props.rootClassName} `}>
      <div className="text-blockimg-container1">
        <div className="text-blockimg-block">
          <div className="text-blockimg-content-container">
            <h1 className="text-blockimg-text BigCard-Heading">
              {props.heading}
            </h1>
            <span className="text-blockimg-text1 Card-Text">{props.text}</span>
          </div>
        </div>
      </div>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="text-blockimg-image"
      />
    </div>
  )
}

TextBlockimg.defaultProps = {
  image_alt: 'image',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  rootClassName: '',
  text: 'Text',
  heading: 'Heading',
}

TextBlockimg.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  heading: PropTypes.string,
}

export default TextBlockimg
