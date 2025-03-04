import React from "react";
import styles from "../styles/Products.module.css";
import { proizvodi } from "../dammyData";
import ComponentWidth from "./comWidth";
import TitleComponent from "./Title";

const ProizvodiComponent = () => {
  return (
    <>
      <div className={styles.mainProizvodi}>
        <ComponentWidth>
          <TitleComponent subtitle="Naši proizvodi" />
          <div className={styles.holderProizvodi}>
            {proizvodi.map((item, id) => (
              <div className={styles.proizvod}>
                <img src={item.img} />
                <div className={styles.naziv}>{item.naziv}</div>
              </div>
            ))}
          </div>
        </ComponentWidth>
      </div>
    </>
  );
};
export default ProizvodiComponent;
