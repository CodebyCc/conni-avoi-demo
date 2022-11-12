import styles from "../styles/Featured.module.css";
import Image from "next/image";

import React from "react";

const FeaturedHeader = (props) => {
  return (
    <div className={styles.productDetails}>
      <h1 className={styles.productName}>{props.heading}</h1>
      <h2 className={styles.tagline}>
        Order Now to qualify for
        <span className="underline cursor-pointer"> free delivery</span>
      </h2>
    </div>
  );
};

export default FeaturedHeader;
