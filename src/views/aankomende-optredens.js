import React from "react";

import { Helmet } from "react-helmet";

import PageSkeletonWNavbarFooter from "../components/page-skeleton-w-navbar-footer";
import TitleBlock from "../components/title-block";
import CalendarComponent from "../components/calendar-component";
import "./aankomende-optredens.css";

 import { getUpcomingPerformancesHeader, getUpcomingPerformances } from "../sanity";

 const pageheader = await getUpcomingPerformancesHeader();
 const pagecontent = await getUpcomingPerformances();

const AankomendeOptredens = (props) => {
  return (
    <div className="aankomende-optredens-container">
      <Helmet>
        <title>Aankomende optredens - Feel Free 2 Make Music!</title>
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
            text={`${pageheader.text}`}
            heading="Aankomende optredens"
            rootClassName="title-block-root-class-name"
          ></TitleBlock>
          {/* <div className="slanted-text">Binnenkort meer informatie</div> */}
          <CalendarComponent
            rootClassName="calendar-component-root-class-name"
            heading={"MusicalClip Dieren"}
            datum_dag={"7"}
            datum_maand={"Okt"}
            text={`Een fabel over een wolf met schapen en een Wouw. Een project met muziek dan en zang. Nieuwsgierig geworden?? Kom kijken naar een van de volgende uitvoeringen op 7 oktober:
            - Noordplein in Roleofarendsveen
            - Symphonie in Nieuw Vennep
            - Burgemeester v. Stamplein in Hoofddorp
            `}
            image_src={"/schaap.jpg"}
          ></CalendarComponent>
          <CalendarComponent
            image_src={"/kerst.jpeg"}
            rootClassName="calendar-component-root-class-name"
            bgcolor="var(--dl-color-dimcolors-dimgreen)"
            heading={"Kerstproject"}
            datum_dag={"?"}
            datum_maand={"Dec"}
            text={`We ook met andere projecten bezig om op te zetten. Zoals een Kerstproject. Meer informatie volgt. Heb je interesse om mee te doen met een project mail ons dan naar feelfree2makemusic@gmail.com
            `}
          ></CalendarComponent>
        </div>
      </PageSkeletonWNavbarFooter>
    </div>
  );
};

export default AankomendeOptredens;
