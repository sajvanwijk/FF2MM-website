import React from "react";

import { Helmet } from "react-helmet";

import PageSkeletonWNavbarFooter from "../components/page-skeleton-w-navbar-footer";
import TextBlock from "../components/text-block";
import SectionHeader from "../components/section-header";
import ContactForm from "../components/contact-form";
import "./huur-ons-in.css";

const HuurOnsIn = (props) => {
  return (
    <div className="huur-ons-in-container">
      <Helmet>
        <title>Huur ons in - Feel Free 2 Make Music!</title>
        <meta
          name="description"
          content="Welkom bij orkest Feel Free 2 Make Music! Vrijheid in het maken van muziek!"
        />
        <meta
          property="og:title"
          content="Huur ons in - Feel Free 2 Make Music!"
        />
        <meta
          property="og:description"
          content="Welkom bij orkest Feel Free 2 Make Music! Vrijheid in het maken van muziek!"
        />
      </Helmet>
      <PageSkeletonWNavbarFooter rootClassName="page-skeleton-wnavbar-footer-root-class-name5">
        <TextBlock
          text="Tekst voor geïnteresseerden"
          heading="Huur ons in!"
          rootClassName="text-block-root-class-name1"
        ></TextBlock>
        <div className="huur-ons-in-contactformulier">
          <div className="huur-ons-in-get-in-touch">
            <SectionHeader rootClassName="section-header-root-class-name1"></SectionHeader>
            <div className="huur-ons-in-content-container">
              <ContactForm/>
            </div>
          </div>
        </div>
      </PageSkeletonWNavbarFooter>
    </div>
  );
};

export default HuurOnsIn;
