import classNames from "classnames";
import styles from "./impressum.module.scss";
import { Button } from "../button/button";
import InvestorImage from "../../assets/investor_page/investor-image.png";
import BriefcaseIcon from "../../assets/investor_page/analytics-up.svg";
import UsergroupIcon from "../../assets/investor_page/computer-dollar.svg";
import FilevalidationIcon from "../../assets/investor_page/user-group.png";

import IconSvg from "../../assets/investor_page/icon.svg";
import ReviewSvg from "../../assets/startup_page/review.svg";

//mui
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export interface ImpressumProps {
  className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Impressum = ({ className }: ImpressumProps) => {
  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.hero}>
        <div>
          <h1>Impressum</h1>
          <h2>Legal Address</h2>
          <p>
            EarthMates GmbH
            <br />
            c/o InnoTech Berlin
            <br />
            Hönower Str. 35, 10318 Berlin
            <br />
          </p>

          <h2>Contact Details</h2>
          <p>
            Email: marco@earthmates.de
            <br />
            Phone: +49 175 5561953
          </p>
        </div>
      </div>
    </div>
  );
};
