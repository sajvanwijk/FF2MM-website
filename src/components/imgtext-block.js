import React from 'react'

import PropTypes from 'prop-types'

import './imgtext-block.css'

const ImgtextBlock = (props) => {
  return (
    <div className={`imgtext-block-container ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="imgtext-block-image"
      />
      <div className="imgtext-block-container1">
        <div className="imgtext-block-block">
          <div className="imgtext-block-content-container">
            <h1 className="imgtext-block-text BigCard-Heading">
              {props.heading}
            </h1>
            <span className="imgtext-block-text1 Card-Text">{props.text}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

ImgtextBlock.defaultProps = {
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  heading: 'Heading',
  image_alt: 'image',
  text: 'Text',
  rootClassName: '',
}

ImgtextBlock.propTypes = {
  image_src: PropTypes.string,
  heading: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default ImgtextBlock
