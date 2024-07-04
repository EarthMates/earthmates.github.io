import React, { useState, useEffect } from "react";
import styles from "./Features.module.scss";
import { Button } from "../button/button";
import OrangeStarIcon from "../../assets/landing_page/star-orange.svg";
import PurpleStarIcon from "../../assets/landing_page/star-purple.svg";

/*
//investors
//tabs
const ACTIVE_startup_tab: string = `${styles.tab} ${styles.tab_startup}`;
const ACTIVE_investor_tab: string = `${styles.tab} ${styles.tab_investor}`;
const INACTIVE: string = `${styles.tab}`;
*/

const Features = () => {
  /*
  const [currentView, setCurrentView] = useState("startup");
  const [view, viewRefresh] = useState(currentView);
  const [startupView, setStartupView] = useState(ACTIVE_startup_tab);
  const [investorView, setInvestorView] = useState(INACTIVE);

  useEffect(() => {
    if (view !== currentView) {
      viewRefresh(view);
      console.log("View prop has changed:", view);

      //test for error
      if (!view || (view !== "startup" && view !== "investor")) {
        console.error("Invalid view prop. Expected 'startup' or 'investor'.");
        return; // Return here to avoid calling Tabber with null
      }

      if (currentView === "startup") {
        setStartupView(ACTIVE_startup_tab);
        setInvestorView(INACTIVE);
      } else if (currentView === "investor") {
        setStartupView(INACTIVE);
        setInvestorView(ACTIVE_investor_tab);
      }
    }
  }, [view]);

  const tabClick = (view: string) => {
    if (view === undefined) {
      alert(
        "tabClick function in Features Component is receiving undefined parameter"
      );
    }
    if (view === "startup") {
      setCurrentView("startup");
    } else if (view === "investor") {
      setCurrentView("investor");
    }
  };
  */
  return (
    <div className={styles.externalContainer}>
      <div className={`${styles.features} ${styles.features_startup}`}>
        <h1 className={styles.h1}>Need Funding?</h1>
        <p className={styles.p}>
          Earthmates provides a platform for startup founders to connect with a
          diverse network of investors and access the funding they need to scale
          their ventures. Whether you&apos;re seeking seed funding to launch
          your idea or looking to secure Series A funding for expansion,
          Earthmates can help you find the right investors to support your
          growth journey.
        </p>

        {/* <div className={styles.list}>
          <div className={styles.row}>
            <img src={OrangeStarIcon} alt="tick" />
            <p className={styles.p}>
              Tap into our network of investors actively seeking investment
              opportunities in African startups.
            </p>
          </div>
          <div className={styles.row}>
            <img src={OrangeStarIcon} alt="tick" />
            <p className={styles.p}>
              Tap into our network of investors actively seeking investment
              opportunities in African startups.
            </p>
          </div>
          <div className={styles.row}>
            <img src={OrangeStarIcon} alt="tick" />
            <p className={styles.p}>
              Tap into our network of investors actively seeking investment
              opportunities in African startups.
            </p>
          </div>
          <div className={styles.row}>
            <img src={OrangeStarIcon} alt="tick" />
            <p className={styles.p}>
              Tap into our network of investors actively seeking investment
              opportunities in African startups.
            </p>
          </div>
        </div> */}

        <Button buttonText="Learn More" className={styles.learnMore_button} />
      </div>
      <div className={`${styles.features} ${styles.features_investor}`}>
        <h1 className={styles.h1}>Looking to invest?</h1>
        <p className={styles.p}>
          Earthmates offers investors a platform to discover and invest in
          high-potential African startups poised for growth. Whether you&apos;re
          an angel investor, venture capitalist, or corporate investor,
          Earthmates provides access to a curated selection of investment
          opportunities across various industries and stages.
        </p>
        {/* <div className={styles.list}>
          <div className={styles.row}>
            <img src={PurpleStarIcon} alt="tick" />
            <p className={styles.p}>
              Tap into our network of investors actively seeking investment
              opportunities in African startups.
            </p>
          </div>
          <div className={styles.row}>
            <img src={PurpleStarIcon} alt="tick" />
            <p className={styles.p}>
              Tap into our network of investors actively seeking investment
              opportunities in African startups.
            </p>
          </div>
          <div className={styles.row}>
            <img src={PurpleStarIcon} alt="tick" />
            <p className={styles.p}>
              Tap into our network of investors actively seeking investment
              opportunities in African startups.
            </p>
          </div>
          <div className={styles.row}>
            <img src={PurpleStarIcon} alt="tick" />
            <p className={styles.p}>
              Tap into our network of investors actively seeking investment
              opportunities in African startups.
            </p>
          </div>
        </div> */}

        <Button
          buttonText="Learn More"
          className={styles.learnMore_button}
          color="#2F2B6F"
          onClick={() => {
            window.location.href =
              "https://airtable.com/app4cbS0gpcBdM29E/pagbVdxAymMAqVyAV/form";
          }}
        />
      </div>
      {/*<div className="tabHeader">
        <div className={startupView} onClick={() => tabClick("startup")}>
          <h1>Startups</h1>
        </div>
        <div className={investorView} onClick={() => tabClick("investor")}>
          <h1>Investors</h1>
        </div>
      </div>*/}
    </div>
  );
};

export default Features;
