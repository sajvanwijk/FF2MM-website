import React from "react";
import { Link } from "react-router-dom";

import { Player } from "@lottiefiles/react-lottie-player";
import { Helmet } from "react-helmet";

import Navbar from "../components/navbar";
import TextBlock from "../components/text-block";
import ImgtextBlock from "../components/imgtext-block";
import TextBlockimg from "../components/text-blockimg";
import TitleBlock from "../components/title-block";
import Footer from "../components/footer";
import "./home.css";

import { getHomepageBanner } from "../sanity";
import { getHomepageTextBlocks } from "../sanity";
import { getHighlightedPerformances } from "../sanity";
import { urlFor } from "../sanity";
import { toHTML } from "@portabletext/to-html";
import parse from "html-react-parser";

const banner = await getHomepageBanner();
const textblocks = await getHomepageTextBlocks();
const imagehighlights = await getHighlightedPerformances();

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Feel Free 2 Make Music!</title>
        <meta
          name="description"
          content="Welkom bij orkest Feel Free 2 Make Music! Vrijheid in het maken van muziek!"
        />
        <meta property="og:title" content="Feel Free 2 Make Music!" />
        <meta
          property="og:description"
          content="Welkom bij orkest Feel Free 2 Make Music! Vrijheid in het maken van muziek!"
        />
      </Helmet>
      <div className="home-container1">
        <div id="resources" className="home-hero">
          <Navbar rootClassName="navbar-root-class-name"></Navbar>
          <div className="home-color-filter"></div>
          <div
            className="home-hero-image"
            style={{ backgroundImage: `url(${urlFor(banner.hero_image)})` }}
          ></div>
          <div id="banner-extension" className="home-banner-extension">
            <Player
              src="https://lottie.host/f5bd291e-6286-4ef1-ae16-d4e68690bed3/zMKWGKiBZm.json"
              loop
              speed="0.7"
              autoplay
              background="transparent"
              className="home-lottie-node"
            ></Player>
            <Player
              src="https://lottie.host/f5bd291e-6286-4ef1-ae16-d4e68690bed3/zMKWGKiBZm.json"
              loop
              speed="0.6"
              autoplay
              background="transparent"
              className="home-lottie-node1"
            ></Player>
          </div>
          <div className="home-content-container">
            <div className="home-hero-text">
              <h1 className="home-heading">
                <span className="home-text">{banner.title}</span>
                <br className="Section-Heading"></br>
                <span className="home-text02 Section-Heading">
                  Feel Free
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
                <span className="home-text03 Section-Heading">2</span>
                <span className="home-text04 Section-Heading">
                  {" "}
                  Make Music!
                </span>
              </h1>
              <span className="home-text05 Section-Text-Lg">
                {banner.subtitle}
              </span>
              <Link to="/aankomende-optredens" className="home-cta-btn Anchor">
                <span>{banner.button}</span>
                <svg viewBox="0 0 1024 1024" className="home-icon">
                  <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div>
          {textblocks.map((textblock, index) => {
            return (() => {
              if (!textblock.picture) {
                return (
                  <TextBlock
                    key={index}
                    text={toHTML(textblock.text)}
                    heading={textblock.title}
                    rootClassName="text-blockimg-root-class-name"
                  />
                );
              }
              switch (index % 2) {
                case 0:
                  return (
                    <ImgtextBlock
                      key={index}
                      text={toHTML(textblock.text)}
                      heading={textblock.title}
                      image_src={urlFor(textblock.picture).url()}
                      rootClassName="imgtext-block-root-class-name"
                    />
                  );
                case 1:
                  return (
                    <TextBlockimg
                      key={index}
                      text={toHTML(textblock.text)}
                      heading={textblock.title}
                      image_src={urlFor(textblock.picture).url()}
                      rootClassName="imgtext-block-root-class-name"
                    />
                  );
                default:
                  return null;
              }
            })();
          })}
        </div>
        <div id="ourstory" className="home-our-story">
          <TitleBlock></TitleBlock>
          <div className="home-cards-container">
            <>
              {imagehighlights.map((imagehighlight, index) => (
                <div key={index} className="home-left-section">
                  <div className="home-video-container">
                    {imagehighlight.picture ? (
                      <img
                        src={urlFor(imagehighlight.picture).url()}
                        className="home-video"
                      ></img>
                    ) : null}
                  </div>
                  <div className="home-content-container2">
                    <span className="home-heading1 Card-Heading">
                      {imagehighlight.title}
                    </span>
                    <span className="home-text10 Card-Text">
                      {parse(toHTML(imagehighlight.text))}
                    </span>
                  </div>
                </div>
              ))}
            </>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
