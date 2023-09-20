import React from 'react'

import { Helmet } from 'react-helmet'

import PageSkeletonWNavbarFooter from '../components/page-skeleton-w-navbar-footer'
import TitleBlock from '../components/title-block'
import CalendarComponent from '../components/calendar-component'
import './aankomende-optredens.css'

const AankomendeOptredens = (props) => {
  return (
    <div className="aankomende-optredens-container">
      <Helmet>
        <title>Aankomende-optredens - Feel Free 2 Make Music!</title>
        <meta
          name="description"
          content="Welkom bij orkest Feel Free 2 Make Music! Vrijheid in het maken van muziek!"
        />
        <meta
          property="og:title"
          content="Aankomende-optredens - Feel Free 2 Make Music!"
        />
        <meta
          property="og:description"
          content="Welkom bij orkest Feel Free 2 Make Music! Vrijheid in het maken van muziek!"
        />
      </Helmet>
      <PageSkeletonWNavbarFooter rootClassName="page-skeleton-wnavbar-footer-root-class-name2">
        <div className="aankomende-optredens-container01">
          <TitleBlock
            text="Hier treden wij de komende tijd op. Komm vooral een kijkje nemen!"
            heading="Aankomende optredens"
            rootClassName="title-block-root-class-name"
          ></TitleBlock>
          <CalendarComponent
            image_src="https://images.unsplash.com/photo-1472653431158-6364773b2a56?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE0fHxldmVudHxlbnwwfHx8fDE2OTUwNjYzMzZ8MA&amp;ixlib=rb-4.0.3&amp;h=300"
            image_src1="https://images.unsplash.com/photo-1472653431158-6364773b2a56?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE0fHxldmVudHxlbnwwfHx8fDE2OTUyMDg1NjZ8MA&amp;ixlib=rb-4.0.3&amp;h=300"
            rootClassName="calendar-component-root-class-name"
          ></CalendarComponent>
          <div className="aankomende-optredens-container02">
            <div className="aankomende-optredens-calendar-item">
              <div className="aankomende-optredens-container03">
                <div className="aankomende-optredens-container04">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="aankomende-optredens-icon"
                  >
                    <path d="M854 896v-554h-684v554h684zM854 128q34 0 59 26t25 60v682q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-682q0-34 25-60t59-26h44v-86h84v86h428v-86h84v86h44z"></path>
                  </svg>
                  <div className="aankomende-optredens-container05">
                    <span className="aankomende-optredens-text">7</span>
                    <span className="aankomende-optredens-text1 BigCard-Heading">
                      Nov
                    </span>
                  </div>
                </div>
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxldmVudHxlbnwwfHx8fDE2OTUyMDg1NjZ8MA&amp;ixlib=rb-4.0.3&amp;w=1200"
                  className="aankomende-optredens-image"
                />
              </div>
              <div className="aankomende-optredens-container06"></div>
              <div className="aankomende-optredens-container07">
                <h1 className="aankomende-optredens-text2 BigCard-Heading">
                  Evenementnaam
                </h1>
                <span className="aankomende-optredens-text3">
                  Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                  eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                  consequatur.
                </span>
              </div>
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxldmVudHxlbnwwfHx8fDE2OTUyMDg1NjZ8MA&amp;ixlib=rb-4.0.3&amp;h=300"
                className="aankomende-optredens-image1"
              />
            </div>
          </div>
          <div className="aankomende-optredens-container08">
            <div className="aankomende-optredens-calendar-item1">
              <div className="aankomende-optredens-container09">
                <div className="aankomende-optredens-container10">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="aankomende-optredens-icon2"
                  >
                    <path d="M854 896v-554h-684v554h684zM854 128q34 0 59 26t25 60v682q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-682q0-34 25-60t59-26h44v-86h84v86h428v-86h84v86h44z"></path>
                  </svg>
                  <div className="aankomende-optredens-container11">
                    <span className="aankomende-optredens-text4">22</span>
                    <span className="aankomende-optredens-text5 BigCard-Heading">
                      Dec
                    </span>
                  </div>
                </div>
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fGV2ZW50fGVufDB8fHx8MTY5NTIwODU2Nnww&amp;ixlib=rb-4.0.3&amp;w=1200"
                  className="aankomende-optredens-image2"
                />
              </div>
              <div className="aankomende-optredens-container12"></div>
              <div className="aankomende-optredens-container13">
                <h1 className="aankomende-optredens-text6 BigCard-Heading">
                  Evenementnaam
                </h1>
                <span className="aankomende-optredens-text7">
                  Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                  eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                  consequatur.
                </span>
              </div>
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fGV2ZW50fGVufDB8fHx8MTY5NTIwODU2Nnww&amp;ixlib=rb-4.0.3&amp;h=300"
                className="aankomende-optredens-image3"
              />
            </div>
          </div>
          <div className="aankomende-optredens-container14"></div>
          <div className="aankomende-optredens-container15"></div>
        </div>
      </PageSkeletonWNavbarFooter>
    </div>
  )
}

export default AankomendeOptredens
