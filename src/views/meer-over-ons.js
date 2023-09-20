import React from 'react'

import { Helmet } from 'react-helmet'

import PageSkeletonWNavbarFooter from '../components/page-skeleton-w-navbar-footer'
import TextBlock from '../components/text-block'
import './meer-over-ons.css'

const MeerOverOns = (props) => {
  return (
    <div className="meer-over-ons-container">
      <Helmet>
        <title>Meer over ons - Feel Free 2 Make Music!</title>
        <meta
          name="description"
          content="Wij zijn orkest Feel Free 2 Make Music..."
        />
        <meta
          property="og:title"
          content="Meer over ons - Feel Free 2 Make Music!"
        />
        <meta
          property="og:description"
          content="Wij zijn orkest Feel Free 2 Make Music..."
        />
      </Helmet>
      <PageSkeletonWNavbarFooter rootClassName="page-skeleton-wnavbar-footer-root-class-name1">
        <TextBlock
          text="[Hier moet nog tekst komen]"
          heading="Meer over ons"
          rootClassName="text-block-root-class-name"
        ></TextBlock>
      </PageSkeletonWNavbarFooter>
    </div>
  )
}

export default MeerOverOns
