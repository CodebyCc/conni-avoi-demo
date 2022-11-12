import React from "react";
import styles from "../styles/Products.module.css";
import Image from "next/image";
import Link from "next/link";

const Product = (props) => {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Link href={props.address}>
          <Image
            src={props.img}
            alt="image  of slippers"
            layout="fill"
            objectFit="cover"
          />
        </Link>
      </div>
      <Link href={props.address}>
        <h1 className={styles.titles}>{props.name}</h1>
      </Link>
      <span className={styles.price}>$19.99</span>
    </div>
  );
};

export default Product;
