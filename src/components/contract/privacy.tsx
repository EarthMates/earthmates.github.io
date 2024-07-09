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

export interface PrivacyProps {
  className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Privacy = ({ className }: PrivacyProps) => {
  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.hero}>
        <div>
          <h1>Privacy Policy</h1>
          <h2>1. Introduction</h2>
          <p>
            EarthMates GmbH ("we," "us," or "our") is committed to protecting
            your privacy. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you use our SaaS
            application EarthMates GmbH ("Service"). By using the Service, you
            agree to the collection and use of information in accordance with
            this policy.
          </p>
          <h2>2. Information We Collect</h2>
          <h3>2.1 Personal Data</h3>
          <p>
            We collect personal data that you voluntarily provide to us when you
            create an account, use the Service, or contact us. This may include:
          </p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Billing information (e.g., credit card details)</li>
            <li>Company name and job title</li>
          </ul>
          <h3>2.2 Usage Data</h3>
          <p>
            We automatically collect certain information when you access and use
            the Service. This may include:
          </p>
          <ul>
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Device type and operating system</li>
            <li>Referring website</li>
            <li>Pages visited and time spent on those pages</li>
            <li>Clickstream data</li>
          </ul>
          <h3>2.3 Cookies and Tracking Technologies</h3>
          <p>
            We use cookies and similar tracking technologies to track activity
            on our Service and hold certain information. Cookies are files with
            a small amount of data that are stored on your device.
          </p>
          <h2>3. How We Use Your Information</h2>
          <p>
            We use the information we collect for various purposes, including:
          </p>
          <ul>
            <li>To provide and maintain our Service</li>
            <li>To process transactions and manage your account</li>
            <li>To improve our Service and develop new features</li>
            <li>
              To communicate with you, including sending updates, security
              alerts, and support messages
            </li>
            <li>To comply with legal obligations and enforce our terms</li>
            <li>To analyze usage patterns and improve marketing efforts</li>
          </ul>
          <h2>4. Legal Basis for Processing Personal Data</h2>
          <p>
            We process your personal data based on the following legal grounds:
          </p>
          <ul>
            <li>
              <strong>Contractual necessity:</strong> To perform our contract
              with you (e.g., providing the Service).
            </li>
            <li>
              <strong>Legitimate interests:</strong> To improve and promote our
              Service, and to ensure security.
            </li>
            <li>
              <strong>Consent:</strong> Where you have given consent (e.g., for
              marketing communications).
            </li>
            <li>
              <strong>Legal obligation:</strong> To comply with applicable laws
              and regulations.
            </li>
          </ul>
          <h2>5. Sharing Your Information</h2>
          <p>We may share your information with:</p>
          <ul>
            <li>
              <strong>Service providers:</strong> Third-party vendors who
              perform services on our behalf, such as payment processing, data
              analysis, email delivery, and hosting services.
            </li>
            <li>
              <strong>Business partners:</strong> Trusted partners for the
              purpose of providing our Service and improving user experience.
            </li>
            <li>
              <strong>Legal authorities:</strong> If required by law or to
              protect our rights and interests.
            </li>
          </ul>
          <h2>6. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to
            protect your personal data from unauthorized access, use, or
            disclosure. However, no method of transmission over the internet or
            method of electronic storage is 100% secure.
          </p>
          <h2>7. Data Retention</h2>
          <p>
            We retain your personal data only for as long as necessary to
            fulfill the purposes for which we collected it, including to satisfy
            any legal, accounting, or reporting requirements.
          </p>
          <h2>8. Your Rights</h2>
          <p>
            Under GDPR, you have the following rights regarding your personal
            data:
          </p>
          <ul>
            <li>
              <strong>Access:</strong> You can request a copy of the personal
              data we hold about you.
            </li>
            <li>
              <strong>Rectification:</strong> You can request correction of
              inaccurate or incomplete data.
            </li>
            <li>
              <strong>Erasure:</strong> You can request deletion of your
              personal data under certain conditions.
            </li>
            <li>
              <strong>Restriction:</strong> You can request restriction of
              processing of your personal data.
            </li>
            <li>
              <strong>Portability:</strong> You can request transfer of your
              personal data to another service provider.
            </li>
            <li>
              <strong>Objection:</strong> You can object to the processing of
              your personal data in certain circumstances.
            </li>
            <li>
              <strong>Withdraw Consent:</strong> You can withdraw consent where
              we rely on your consent to process your data.
            </li>
          </ul>
          <p>
            To exercise your rights, please contact us at{" "}
            <a href="mailto:jacopo@earthmates.de">jacopo@earthmates.de</a>.
          </p>
          <h2>9. International Data Transfers</h2>
          <p>
            Your personal data may be transferred to and processed in countries
            outside the European Economic Area (EEA). We ensure that such
            transfers are conducted in accordance with applicable data
            protection laws, typically through the use of standard contractual
            clauses approved by the European Commission.
          </p>
          <h2>10. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
            You are advised to review this Privacy Policy periodically for any
            changes.
          </p>
        </div>
      </div>
    </div>
  );
};
