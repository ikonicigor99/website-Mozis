import React, { useContext } from "react";
import styles from "../styles/Header.module.css";
import LocationBar from "./LocationBar";
import { useEffect } from "react";
import { useState } from "react";
import { HashLink, HashLink as Link } from "react-router-hash-link";
const Header = () => {
  const [scroll, setScroll] = useState();
  const handleScroll = () => {
    setScroll(window.scrollY);
    console.log(scroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const scrollClass = scroll > 90 ? styles.scrollClass : styles.main;
  const scrollHeader = scroll > 90 ? styles.scrollLogo : styles.logo;
  return (
    <>
      <div className={scrollClass} scroll={scroll}>
        <div className={styles.container}>
          <div className={scrollHeader}>MOZIS</div>
          <div className={styles.containerManu}>
            <div className={styles.menuLinks}>
              <HashLink to="#pocetna" smooth className={styles.link}>
                Početna
              </HashLink>
              <Link to="#onama" smooth className={styles.link}>
                O nama
              </Link>
              <HashLink to="#proizvodi" smooth className={styles.link}>
                Proizvodi
              </HashLink>
              <Link to="#galerija" smooth className={styles.link}>
                Galerija
              </Link>
              <Link to="#map" smooth className={styles.link}>
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
