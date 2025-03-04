import React from "react";
import styles from "../styles/Title.module.css";

const TitleComponent = ({ subtitle }) => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.holderTitle}>
          <div className={styles.title}>Mozis.com</div>
          <div className={styles.subtitle}>{subtitle}</div>
        </div>
      </div>
    </>
  );
};

export default TitleComponent;
