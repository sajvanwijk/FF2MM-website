import React from "react";

import { Helmet } from "react-helmet";

import PageSkeletonWNavbarFooter from "../components/page-skeleton-w-navbar-footer";
import TitleBlock from "../components/title-block";
import CalendarComponent from "../components/calendar-component";
import "./aankomende-optredens.css";

import { getUpcomingPerformancesHeader, getUpcomingPerformances } from "../sanity";

import { urlFor } from "../sanity";
import { toHTML } from "@portabletext/to-html";

const pageheader = await getUpcomingPerformancesHeader();
const pagecontent = await getUpcomingPerformances();
var root_styles = getComputedStyle(document.querySelector(':root'));

const calendar_component_bgcolors = [root_styles.getPropertyValue('--dl-color-dimcolors-dimblue'), root_styles.getPropertyValue('--dl-color-dimcolors-dimgreen')];
const maanden = ['Jan', 'Feb', 'Mrt', 'Apr', 'Mei', 'Jun', 'Jul','Aug', 'Sep', 'Okt', 'Nov', 'Dec'];

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
          {pagecontent.map((item, index) => (
            <CalendarComponent
              rootClassName="calendar-component-root-class-name"
              heading={item.title}
              datum_dag={new Date(item.date).getDay()}
              datum_maand={maanden[new Date(item.date).getMonth()]}
              text={toHTML(item.text)}
              image_src={urlFor(item.picture)}
              bgcolor={calendar_component_bgcolors[index]}
              ></CalendarComponent>
            ))};
        </div>
      </PageSkeletonWNavbarFooter>
    </div>
  );
};

export default AankomendeOptredens;
