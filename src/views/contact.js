import React from 'react'

import { Helmet } from 'react-helmet'

import PageSkeletonWNavbarFooter from '../components/page-skeleton-w-navbar-footer'
import SectionHeader from '../components/section-header'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - Feel Free 2 Make Music!</title>
        <meta
          name="description"
          content="Onze contactgegevens"
        />
        <meta property="og:title" content="Contact - Feel Free 2 Make Music!" />
        <meta
          property="og:description"
          content="Onze contactgegevens"
        />
      </Helmet>
      <PageSkeletonWNavbarFooter rootClassName="page-skeleton-wnavbar-footer-root-class-name">
        <div className="contact-contactformulier">
          <div className="contact-get-in-touch">
            <SectionHeader
              heading="Neem contact met ons op!"
              rootClassName="section-header-root-class-name2"
            ></SectionHeader>
            <div className="contact-content-container">
              <div className="contact-form-container">
                <span className="contact-heading BigCard-Heading">
                  Schrijf hier je bericht
                </span>
                <input
                  type="text"
                  required="true"
                  placeholder="Naam"
                  className="contact-name input"
                />
                <input
                  type="text"
                  required="true"
                  placeholder="E-mail adres"
                  className="contact-email input"
                />
                <textarea
                  placeholder="Uw bericht"
                  className="contact-message textarea"
                ></textarea>
                <button className="contact-cta-btn Anchor button">SEND</button>
              </div>
              <div className="contact-locations-container">
                <div className="contact-location-1">
                  <span className="contact-heading1">Onze contactgegevens</span>
                  <a
                    href="mailto:feelfree2makemusic@gmail.com?subject="
                    className="contact-link"
                  >
                    <div className="contact-email1">
                      <svg viewBox="0 0 1024 1024" className="contact-icon">
                        <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                      </svg>
                      <span>
                        <span className="Section-Text">
                          E-mail adres:
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <br className="Section-Text"></br>
                        <span className="Section-Text">
                          feelfree2makemusic@gmail.com
                        </span>
                        <br></br>
                      </span>
                    </div>
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61550917932627"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="contact-link1"
                  >
                    <div className="contact-phone">
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="contact-icon2"
                      >
                        <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                      </svg>
                      <span className="Section-Text">
                        Facebook-link (klik hier)
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSkeletonWNavbarFooter>
    </div>
  )
}

export default Contact
