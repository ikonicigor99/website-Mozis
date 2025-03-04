import ComponentWidth from "./comWidth";
import styles from "../styles/LocationBar.module.css";
import phoneIcon from "../images/phone.png";
import mailIcon from "../images/mail.png";
import locationIcon from "../images/location.png";

const LocationBar = () => {
  return (
    <div className={styles.containerBar}>
      <ComponentWidth>
        <div className={styles.locationCards}>
          <div className={styles.phoneContainer}>
            <div className={styles.icon}>
              <img src={phoneIcon} alt="phone icon" />
            </div>
            <div className={styles.text}>+381 65 841 434</div>
          </div>
          <div className={styles.emailContainer}>
            <div className={styles.icon}>
              <img src={mailIcon} alt="mail icon" />
            </div>{" "}
            <div className={styles.text}>ikoniczoran@hotmail.rs</div>
          </div>
          <div className={styles.addressContainer}>
            <div className={styles.icon}>
              <img src={locationIcon} alt="address icon" />
            </div>
            <div className={styles.text}>Ulice bb, Zvornik 75400, BIH</div>
          </div>
        </div>{" "}
      </ComponentWidth>
    </div>
  );
};
export default LocationBar;
