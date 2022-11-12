import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  const d = new Date();
  return (
    <div className={styles.container}>
      <div className={styles.gridContainer}>
        <div className={styles.footer}>
          <ul>
            <h1 className={styles.footerHeading}>Shop</h1>
            <li>Leather Slides</li>
            <li>Bags</li>
            <li>Sandals</li>
            <li>Women</li>
          </ul>
        </div>
        <div className={styles.footer}>
          <ul>
            <h1 className={styles.footerHeading}>Support</h1>
            <li>About</li>
            <li>FAQ</li>
            <li>Order Status</li>
            <li>Return policy</li>
          </ul>
        </div>
        <div className={styles.footer}>
          <ul>
            <h1 className={styles.footerHeading}>Company</h1>
            <li>Terms of Use</li>
            <li>Privacy</li>
            <li>About</li>
            <li>Recall info</li>
          </ul>
        </div>
        <div className={styles.footer}>
          <ul>
            <h1 className={styles.footerHeading}>Contact</h1>
            <li>About</li>
            <li>E-mail</li>
            <li>Address</li>
            <li>Call us</li>
          </ul>
        </div>
      </div>
      <p className={styles.date}>copyright ⓒ {d.getFullYear()}</p>
    </div>
  );
};

export default Footer;
