import classNames from "classnames";
import styles from "./contract.module.scss";
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

export interface TermsProps {
  className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Terms = ({ className }: TermsProps) => {
  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.hero}>
        <div>
          <h1>Terms & Conditions</h1>
          <p>
            Welcome to EarthMates GmbH. These terms and conditions ("Terms")
            govern your use of our software service ("Service"). By accessing or
            using the Service, you agree to be bound by these Terms. If you do
            not agree, do not use the Service.
          </p>
          <h2>1. Definitions:</h2>

          <p>"Service" means EarthMates GmbH.</p>
          <p>"We," "Us," "Our" means EarthMates GmbH.</p>
          <p>"You," "User" means the individual or entity using the Service.</p>
          <p>
            "Data" refers to any personal data and other information collected
            by the Service.
          </p>

          <h2>2. User Accounts:</h2>
          <p>
            To use our Service, you must create an account by providing accurate
            and complete information. You are responsible for maintaining the
            confidentiality of your account information and for all activities
            that occur under your account. We reserve the right to terminate
            accounts that violate these Terms.
          </p>
          <h2>3. Use of the Service:</h2>
          <p>
            You agree to use the Service in compliance with these Terms and all
            applicable laws. You must not use the Service for any illegal
            activities, infringe upon intellectual property rights, or violate
            any third-party rights.
          </p>
          <h2>4. Data Collection and Use:</h2>
          <p>
            We collect personal data and usage data to improve our Service,
            perform analytics, and for marketing purposes. We process your data
            in accordance with our Privacy Policy and GDPR. We may share data
            with third parties under specific conditions outlined in our Privacy
            Policy.
          </p>
          <h2>5. Privacy Policy:</h2>
          <p>
            Please refer to our detailed <a href="/privacy">Privacy Policy</a>{" "}
            for information on how we protect your data and your rights under
            GDPR.
          </p>
          <h2>6. Intellectual Property:</h2>
          <p>
            We own all intellectual property rights related to the Service. We
            grant you a limited, non-exclusive license to use the Service. You
            must not use our intellectual property without our permission.
          </p>
          <h2>7. Payment Terms:</h2>
          <p>
            Our pricing information and subscription plans are available on our
            website. Payments are due on a (monthly/annual?) basis. Refunds?. We
            reserve the right to change pricing with (1 month?) notice.
          </p>
          <h2>8. Termination:</h2>
          <p>
            Either party may terminate this agreement at any time. Upon
            termination, your access to the Service will cease, and we may
            delete your data as per our data retention policy.
          </p>
          <h2>9. Limitation of Liability:</h2>
          <p>
            Our Service is provided "as is" without warranties of any kind. We
            are not liable for any indirect, incidental, or consequential
            damages. You agree to indemnify us against any claims arising from
            your use of the Service.
          </p>
          <h2>10. Changes to the Terms:</h2>
          <p>
            We may modify these Terms at any time. We will notify you of changes
            via email. Changes become effective 30 days after notification.
          </p>
          <h2>11. Governing Law:</h2>
          <p>
            These Terms are governed by the laws of Germany. Any disputes will
            be resolved in the courts of Germany.
          </p>
          <h2>12. Contact Information:</h2>
          <p>
            For questions about these Terms, please contact us at{" "}
            <a href="mailto:jacopo@earthmates.de">jacopo@earthmates.de</a>.
          </p>
          <h2>13. Miscellaneous:</h2>
          <p>
            These Terms constitute the entire agreement between you and us. If
            any part of these Terms is found invalid, the remaining provisions
            will remain in effect. Our failure to enforce any provision is not a
            waiver of our rights.
          </p>
          <p>
            By using our Service, you acknowledge that you have read,
            understood, and agree to be bound by these Terms.
          </p>
        </div>
      </div>
    </div>
  );
};
