import React from "react";
import { useState } from "react";
import styles from "../../styles/Home.module.css";
import Image from "next/image";

const Order = () => {
  const [size, setSize] = useState(0);

  const color = [
    {
      image: "/images/crisblack.png",
      nam: "Criss-Cross Black",
    },
    {
      image: "/images/cris.png",
      nam: "Criss-Cross Croc ",
    },
    {
      image: "/images/brown.png",
      nam: "Cris-Cross Brown ",
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
        <h1 className={styles.item}>Size</h1>
        <div className="grid grid-cols-4 gap-3 text-center ">
          <p className={styles.sizeContainer}>37</p>
          <p className={styles.sizeContainer}>38</p>
          <p className={styles.sizeContainer}>39</p>
          <p className={styles.sizeContainer}>40</p>
          <p className={styles.sizeContainer}>41</p>
          <p className={styles.sizeContainer}>42</p>
          <p className={styles.sizeContainer}>43</p>
          <p className={styles.sizeContainer}>44</p>
          <p className={styles.sizeContainer}>45</p>
          <p className={styles.sizeContainer}>46</p>
          <p className={styles.sizeContainer}>47</p>
        </div>
        <div className={styles.buttons}>
          <button className={styles.btnOne}>Add to Cart</button>
          <button className={styles.btnTwo}>Add to Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default Order;
