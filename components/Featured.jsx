import React from "react";
import styles from "../styles/Featured.module.css";
import Image from "next/image";
import FeaturedHeader from "./FeaturedHeader";
import Link from "next/link";

const Featured = () => {
  return (
    <main>
      <section id="#slipper" className={styles.section}>
        <FeaturedHeader heading="Leather Slides" />
        <div className={styles.imgContainer}>
          <Image
            className={styles.animate}
            src="/images/mainBac.png"
            alt="image of slides"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className={styles.buttons}>
          <Link href="/order/1">
            <button className={styles.btnOne}>Order Now</button>
          </Link>
        </div>
        <a href="#sandal">
          <svg
            className={styles.downSvg}
            viewBox="0 0 30 30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="var(--tds-icon--fill, #171a20)"
              stroke-width="1.5"
              d="m19.5 12.5-4.5 4-4.5-4"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </section>
      <section id="#sandal" className={styles.section}>
        <FeaturedHeader heading="Sandals" />
        <div className={styles.imgContainer}>
          <Image
            className="animate-pulse"
            src="/images/homesandal.png"
            alt="image of slides"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className={styles.buttons}>
          <Link href="/order/ordersandal">
            <button className={styles.btnOne}>Order Now</button>
          </Link>
        </div>

        <svg
          className={styles.downSvg}
          viewBox="0 0 30 30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke="var(--tds-icon--fill, #171a20)"
            stroke-width="1.5"
            d="m19.5 12.5-4.5 4-4.5-4"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </section>
      <section id="#bag" className={styles.section}>
        <FeaturedHeader heading="Bags" />
        <div className={styles.imgContainer}>
          <Image
            className="hover:animate-bounce"
            src="/images/bag.png"
            alt="image of slides"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className={styles.buttons}>
          <Link href="/order/orderbags">
            <button className={styles.btnOne}>Order Now</button>
          </Link>
        </div>

        <svg
          className={styles.downSvg}
          viewBox="0 0 30 30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke="var(--tds-icon--fill, #171a20)"
            stroke-width="1.5"
            d="m19.5 12.5-4.5 4-4.5-4"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </section>
    </main>
  );
};

export default Featured;
