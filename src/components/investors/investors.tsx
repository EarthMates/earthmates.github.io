import classNames from "classnames";
import styles from "./investors.module.scss";
import { Button } from "../button/button";
import InvestorImage from "../../assets/investor_page/investor-image.png";
import BriefcaseIcon from "../../assets/investor_page/analytics-up.svg";
import UsergroupIcon from "../../assets/investor_page/computer-dollar.svg";
import FilevalidationIcon from "../../assets/investor_page/user-group.png";

import IconSvg from "../../assets/investor_page/icon.svg";
import ReviewSvg from "../../assets/investor_page/review.png";

//mui
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export interface InvestorsProps {
  className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Investors = ({ className }: InvestorsProps) => {
  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.hero}>
        <div>
          <button>Connect with Startups</button>
          <h1>INVEST IN AFRICA'S FUTURE WITH CONFIDENCE</h1>
          <p>
            Discover Lucrative Investment Opportunities and Drive Positive
            Change with Earthmates
          </p>
          <Button
            buttonText="Start Investing"
            color="#2F2B6F"
            onClick={() => {
              window.location.href =
                "https://airtable.com/app4cbS0gpcBdM29E/pagbVdxAymMAqVyAV/form";
            }}
          />
        </div>
        <img src={InvestorImage} alt="" />
      </div>
      <div className={styles.home}>
        <div className={styles.features}>
          <h1 className={styles.h1}>Start Your Investment Journey Today</h1>
          <p className={styles.p}>
            Join our platform today and be part of Africa's thriving startup
            ecosystem.
          </p>
          <div className={styles["features-cards"]}>
            <div className={styles.card}>
              <h2 className={styles.h1}>Sign Up and Create Your Profile </h2>
              <p>
                Create your investor profile by providing details about your
                investment preferences, risk tolerance, and sector interests.
              </p>
            </div>
            <div className={styles.card}>
              <h2 className={styles.h1}>Explore Investment Opportunities</h2>
              <p>
                Dive into our curated selection of investment opportunities
                spanning various sectors and stages of growth.
              </p>
            </div>
            <div className={styles.card}>
              <h2 className={styles.h1}>
                Engage and Make Informed Investments
              </h2>
              <p>
                Engage in discussions, attend events, and collaborate with other
                investors to gain insights and share knowledge on investing.
              </p>
            </div>
          </div>
          <div className={styles.button}>
            <Button
              buttonText="Register Now"
              color="#ffff"
              textColor="#0b0b09"
              onClick={() => {
                window.location.href =
                  "https://airtable.com/app4cbS0gpcBdM29E/pagbVdxAymMAqVyAV/form";
              }}
            />
          </div>
        </div>
      </div>
      <div className={styles.difference}>
        <div className={styles.header}>
          <img src={IconSvg} alt="" />
          <div>
            <h1 className={styles.h1}>
              Get Access to Exclusive Investment Opportunities
            </h1>
            <p className={styles.p}>
              Discover a world of investment potential with Earthmates. Join to
              gain access to high-potential startups.
            </p>
          </div>
        </div>
        <div className={styles["difference-cards"]}>
          <div className={styles.card}>
            <img src={BriefcaseIcon} alt="profile" />
            <h2 className={styles.h1}>Access Top Investment Opportunities </h2>
            <p className={styles.p}>
              By joining as an investor, you gain access to a curated selection
              of high-potential investment opportunities in African startups.
            </p>
          </div>
          <div className={styles.card}>
            <img src={UsergroupIcon} alt="profile" />
            <h2 className={styles.h1}>Seamless Investing Experience</h2>
            <p className={styles.p}>
              Whether you're a seasoned investor or new to investing, Earthmates
              makes it easy to navigate the world of venture capital and
              maximize your investment potential.
            </p>
          </div>
          <div className={styles.card}>
            <img src={FilevalidationIcon} alt="profile" />
            <h2 className={styles.h1}>Expand Your Network</h2>
            <p className={styles.p}>
              Joining Earthmates allows you to expand your network within the
              global investment community and connect with like-minded
              individuals.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.review}>
        <div className={styles.header}>
          <h1 className={styles.h1}>
            Hear What Our Tech Founders Have to Say!
          </h1>
          <p className={styles.p}>
            Discover firsthand experiences from tech founders who have
            transformed their startup journeys with Earthmates.
          </p>
        </div>
        <div className={styles.container}>
          <div className={styles.image}>
            <img src={ReviewSvg} alt="" />
          </div>
          <div className={styles.text}>
            <h1 className={styles.h1}>
              “EarthMates helped me raise the initial funding to launch my
              venture, ROOMIE Africa. They connected me with the right investors
              and introduced me to a network of real estate professionals from
              around the globe. This support has been crucial in turning my
              vision into reality. Thanks to EarthMates, we launched ROOMIE
              Africa”
            </h1>
            <p className={styles.p}>
              Placide Mugenga, Founder &amp; CEO, Roomie Africa
            </p>
          </div>
        </div>
      </div>
      <div className={styles.faq}>
        <div className={styles.title_container}>
          <h1 className={styles.title}>FAQs</h1>
          <p className={styles.paragraph}>
            Explore answers to commonly asked questions about investing with
            Earthmates.
          </p>
        </div>
        <div
          className={styles.accordion_container}
          style={{ width: "70%", margin: "auto" }}
        >
          <Accordion>
            <AccordionSummary
              className={styles.accordionSummary}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              How can I find investment opportunities on Earthmates?
            </AccordionSummary>
            <AccordionDetails>
              Investors can discover investment opportunities on Earthmates by
              browsing through curated profiles of African startups. Our
              platform offers a wide range of projects across various
              industries, allowing investors to explore opportunities that align
              with their investment criteria and preferences.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              className={styles.accordionSummary}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              What criteria does Earthmates use to match investors with
              startups?
            </AccordionSummary>
            <AccordionDetails>
              Earthmates matches investors with startups based on several
              criteria including the investor's preferences, risk tolerance,
              investment goals, industry focus, geographic location, and the
              startup's stage of development, market potential, and alignment
              with the investor's interests.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              className={styles.accordionSummary}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              Are there any fees associated with using Earthmates as an
              investor?
            </AccordionSummary>
            <AccordionDetails>
              As an investor using Earthmates, you typically won't encounter any
              fees for accessing the platform or browsing the startups. However,
              there might be fees associated with specific investment
              transactions or additional services offered by Earthmates, so it's
              essential to review their terms and conditions for any potential
              costs.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              className={styles.accordionSummary}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4a-content"
              id="panel4a-header"
            >
              How does Earthmates ensure the quality and legitimacy of the
              investment opportunities listed on the platform?
            </AccordionSummary>
            <AccordionDetails>
              Earthmates employs various measures to ensure the quality and
              legitimacy of the investment opportunities listed on its platform.
              These measures may include thorough due diligence processes on
              startups, verification of key information provided by startups,
              background checks on founders and management teams, screening for
              compliance with regulatory requirements, and implementing
              mechanisms for investor feedback and ratings. Additionally,
              Earthmates may leverage partnerships with trusted organizations,
              advisors, and industry experts to validate the credibility of
              listed opportunities.
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <div className={styles.next_steps}>
        <h1>Ready to Take the Next Step?</h1>
        <p>Join Earthmates Today and Propel Your Startup Forward!</p>
        <Button
          buttonText="Register Now"
          color="#ffff"
          textColor="#001B2E"
          onClick={() => {
            window.location.href =
              "https://airtable.com/app4cbS0gpcBdM29E/pagbVdxAymMAqVyAV/form";
          }}
        />
      </div>
    </div>
  );
};
