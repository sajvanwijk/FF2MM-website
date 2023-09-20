import React from 'react'

import { Helmet } from 'react-helmet'

import PageSkeletonWNavbarFooter from '../components/page-skeleton-w-navbar-footer'
import TextBlock from '../components/text-block'
import SectionHeader from '../components/section-header'
import './lid-worden.css'

const LidWorden = (props) => {
  return (
    <div className="lid-worden-container">
      <Helmet>
        <title>Lid worden - Feel Free 2 Make Music!</title>
        <meta
          name="description"
          content="Lees hier hoe je lid kunt worden van Feel Free 2 Make Music!"
        />
        <meta
          property="og:title"
          content="Lid worden - Feel Free 2 Make Music!"
        />
        <meta
          property="og:description"
          content="Lees hier hoe je lid kunt worden van Feel Free 2 Make Music!"
        />
      </Helmet>
      <PageSkeletonWNavbarFooter rootClassName="page-skeleton-wnavbar-footer-root-class-name4">
        <div className="lid-worden-container1">
          <TextBlock
            text="Leuk dat je geïnteresseerd bent om lid te worden bij Feel Free 2 Make Music! Hier alvast wat algemente info:"
            heading="Lid worden"
            rootClassName="text-block-root-class-name2"
          ></TextBlock>
          <SectionHeader
            heading="Hieronder iets voor de quotes"
            rootClassName="section-header-root-class-name"
          ></SectionHeader>
          <div className="lid-worden-contactformulier">
            <div className="lid-worden-get-in-touch">
              <SectionHeader></SectionHeader>
              <div className="lid-worden-content-container">
                <div className="lid-worden-form-container">
                  <span className="lid-worden-heading BigCard-Heading">
                    Schrijf hier je bericht
                  </span>
                  <input
                    type="text"
                    required="true"
                    placeholder="Naam"
                    className="lid-worden-name input"
                  />
                  <input
                    type="text"
                    required="true"
                    placeholder="E-mail adres"
                    className="lid-worden-email input"
                  />
                  <textarea
                    placeholder="Uw bericht"
                    className="lid-worden-message textarea"
                  ></textarea>
                  <button className="lid-worden-cta-btn Anchor button">
                    SEND
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSkeletonWNavbarFooter>
    </div>
  )
}

export default LidWorden
