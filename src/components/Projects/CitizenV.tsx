import React from "react";
import styles from "./Pacs.module.scss";
type Props = {};

const CitizenV = ({}: Props) => {
  return (
    <div className={styles.pacs}>
      <div className={styles.contentImage}>
        <img src="./images/portfolio/citizen.png" alt="" />
      </div>
      <div className={styles.contentProject}>
        <div className={styles.contentTitle}>
          <h3>CitizenV Manager</h3>
        </div>
        <div className={styles.text}>
          This is a resident management page in some localities. It has the
          function of population management, including accompanying registration
          information such as identification and position. Statistics on
          population density in each area. Statistics on birth and death
          rates...
        </div>
        <div className={styles.technical}>
          <div className={styles.title}>MY POSITION</div>
          <div className={styles.technicalContent}>
            <div className={styles.item}>Fullstack Developer</div>
          </div>
        </div>
        <div className={styles.technical}>
          <div className={styles.title}>TECHNOLOGIES USED</div>
          <div className={styles.technicalContent}>
            <div className={styles.item}>1.React JSX</div>
            <div className={styles.item}>2.React-Redux</div>

            <div className={styles.item}>3.Express Js</div>
            <div className={styles.item}>4.Google API</div>
            <div className={styles.item}>5.SCM: Github</div>
          </div>
        </div>
        <div className={styles.technical}>
          <div className={styles.title}>CUSTOMER</div>
          <div className={styles.technicalContent}>
            <div className={styles.item}>1.UET</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitizenV;
