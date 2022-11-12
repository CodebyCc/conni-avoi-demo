import React from "react";
import Head from "next/head";
import Product from "../components/Product";
import styles from "../styles/Home.module.css";

const bag = () => {
  const itemInfo = [
    {
      id: 1,
      image: "/images/blackcroc.png",
      itemName: "Adepa",
      link: "/order/orderbags",
    },

    {
      id: 2,
      image: "/images/bag.png",
      itemName: "Aseda",
      link: "/order/orderbags",
    },

    {
      id: 3,
      image: "/images/redbag.png",
      itemName: "Nyameba",
      link: "/order/orderbags",
    },
    {
      id: 4,
      image: "/images/yellowbag.png",
      itemName: "Adiepena",
      link: "/order/orderbags",
    },
    ,
  ];
  return (
    <div>
      <Head>
        <title>Conni-Avoi bags</title>
        <meta name="description" content="Ghana's Leader in Leather Products" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.gridContainer}>
        {itemInfo.map((item) => {
          return (
            <Product
              key={item.id}
              img={item.image}
              name={item.itemName}
              address={item.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default bag;
