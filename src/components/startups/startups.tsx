import classNames from "classnames";
import styles from "./startups.module.scss";
import { Button } from "../button/button";
import StartupImagePng from "../../assets/startup_page/startup_image.png";
import ProfileIcon from "../../assets/startup_page/user-account.svg";
import MultipleIcon from "../../assets/startup_page/user-multiple-02.svg";
import EngageIcon from "../../assets/startup_page/conversation.svg";
import MoneyIcon from "../../assets/startup_page/money-receive-square.svg";
import BriefcaseIcon from "../../assets/startup_page/briefcase-09.svg";
import UsergroupIcon from "../../assets/startup_page/user-group.svg";
import FilevalidationIcon from "../../assets/startup_page/file-validation.svg";

import DesktopIcon from "../../assets/dashboard.svg";
import IconSvg from "../../assets/startup_page/icon.svg";
import ReviewSvg from "../../assets/startup_page/review1.png";

//mui
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export interface StartupsProps {
  className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Startups = ({ className }: StartupsProps) => {
  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.hero}>
        <div>
          <button>Connect with Investors</button>
          <h1>GET ACCESS TO WORLDWIDE FUNDING WITH EARTHMATES</h1>
          <p>
            Your sustainable matching platform that connects African impact
            Startups with global investors to unlock profits and create impact
            for the world
          </p>
          <Button buttonText="Start Matching" />
        </div>
        <img src={StartupImagePng} alt="" />
      </div>
      <div className={styles.home}>
        <div className={styles.features}>
          <h1 className={styles.h1}>How to Get Your Startup Journey Started</h1>
          <p className={styles.p}>
            Explore the Simple Process of Connecting with Investors and Driving
            Your Startup Forward
          </p>
          <div className={styles["features-cards"]}>
            <div className={styles.card}>
              <img src={ProfileIcon} alt="profile" />
              <h2 className={styles.h1}>Create Your Profile </h2>
            </div>
            <div className={styles.card}>
              <img src={MultipleIcon} alt="profile" />
              <h2 className={styles.h1}>Intelligent Matchmaking</h2>
            </div>
            <div className={styles.card}>
              <img src={EngageIcon} alt="profile" />
              <h2 className={styles.h1}>Engage and Connect</h2>
            </div>
            <div className={styles.card}>
              <img src={MoneyIcon} alt="profile" />
              <h2 className={styles.h1}>Secured Funding and Support</h2>
            </div>
          </div>
        </div>
        <div className={styles.display}>
          <h1 className={styles.h1}>
            Innovative Solutions for Africa's Entrepreneurial Frontier
          </h1>
          <p className={styles.p}>
            Discover How EarthMates is Revolutionizing Startup Success in Africa
          </p>
          <div className={styles["display-cards"]}>
            <button>Smart Matching Algorithm</button>
            <button>Streamlined Process</button>
            <button>Diverse Opportunities</button>
            <button>Transparent and Secure</button>
          </div>
          <div className={styles.container}>
            <div className={styles.text}>
              <h1 className={styles.h1}>
                Cutting-Edge Technology for Startup-Investor Connections
              </h1>
              <p className={styles.p}>
                EarthMates utilizes a sophisticated matching algorithm that
                intelligently pairs startups with compatible investors, ensuring
                alignment of goals and interests.
              </p>
            </div>
            <img src={DesktopIcon} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.difference}>
        <div className={styles.header}>
          <img src={IconSvg} alt="" />
          <div>
            <h1 className={styles.h1}>Discover the EarthMates Difference</h1>
            <p className={styles.p}>
              Reasons why EarthMates stands out as the platform for connecting
              African startups with investors.
            </p>
          </div>
        </div>
        <div className={styles["difference-cards"]}>
          <div className={styles.card}>
            <img src={BriefcaseIcon} alt="profile" />
            <h2 className={styles.h1}>Expertise in African Markets </h2>
            <p className={styles.p}>
              Our community understands the continent's market, offering
              tailored guidance on market entry, partnerships, and regulations,
              empowering startups to thrive.
            </p>
          </div>
          <div className={styles.card}>
            <img src={UsergroupIcon} alt="profile" />
            <h2 className={styles.h1}>Trusted Network</h2>
            <p className={styles.p}>
              We have a trusted network of investors, mentors, and industry
              leaders. Through strategic collaborations, we connect startups
              with valuable resources and opportunities.
            </p>
          </div>
          <div className={styles.card}>
            <img src={FilevalidationIcon} alt="profile" />
            <h2 className={styles.h1}>Impactful Results</h2>
            <p className={styles.p}>
              We deliver tangible results, securing funding for startups and
              generating returns for investors, making EarthMates the preferred
              choice for impactful startups in Africa.
            </p>
          </div>
        </div>
        <div className={styles.button}>
          <Button buttonText="Create a Profile" />
        </div>
      </div>
      <div className={styles.review}>
        <div className={styles.header}>
          <h1 className={styles.h1}>
            Hear What Our Tech Founders Have to Say!
          </h1>
          <p className={styles.p}>
            Discover firsthand experiences from tech founders who have
            transformed their startup journeys with EarthMates.
          </p>
        </div>
        <div className={styles.container}>
          <div className={styles.image}>
            <img src={ReviewSvg} alt="" />
          </div>
          <div className={styles.text}>
            <h1 className={styles.h1}>
              “EarthMates' investment readiness expertise was instrumental in
              preparing me for my first pre-seed funding journey. Their tailored
              guidance and support were crucial in connecting my startup to
              global investors, paving the way for our growth and success.”
            </h1>
            <p className={styles.p}>
              Ryan Apreala, Founder, Outside Hospitality
            </p>
          </div>
        </div>
      </div>
      <div className={styles.faq}>
        <div className={styles.title_container}>
          <h1 className={styles.title}>FAQs</h1>
          <p className={styles.paragraph}>
            Explore answers to commonly asked questions about investing with
            EarthMates.
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
              How can I list my startup on EarthMates?
            </AccordionSummary>
            <AccordionDetails>
              Listing your startup on EarthMates is easy. Simply sign up for an
              account as a founder, complete your startup profile with relevant
              information about your project, and submit it for review. Our team
              will then evaluate your submission and notify you once your
              startup is listed on the platform.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              className={styles.accordionSummary}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              What criteria does EarthMates use to select startups for listing?
            </AccordionSummary>
            <AccordionDetails>
              EarthMates uses a set of criteria including the uniqueness of the
              idea, market potential, team strength, and sustainability impact
              to select startups for listing.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              className={styles.accordionSummary}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              Is there a fee for listing my startup on EarthMates?
            </AccordionSummary>
            <AccordionDetails>
              The listing of your startup on EarthMates is free of charge. We
              are committed to providing entrepreneurs with a platform to
              showcase their innovations without any initial costs.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              className={styles.accordionSummary}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4a-content"
              id="panel4a-header"
            >
              How can I attract investors to my startup profile on EarthMates?
            </AccordionSummary>
            <AccordionDetails>
              To attract investors, ensure your startup profile is complete and
              compelling. Highlight key aspects such as your business model,
              market potential, traction, and team expertise. Engage with the
              EarthMates community and participate in events and pitch sessions.
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <div className={styles.next_steps}>
        <h1>Are you ready to take the next step?</h1>
        <p>Join EarthMates Today and Propel Your Startup Forward!</p>
        <Button buttonText="Register Now" color="#ffff" textColor="#001B2E" />
      </div>
    </div>
  );
};
