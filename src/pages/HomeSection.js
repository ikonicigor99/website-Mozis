import React from "react";
import ComponentWidth from "../components/comWidth";
import styles from "../styles/HomeSection.module.css";
import SliderImages from "../components/SliderImages";
import Header from "../components/Header";

const HomeSection = () => {
    return (
        <>
            <div id="pocetna" className={styles.mainHome}>
                <ComponentWidth>
                    {/* <div className={`${styles.homeContent} `}>
                        <div className={styles.containerText} >
                            <div className={styles.title}>D O O MOZIS</div>
                            <div className={styles.text}>
                                Zelimo vam ugodnu dobrodoslicu na web stranicu firme drvne industrije
                                stare 28 godina
                            </div>
                        </div>
                        <div className={styles.cubeLogo}>
                            Pilana Mozis
                        </div>
                    </div> */}
                </ComponentWidth>
                <div className={styles.containerImage}>
                    <SliderImages />
                </div>
            </div>
        </>
    );
};

export default HomeSection;
