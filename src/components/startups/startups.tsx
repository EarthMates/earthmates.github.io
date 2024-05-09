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

import DesktopIcon from "../../assets/startup_page/desktop.svg";
import IconSvg from "../../assets/startup_page/icon.svg";
import ReviewSvg from "../../assets/startup_page/review.svg";

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
            Your sustainable matching platform connects African tech-Startups
            with global investors to create an impact for the world and unlock
            profits
          </p>
          <Button buttonText="Start Matching" />
        </div>
        <img src={StartupImagePng} alt="" />
      </div>
      <div className={styles.home}>
        <div className={styles.features}>
          <h1 className={styles.h1}>How to get your Startup Journey Started</h1>
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
            Discover How Earthmates is Revolutionizing Startup Success in Africa
          </p>
          <div className={styles["display-cards"]}>
            <button>Smart Matching Algorithm</button>
            <button>Streamlined Process</button>
            <button>Diverse Opportunities</button>
            <button>Transparent and Secure</button>
          </div>
          <div className={styles.container}>
            <div>
              <h1 className={styles.h1}>
                Cutting-Edge Technology for Startup-Investor Connections
              </h1>
              <p className={styles.p}>
                Earthmates utilizes a sophisticated matching algorithm that
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
            <h1 className={styles.h1}>Discover the Earthmates Difference</h1>
            <p className={styles.p}>
              Reasons why Earthmates stands out as the platform for connecting
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
              generating returns for investors, making us the preferred choice
              for impactful startups in Africa.
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
            transformed their startup journeys with Earthmates.
          </p>
        </div>
        <div className={styles.container}>
          <div className={styles.image}>
            <img src={ReviewSvg} alt="" />
          </div>
          <div className={styles.text}>
            <h1 className={styles.h1}>
              “Thanks to Earthmates, I secured funding and strategic
              partnerships that propelled my startup&apos;s growth. Highly
              recommended for any tech founder looking to accelerate their
              journey.”
            </h1>
            <p className={styles.p}>
              John Smith, Founder &amp; CEO, Tech Innovations Inc.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.faq}>
        <div className={styles.header}>
          <h1>FAQs</h1>
          <p>
            Explore answers to commonly asked questions about investing with
            Earthmates.
          </p>
        </div>
        <div className={styles.questions}>
          <h1>Question 1</h1>
          <h1>Question 2</h1>
          <h1>Question 3</h1>
          <h1>Question 4</h1>
        </div>
      </div>
      <div className={styles.next_steps}>
        <h1>Ready to Take the Next Step?</h1>
        <p>Join Earthmates Today and Propel Your Startup Forward!</p>
        <Button buttonText="Register Now" color="#ffff" textColor="#001B2E" />
      </div>
    </div>
  );
};
