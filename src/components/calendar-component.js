import React from 'react'

import PropTypes from 'prop-types'

import './calendar-component.css'

const CalendarComponent = (props) => {
  return (
    <div className={`calendar-component-container ${props.rootClassName} `}>
      <div className="calendar-component-calendar-item">
        <div className="calendar-component-container1">
          <div className="calendar-component-container2">
            <svg viewBox="0 0 1024 1024" className="calendar-component-icon">
              <path
                d="M854 896v-554h-684v554h684zM854 128q34 0 59 26t25 60v682q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-682q0-34 25-60t59-26h44v-86h84v86h428v-86h84v86h44z"
                className=""
              ></path>
            </svg>
            <div className="calendar-component-container3">
              <span className="calendar-component-text">{props.datum_dag}</span>
              <span className="calendar-component-text1 BigCard-Heading">
                {props.datum_maand}
              </span>
            </div>
          </div>
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="calendar-component-image"
          />
        </div>
        <div className="calendar-component-container4"></div>
        <div className="calendar-component-container5">
          <h1 className="calendar-component-text2 BigCard-Heading">
            {props.heading}
          </h1>
          <span className="calendar-component-text3">{props.text}</span>
        </div>
        <img
          alt={props.image_alt1}
          src={props.image_src1}
          className="calendar-component-image1"
        />
      </div>
    </div>
  )
}

CalendarComponent.defaultProps = {
  image_alt: 'image',
  image_alt1: 'image',
  image_src1: '/whatsapp%20image%202023-09-06%20at%2013.25.50-1200w.jpg',
  rootClassName: '',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.',
  datum_maand: 'Okt',
  datum_dag: '5',
  heading: 'Evenementnaam',
  image_src: '/whatsapp%20image%202023-09-06%20at%2013.25.50-1200w.jpg',
}

CalendarComponent.propTypes = {
  image_alt: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src1: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  datum_maand: PropTypes.string,
  datum_dag: PropTypes.string,
  heading: PropTypes.string,
  image_src: PropTypes.string,
}

export default CalendarComponent
