import React from 'react'

import { Helmet } from 'react-helmet'

import PageSkeletonWNavbarFooter from '../components/page-skeleton-w-navbar-footer'
import TextBlock from '../components/text-block'
import SectionHeader from '../components/section-header'
import './lid-worden.css'
import ContactForm from '../components/contact-form'

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
          <div className="lid-worden-contactformulier">
            <div className="lid-worden-get-in-touch">
              <SectionHeader></SectionHeader>
              <div className="lid-worden-content-container">
                <ContactForm/>
              </div>
            </div>
          </div>
        </div>
      </PageSkeletonWNavbarFooter>
    </div>
  )
}

export default LidWorden
