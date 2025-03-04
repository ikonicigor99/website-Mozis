import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import styles from "../styles/Map.module.css";
import FooterLinks from "./FooterLinks";
import LocationBar from "./LocationBar";
import phoneIcon from "../images/phone.png";
import mailIcon from "../images/mail.png";
import locationIcon from "../images/location.png";
import TitleComponent from "./Title";
import ComponentWidth from "./comWidth";

const MapContainer = ({ apiKey }) => {
  const mapStyle = {
    width: "100%",
    height: "510px",
  };

  const defaultCentar = {
    lat: 44.4247198204555,
    lng: 19.116342557432624,
  };

  // const markerStyle = {
  //   url: "https://your-icon-url.com", // Custom image URL for the marker
  //   size: new window.google.maps.Size(40, 40), // Size of the icon
  //   origin: new window.google.maps.Point(0, 0), // Origin of the icon image
  //   anchor: new window.google.maps.Point(20, 40), // Position of the marker relative to the image
  // };

  return (
    <>
      <div id="map" className={styles.mainMap}>
        <ComponentWidth>
          <TitleComponent subtitle="Kontaktirajte nas" />
          <div className={styles.main}>
            <div className={styles.map}>
              <LoadScript googleMapsApiKey={apiKey}>
                <GoogleMap
                  mapContainerStyle={mapStyle}
                  zoom={10}
                  center={defaultCentar}
                >
                  <Marker position={defaultCentar} />
                </GoogleMap>
              </LoadScript>
            </div>
            <div className={styles.containerInfo}>
              {/* <div className={styles.logoContainer}>
            <div className={styles.logo}>
              <h3>Mozis</h3>
            </div>
            <div className={styles.text}>
              
            </div>
          </div> */}
              {/* <div className={styles.linksContainer}>
          <div className={styles.links}>
            <FooterLinks />
          </div>
        </div> */}
              {/* <div className={styles.contactContainer}>
      <div className={styles.emailText}>
        Kontaktirajte nas putem mail-a.
      </div>
      <input className={styles.inputEmail} type="text" placeholder="" />
      
    </div> */}
              {/* <LocationBar /> */}
              <div className={styles.locationCards}>
                <div className={styles.phoneContainer}>
                  <div className={styles.icon}>
                    <img src={phoneIcon} alt="phone icon" />
                  </div>
                  <div>TELEFON:</div>
                  <div>hjah</div>
                  <div className={styles.text}>+381 65 841 434</div>
                </div>
                <div className={styles.emailContainer}>
                  <div className={styles.icon}>
                    <img src={mailIcon} alt="mail icon" />
                  </div>{" "}
                  <div>EMAIL:</div>
                  <div className={styles.text}>ikoniczoran@hotmail.rs</div>
                </div>
                <div className={styles.addressContainer}>
                  <div className={styles.icon}>
                    <img src={locationIcon} alt="address icon" />
                  </div>
                  <div>ADRESA:</div>
                  <div className={styles.text}>
                    Ulice bb, Zvornik 75400, BIH
                  </div>
                </div>
              </div>{" "}
            </div>{" "}
          </div>
        </ComponentWidth>
      </div>
    </>
  );
};

export default MapContainer;
