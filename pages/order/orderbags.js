import React from "react";
import { useState } from "react";
import styles from "../../styles/Home.module.css";
import Image from "next/image";

const Orderbags = () => {
  const [size, setSize] = useState(0);

  const color = [
    {
      image: "/images/blackcroc.png",
      nam: "Black Croc-Clutch",
    },
    {
      image: "/images/bag.png",
      nam: "Black Clutch",
    },
    {
      image: "/images/redbag.png",
      nam: "Brown Croc-Clutch",
    },
    {
      image: "/images/yellowbag.png",
      nam: "Yellow Croc-Clutch",
    },
  ];

  return (
    <div className={styles.gridyContainer}>
      <div className={styles.imgContainer}>
        <Image
          src={color[size].image}
          alt="image  of slippers"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.texts}>
        <h1 className={styles.titles}>{color[size].nam}</h1>
        <h4 className={styles.price}>$19.90</h4>
        <p className={styles.item}>Color</p>
        <p onClick={() => setSize(0)} className={styles.colorSelect}>
          <Image
            src={color[0].image}
            alt="image  of slippers"
            height="80px"
            width="80px"
          />
        </p>
        <p onClick={() => setSize(1)} className={styles.colorSelect}>
          <Image
            src={color[1].image}
            alt="image  of slippers"
            height="80px"
            width="80px"
          />
        </p>
        <p onClick={() => setSize(2)} className={styles.colorSelect}>
          <Image
            src={color[2].image}
            alt="image  of slippers"
            height="80px"
            width="80px"
          />
        </p>
        <p onClick={() => setSize(3)} className={styles.colorSelect}>
          <Image
            src={color[3].image}
            alt="image  of slippers"
            height="80px"
            width="80px"
          />
        </p>
        <h1 className={styles.item}>Size</h1>
        <div className="grid grid-cols-4 gap-3 text-center ">
          <p className={styles.sizeContainer}>S</p>
          <p className={styles.sizeContainer}>M</p>
          <p className={styles.sizeContainer}>L</p>
          <p className={styles.sizeContainer}>XL</p>
        </div>
        <div className={styles.buttons}>
          <button className={styles.btnOne}>Add to Cart</button>
          <button className={styles.btnTwo}>Add to Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default Orderbags;
