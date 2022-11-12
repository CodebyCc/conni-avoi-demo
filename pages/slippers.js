import React from "react";
import styles from "../styles/Home.module.css";
import Product from "../components/Product";
import { SERVER_PROPS_ID } from "next/dist/shared/lib/constants";

const Slippers = () => {
  const itemsInfo = [
    {
      id: 1,
      image: "/images/crisblack.png",
      itemName: "Criss-cross slides",
      link: "/order/1",
    },

    {
      id: 2,
      image: "/images/black.png",
      itemName: "Double-Sling slides",
      link: "",
    },

    { id: 3, image: "/images/slimblack.png", itemName: "Nyameba", link: "" },
    { id: 4, image: "/images/cream.png", itemName: "Adiepena", link: "" },
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

export default Slippers;
