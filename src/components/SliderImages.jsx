import React, { useState } from "react";
import styles from "../styles/SliderImages.module.css";
import { images } from "../dammyData";
import { useEffect } from "react";
import ComponentWidth from "./comWidth";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderImages = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3500,
    pauseOnHover: false,
  };

  // useEffect(() => {
  //     const interval = setInterval(() => {
  //         if (stateImg < images.length - 1) {
  //             nextImg();
  //         } else if (stateImg === images.length) {
  //             prevImg();
  //         } else {
  //             setStateImg(0);
  //         }
  //     }, 6500);
  //     return () => clearInterval(interval);
  // }, [stateImg]);

  //// znaci [] dependecis se postavlja u slucaju kada zelimo da nam se use effect izvrsi samo jedanput, u ovom slucaju je nama potrebno da se izvrsava useEffect svake 4.5 sekunde ali smo postavili [] kako bi timer odradio svoje, a ne useEffect da se ponovo renderuje
  // const nextImg = () => {
  //   setStateImg((prev) => prev + 1);
  // };

  // const prevImg = () => {
  //   setStateImg((prev) => prev - 1);
  // };

  return (
    <div className={styles.mainSlider}>
      <div className={styles.containerImages}>
        <Slider {...settings}>
          {images.map((item, i) => {
            return (
              <div id={i}>
                <div className={styles.containerText}>
                  <div className={styles.cubeLogo}>
                    Pilana MOZIS Osnovano 1996.godine, kao malo, porodično
                    preduzeće. Dugogodišnje iskustvo, predan rad i porodična
                    tradicija satkani su u uspješnost i ime preduzeća.
                  </div>
                  <div className={styles.subtitle}></div>
                </div>

                <img src={item.img} alt="image alt" loading="lazy" />
              </div>
            );
          })}
        </Slider>
      </div>

      {/* <div className={styles.leftArray} onClick={() => prevImg()}><img src={leftArray} /></div>
            <div className={styles.rightArray} onClick={() => nextImg()}><img src={rightArray} /></div> */}
    </div>
  );
};

export default SliderImages;
