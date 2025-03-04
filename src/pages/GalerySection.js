import React, { useState } from "react";
import styles from "../styles/GalerySection.module.css";
import { Galery } from "../dammyData";
import ComponentWidth from "../components/comWidth";
import PopupGalerija from "../components/PopupGalery";
import TitleComponent from "../components/Title";
// import { useStateValue } from "../context/stateContext";

const GalerijaSection = () => {
    // const { handlePopup } = useStateValue();

    return (
        <div id="galerija" className={styles.mainGalerija}>
            <ComponentWidth>
                <TitleComponent subtitle="Galerija" />

                <div className={styles.containerImages}>
                    {Galery.map((item, id) => (
                        <div className={styles.image}>
                            <img src={item.img} /*onClick={() => handlePopup()} */ />
                        </div>
                    ))}
                </div>
                {/* <div className={styles.holderPopup}>
                {popUp === "true"(
                    <div>haha</div>
                )}

            </div> */}
            </ComponentWidth>
        </div>
    );
};

export default GalerijaSection;
