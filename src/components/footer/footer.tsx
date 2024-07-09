import classNames from "classnames";
import styles from "./footer.module.scss";
import LogoSvg from "../../assets/landing_page/logo.svg";
import FacebookIcon from "../../assets/landing_page/facebook.svg";
import TwitterIcon from "../../assets/landing_page/x.svg";
import LinkedinIcon from "../../assets/landing_page/linkedin-2.svg";
import InstagramIcon from "../../assets/landing_page/instagram.svg";
import YoutubeIcon from "../../assets/landing_page/youtuber.svg";
import ArrowIcon from "../../assets/landing_page/arrow_right.svg";

export interface FooterProps {
  className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Footer = ({ className }: FooterProps) => {
  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.contact}>
        <div className={styles.register}>
          <div className={styles.logo}>
            <img src={LogoSvg} alt="" />
          </div>

          <div className={styles.small}>
            <p className={styles.p}>
              Stay updated with the latest news, insights,
              <br />
              and opportunities. Enter your email below.
            </p>
          </div>

          <div className={styles.email}>
            <input
              className={classNames(styles.input, styles["mail-text"])}
              placeholder="Email address"
            />
            <img src={ArrowIcon} alt="arrow" />
          </div>

          <div className={styles.social}>
            <a href="/">
              <img src={FacebookIcon} alt="facebook" />
            </a>
            <a href="/">
              <img src={TwitterIcon} alt="twitterr" />
            </a>
            <a href="/">
              <img src={LinkedinIcon} alt="linkedin" />
            </a>
            <a href="/">
              <img src={InstagramIcon} alt="instagram" />
            </a>
            <a href="/">
              <img src={YoutubeIcon} alt="youtube" />
            </a>
          </div>
        </div>
        <div className={styles.links}>
          <div className={styles.col}>
            <h2 className={styles.h1}>Product</h2>

            <div className={styles.column}>
              <a href="/startups" className={styles.p1}>
                Startups
              </a>
              <a href="/investors" className={styles.p1}>
                Investors
              </a>
            </div>
          </div>
          <div className={styles.col}>
            <h2 className={styles.h1}>Resources</h2>

            <div className={styles.column}>
              <a href="/" className={styles.p1}>
                Blog
              </a>
              <a href="mailto:jacopo@earthmates.de" className={styles.p1}>
                Help Center
              </a>
              <a href="/impressum" className={styles.p1}>
                About Us
              </a>
            </div>
          </div>
          <div className={styles.col}>
            <h2 className={styles.h1}>Legal</h2>

            <div className={styles.column}>
              <a href="/terms" className={styles.p1}>
                Terms &amp; Conditions
              </a>
              <a href="/privacy" className={styles.p1}>
                Privacy policy
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p className={styles.p}>
          Copyright © 2024 Earthmates. All rights reserved.
        </p>
      </div>
    </div>
  );
};
