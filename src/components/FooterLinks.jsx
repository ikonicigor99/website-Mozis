import React from "react";
import styles from "../styles/FooterLinks.module.css";

const FooterLinks = () => {
  return (
    <>
      <div className={styles.mainLinks}>
        <div className={styles.containerLinks}>
          <div>
            <div className={styles.link}>Početna</div>
            <div className={styles.link}>O nama</div>
            <div className={styles.link}>Proizvodi</div>
            <div className={styles.link}>Galerija</div>
            <div className={styles.link}>Kontakt</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterLinks;
