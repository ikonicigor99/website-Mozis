import ComponentWidth from "./comWidth";
import styles from "../styles/Footer.module.css";
import FooterLinks from "./FooterLinks";
import LocationBar from "./LocationBar";

const Footer = () => {
  return (
    <div className={styles.mainFooter} id="footer">
      <ComponentWidth>
        <div className={styles.containerFooter}>
          <div className={styles.logoContainer}>
            <div className={styles.logo}>
              <h3>Mozis</h3>
            </div>
            <div className={styles.text}>
              Osnovano 1996.godine, kao malo, porodično preduzeće. Dugogodišnje
              iskustvo, predan rad i porodična tradicija satkani su u uspješnost
              i ime preduzeća.
            </div>
          </div>
          <div className={styles.linksContainer}>
            <div className={styles.links}>
              <FooterLinks />
            </div>
          </div>
          {/* <div className={styles.contactContainer}>
            <div className={styles.emailText}>
              Kontaktirajte nas putem mail-a.
            </div>
            <input className={styles.inputEmail} type="text" placeholder="" />
            
          </div> */}
          <LocationBar />
        </div>{" "}
      </ComponentWidth>
    </div>
  );
};

export default Footer;
