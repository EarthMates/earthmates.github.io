import classNames from "classnames";
import styles from "./home-page.module.scss";
import { Button } from "../button/button";
import MissionImageCombinePng from "../../assets/landing_page/mission_image_combine.png";
import VisionImagePng from "../../assets/landing_page/vision image.png";
import JacopoPng from "../../assets/landing_page/jacopo.png";
import StartupIcon from "../../assets/landing_page/startup_icon_2.svg";
import InvestorIcon from "../../assets/landing_page/investor_icon_2.svg";
import BuildingIcon from "../../assets/landing_page/building-03.svg";
import MoneyIcon from "../../assets/landing_page/money-bag-02.svg";
import ManagerIcon from "../../assets/landing_page/manager.svg";
import TickIcon from "../../assets/landing_page/tick-03.svg";
import OrangeStarIcon from "../../assets/landing_page/star-orange.svg";
import PurpleStarIcon from "../../assets/landing_page/star-purple.svg";
import LinkedinIcon from "../../assets/landing_page/linkedin.svg";
import Button_module from "../button/button.module.scss";
import MarcoPng from "../../assets/landing_page/marco.png";
import MohamedPng from "../../assets/landing_page/mohamed.png";
import FilipePng from "../../assets/landing_page/iflipe.jpg";
import DanielPng from "../../assets/landing_page/adniel.jpg";
import GhelaPng from "../../assets/landing_page/ghela.jpg";
import AdePng from "../../assets/landing_page/dea.jpg";
import Features from "../features/Features";

// * new div: "requirements"
// image and 7 icons
import requirementImage from "../../assets/landing_page/requirementImage.png";
import requirementIcon1 from "../../assets/landing_page/requirementIcon_1.svg";
import requirementIcon2 from "../../assets/landing_page/requirementIcon_2.svg";
import requirementIcon3 from "../../assets/landing_page/requirementIcon_3.svg";
import requirementIcon4 from "../../assets/landing_page/requirementIcon_4.svg";
import requirementIcon5 from "../../assets/landing_page/requirementIcon_5.svg";
import requirementIcon6 from "../../assets/landing_page/requirementIcon_6.svg";
import requirementIcon7 from "../../assets/landing_page/requirementIcon_7.svg";

import ImpactImagePng from "../../assets/landing_page/impact.svg";

export interface HomePageProps {
  className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const HomePage = ({ className }: HomePageProps) => {
  const linkedinClick =
    (link: string) => (event: React.MouseEvent<HTMLImageElement>) => {
      window.location.href = link;
    };

  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.hero}>
        <div className={styles.title}>
          WE MATCH GLOBAL INVESTORS WITH AFRICAN IMPACT STARTUPS
        </div>
        <div className={styles.paragraph}>
          Your sustainable matching platform connects African tech-Startups with
          global investors to create an impact for the world and unlock profits
        </div>
        <div className={styles["call-to-action"]}>
          <Button buttonText="Get Started" />
        </div>
      </div>
      <div className={styles["cards-container"]}>
        <div className={styles.cards}>
          <div className={styles.header}>
            <img src={StartupIcon} alt="startup" />
            <div>
              <h1 className={styles.h1}>START UPS</h1>
              <p className={styles.p}>
                Funding is a challenge, but have you found your EarthMate?
              </p>
            </div>
          </div>
          <br />
          <p className={styles.paragraph}>
            Securing funding is a major hurdle for many startups. The journey is
            filled with potential but finding the right investor often feels
            like searching in the dark. This is where EarthMates steps in. We
            simplify the search for funding.
          </p>
          <p className={styles.paragraph}>
            Our platform brings together startups and investors, ensuring you
            connect with those who share your vision and goals. If you&apos;re
            looking for funding that aligns with your startup&apos;s potential,
            EarthMates is here to help. Ready to meet your EarthMate?
          </p>
        </div>
        <div className={styles.cards}>
          <div className={styles.header}>
            <img src={InvestorIcon} alt="startup" />
            <div>
              <h1 className={styles.h1}>INVESTORS</h1>
              <p className={styles.p}>
                Finding the right Investment in Africa is difficult to find, but
                have you found your EarthMate?
              </p>
            </div>
          </div>
          <br />
          <p className={styles.paragraph}>
            Finding the right investment in Africa can be tough. The landscape
            is vast and full of potential, yet pinpointing that perfect
            opportunity often feels like searching for a needle in a haystack.
            That&apos;s where EarthMates comes in. We make the search
            straightforward and effective.
          </p>
          <p className={styles.paragraph}>
            Our platform connects investors with Africa&apos;s most promising
            startups. If you&apos;re looking for an investment that matches your
            goals and has a real impact, let EarthMates guide you. Ready to find
            your match?
          </p>
        </div>
        {/* <div className={styles.cards}>
                    <div className={classNames(styles.header)}>
                        <img src={StartupIcon} alt="startup" />
                        <div>
                            <h1 className={styles.h1}>INVESTORS</h1>
                            <p className={styles.p}>
                                Finding the right Investment in Africa is difficult to find, but
                                have you found your EarthMate?
                            </p>
                        </div>
                        <br />
                    </div>
                    <p className={styles.paragraph}>
                        Finding the right investment in Africa can be tough. The landscape is vast
                        and full of potential, yet pinpointing that perfect opportunity often feels
                        like searching for a needle in a haystack. That&apos;s where EarthMates
                        comes in. We make the search straightforward and effective.
                    </p>
                    <p className={styles.paragraph}>
                        Our platform connects investors with Africa&apos;s most promising startups.
                        If you&apos;re looking for an investment that matches your goals and has a
                        real impact, let EarthMates guide you. Ready to find your match?
                    </p>
                </div> */}
      </div>
      <div className={styles["icon-row"]}>
        <div className={styles["icon-container"]}>
          <img src={BuildingIcon} alt="build" />
          <div className={styles.description}>
            <h2 className={styles.h2}>100+</h2>
            <p className={styles.p}>Registered Startups</p>
          </div>
        </div>
        <div className={styles["icon-container"]}>
          <img src={MoneyIcon} alt="money" />
          <div className={styles.description}>
            <h2 className={styles.h2}>$1M+</h2>
            <p className={styles.p}>Capital Raised</p>
          </div>
        </div>
        <div className={styles["icon-container"]}>
          <img src={ManagerIcon} alt="manager" />
          <div className={styles.description}>
            <h2 className={styles.h2}>50+</h2>
            <p className={styles.p}>Active Investors</p>
          </div>
        </div>
        <div className={styles["icon-container"]}>
          <img src={TickIcon} alt="tick" />
          <div className={styles.description}>
            <h2 className={styles.h2}>30%</h2>
            <p className={styles.p}>Success Rate</p>
          </div>
        </div>
      </div>

      <div className={styles.requirements}>
        <img
          src={requirementImage}
          alt="requirement illustration image"
          className={styles.requirementsImage}
        />
        <div className={styles.requirementsText}>
          <h1>We look for the best Startups in Africa. Are you one of them?</h1>
          <p>
            We will launch our Matching Platform this year. For that, we are
            looking for the best impact startups in Africa. In the end of this
            year we will invite the best Applicants to our EarthMates Gathering
            event in Berlin - fully sponsored.
          </p>

          <div className={styles.criteria}>
            <p>You can apply if you fulfill these criteria:</p>
            <div className={styles.criterion}>
              <img src={requirementIcon1} alt="icon" />
              <p>You must be registered.</p>
            </div>
            <div className={styles.criterion}>
              <img src={requirementIcon2} alt="icon" />
              <p>You must fulfill some SDGs (Sustainable Development Goals).</p>
            </div>
            <div className={styles.criterion}>
              <img src={requirementIcon3} alt="icon" />
              <p>Measurable impact should be embodied in your strategy.</p>
            </div>
            <div className={styles.criterion}>
              <img src={requirementIcon4} alt="icon" />
              <p>You must solve real-world problems.</p>
            </div>
            <div className={styles.criterion}>
              <img src={requirementIcon5} alt="icon" />
              <p>You must have solid financials.</p>
            </div>
            <div className={styles.criterion}>
              <img src={requirementIcon6} alt="icon" />
              <p>
                You should have a minimum viable product (MVP) ready to
                showcase.
              </p>
            </div>
            <div className={styles.criterion}>
              <img src={requirementIcon7} alt="icon" />
              <p>You are a pre-seed or seed stage startup</p>
            </div>
          </div>
          <Button buttonText="Apply Now" />
        </div>
      </div>

      <Features />
      {/*
      <div className={styles.features}>
        <div className={styles["features-startup"]}>
          <h1 className={styles.h1}>Need Funding?</h1>
          <p className={styles.p}>
            Earthmates provides a platform for startup founders to connect with
            a diverse network of investors and access the funding they need to
            scale their ventures. Whether you&apos;re seeking seed funding to
            launch your idea or looking to secure Series A funding for
            expansion, Earthmates can help you find the right investors to
            support your growth journey.
          </p>
          <div className={styles.list}>
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
          </div>
          <Button buttonText="Learn More" className={styles.learnMore_button} />
        </div>
        <div className={styles["features-investor"]}>
          <h1 className={styles.h1}>Looking to invest?</h1>
          <p className={styles.p}>
            Earthmates offers investors a platform to discover and invest in
            high-potential African startups poised for growth. Whether
            you&apos;re an angel investor, venture capitalist, or corporate
            investor, Earthmates provides access to a curated selection of
            investment opportunities across various industries and stages.
          </p>
          <br />
          <div className={styles.list}>
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
          </div>
          <Button buttonText="Learn More" className={styles.learnMore_button} />
        </div>
      </div>
              */}

      {/*  <div className={styles['connecting-card-container']}>
                <div className={styles['connecting-card-left']}></div>
                <div className={styles['connecting-card']}></div>
                <div className={styles['connecting-card-right']} />
            </div> */}
      <div className={styles.home}>
        <div className={styles.mission}>
          <h1 className={styles.h1}>Our Mission</h1>
          <p className={styles.p}>
            We create connections between African leading tech startups and
            global investors, dedicated to catalyzing social impact and
            innovation across Africa.
          </p>
          <div className={styles["mission-image"]}>
            <img src={MissionImageCombinePng} alt="" className={styles.img} />
          </div>
        </div>
        <div className={styles.impact}>
          <div className={styles["impact-text"]}>
            <h1 className={styles.h1}>What does impact means for us?</h1>
            <p className={styles.p}>
              Fulfilling at least 3-5 SDGs lays the foundation for impact.
              Beyond that, impact means creating a measurable positive social or
              environmental change through your company's products, services, or
              operations. Sustainability in that sense means being conscious of
              the consequences of our actions.
              <br />
              <br />
              We believe Africa has the potential to address global issues such
              as climate change, loss of biodiversity, and hunger. We are
              certain that African innovation is essential to solving world
              problems.
            </p>
            <Button
              buttonText="Register Now"
              color="#FFFFFF"
              textColor="#001B2E"
            />
          </div>
          <div className={styles["impact-image"]}>
            <img src={ImpactImagePng} alt="" />
          </div>
        </div>
        <div className={styles.vision}>
          <div className={styles["vision-image"]}>
            <img src={VisionImagePng} alt="" />
          </div>
          <div className={styles["vision-text"]}>
            <h1 className={styles.h1}>Our Vision</h1>
            <p className={styles.p}>
              Our vision is to create an ecosystem where African startups can
              not only survive, but thrive and flourish by positively impacting
              local and global communities through sustainable innovation.
              <br />
              <br />
              We dream of a future where African innovation is at the forefront
              of solutions to the climate crisis and social injustices,
              supported by a global network of partners working together to
              create a fairer, more sustainable world
            </p>
            <Button
              buttonText="Register Now"
              color="#FFFFFF"
              textColor="#001B2E"
            />
          </div>
        </div>
        <div className={styles.values}>
          <h1 className={styles.h1}>Our Values</h1>
          <div className={styles["value-cards"]}>
            <div className={styles.card}>
              <h2 className={styles.h1}>Community </h2>
              <p className={styles.p}>
                EarthMates fosters a strong community of founders, investors and
                supporters united by the common goal of creating social impact.
              </p>
            </div>
            <div className={styles.card}>
              <h2 className={styles.h1}>Innovation</h2>
              <p className={styles.p}>
                We value and support breakthrough ideas that draw on African
                creativity and innovation to develop sustainable solutions to
                global challenges.
              </p>
            </div>
            <div className={styles.card}>
              <h2 className={styles.h1}>Sustainability</h2>
              <p className={styles.p}>
                Our commitment to the planet is evident in our support for
                startups dedicated to tackling the climate crisis through
                sustainable innovation.
              </p>
            </div>
            <div className={styles.card}>
              <h2 className={styles.h1}>Empowerment</h2>
              <p className={styles.p}>
                We want to empower startups to solve their own problems
              </p>
            </div>
          </div>
        </div>
        <div className={styles.team}>
          <h1 className={styles.h1}>Meet Our Team</h1>
          <p className={styles.p}>
            Get to know the passionate individuals behind Earthmates who are
            dedicated to supporting <br />
            African startups and driving positive change in the entrepreneurial
            ecosystem.
          </p>
          <div className={styles["team-members"]}>
            <div className={styles.member}>
              <img src={MarcoPng} alt="" />
              <div className={styles.description}>
                <div className={styles.name}>
                  <h1 className={styles.h1}>Marco Maiworm</h1>
                  <p className={styles.p}>CEO and Network Developer</p>
                </div>
                <img
                  src={LinkedinIcon}
                  alt="linkedin"
                  style={{ cursor: "pointer" }}
                  onClick={linkedinClick(
                    "https://www.linkedin.com/in/marco-maiworm/"
                  )}
                />
              </div>
            </div>
            <div className={styles.member}>
              <img src={MohamedPng} alt="" />
              <div className={styles.description}>
                <div className={styles.name}>
                  <h1 className={styles.h1}>Mohamed Karsan</h1>
                  <p className={styles.p}>Africa Startup Relations</p>
                </div>
                <img
                  src={LinkedinIcon}
                  alt="linkedin"
                  style={{ cursor: "pointer" }}
                  onClick={linkedinClick(
                    "https://www.linkedin.com/in/mohamed-karsan-1042992ab/"
                  )}
                />
              </div>
            </div>
            <div className={styles.member}>
              <img src={JacopoPng} alt="" />
              <div className={styles.description}>
                <div className={styles.name}>
                  <h1 className={styles.h1}>Jacopo Ceravolo</h1>
                  <p className={styles.p}>CTO, Full Stack and AI Developer</p>
                </div>
                <img
                  src={LinkedinIcon}
                  alt="linkedin"
                  style={{ cursor: "pointer" }}
                  onClick={linkedinClick(
                    "https://www.linkedin.com/in/jacopo-ceravolo/"
                  )}
                />
              </div>
            </div>
            <div className={styles.member}>
              <img src={FilipePng} alt="" />
              <div className={styles.description}>
                <div className={styles.name}>
                  <h1 className={styles.h1}>Filipe Bertolucci</h1>
                  <p className={styles.p}>Frontend Developer</p>
                </div>
                <img
                  src={LinkedinIcon}
                  alt="linkedin"
                  style={{ cursor: "pointer" }}
                  onClick={linkedinClick(
                    "https://www.linkedin.com/in/filipe-bertolucci-104374241/"
                  )}
                />
              </div>
            </div>
          </div>
          <div className={styles["team-members"]}>
            <div className={styles.member}>
              <img src={GhelaPng} alt="" />
              <div className={styles.description}>
                <div className={styles.name}>
                  <h1 className={styles.h1}>Francesco Ghelardi</h1>
                  <p className={styles.p}>Backend Developer</p>
                </div>
                <img
                  src={LinkedinIcon}
                  alt="linkedin"
                  style={{ cursor: "pointer" }}
                  onClick={linkedinClick(
                    "https://www.linkedin.com/in/francesco-ghelardi-2ba4a920b/"
                  )}
                />
              </div>
            </div>
            <div className={styles.member}>
              <img src={AdePng} alt="" />
              <div className={styles.description}>
                <div className={styles.name}>
                  <h1 className={styles.h1}>Adedigba Adediwura</h1>
                  <p className={styles.p}>UX/UI Designer</p>
                </div>
                <img
                  src={LinkedinIcon}
                  alt="linkedin"
                  style={{ cursor: "pointer" }}
                  onClick={linkedinClick(
                    "https://www.linkedin.com/in/adedigba-adediwura-a2b202227/"
                  )}
                />
              </div>
            </div>
            <div className={styles.member}>
              <img src={DanielPng} alt="" />
              <div className={styles.description}>
                <div className={styles.name}>
                  <h1 className={styles.h1}>Daniel Ujoh</h1>
                  <p className={styles.p}>Costumer Relationships</p>
                </div>
                <img
                  src={LinkedinIcon}
                  alt="linkedin"
                  style={{ cursor: "pointer" }}
                  onClick={linkedinClick(
                    "https://www.linkedin.com/in/ujohdaniel1696211aa/"
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["next-step"]}>
        <h1 className={styles.h1}>Ready to Take the Next Step</h1>
        <p className={styles.p}>We will help you along the journey ahead</p>
        <div className={styles["call-to-action"]}>
          <Button buttonText="Get Started" />
        </div>
      </div>
    </div>
  );
};
