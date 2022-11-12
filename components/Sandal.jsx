import React from "react";
import styles from "../styles/Featured.module.css";
import Image from "next/image";

const Sandal = (props) => {
  return (
    <div className={styles.carSection}>
      <div className={styles.imgConatiner}>
        <Image
          src="/images/mainBac.png"
          alt="image of slides"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default Sandal;
