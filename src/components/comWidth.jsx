import styles from "../styles/ComponentWidth.module.css";

const ComponentWidth = ({ children }) => {
  return (
    <>
      <div className={styles.mainWidth}>
        <div className={styles.containerContent}>{children}</div>
      </div>
    </>
  );
};

export default ComponentWidth;
