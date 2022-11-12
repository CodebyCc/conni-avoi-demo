import React from "react";
import Product from "../components/Product";
import styles from "../styles/Home.module.css";

const sandal = () => {
  const itemsInfo = [
    {
      id: 1,
      image: "/images/slingbrown.png",
      itemName: "Sling-Back Brown",
      link: "/order/ordersandal",
    },

    {
      id: 2,
      image: "/images/slingblack.png",
      itemName: "Sling-Back Black",
      link: "/order/ordersandal",
    },

    {
      id: 3,
      image: "/images/slingbur.png",
      itemName: "Sling-Back Burgundy",
      link: "/order/ordersandal",
    },
    {
      id: 4,
      image: "/images/slingbrowny.png",
      itemName: "Sling-Back Brown L.E",
      link: "/order/ordersandal",
    },
  ];

  return (
    <div className={styles.gridContainer}>
      {itemsInfo.map((item) => {
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
  );
};

export default sandal;
