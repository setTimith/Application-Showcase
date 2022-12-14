import React from "react";

import Button from "./Button";
import styles from "../styles/Global";
import assets from "../assets";

const SectionWrapper = ({
  title,
  description,
  showBtn,
  mockUpImg,
  banner,
  reverse,
}) => {
  return (
    <div
      className={`min-h-screen ${styles.section} ${
        reverse ? styles.bgWhite : styles.bgPrimary
      } ${banner}`}
    >
      <div
        className={`flex items-center ${
          reverse ? styles.boxReverseClass : styles.boxClass
        } w-11/12 sm:w-full minmd:w-3/4`}
      >
        <div
          className={`${styles.descDiv} ${
            reverse ? "fadeRightMini" : "fadeLeftMini"
          }
          ${reverse ? styles.textRight : styles.textLeft}`}
        >
          <h1
            className={`${styles.h1Text} ${
              reverse ? styles.blackText : styles.whiteText
            }`}
          >
            {title}
          </h1>
          <p className={`${styles.descriptionText}`}>{description}</p>
          {showBtn && (
            <Button
              assetsUrl={assets.expo}
              link="https://expo.dev/@thomasabboud/nftPortfolioApp?serviceType=classic&distribution=expo-go"
            />
          )}
        </div>
        <div className={`flex-1 ${styles.flexCenter} p-8 sm:px-0`}>
          <img
            src={mockUpImg}
            alt="mockup"
            className={`
          ${reverse ? "fadeLeftMini" : "fadeRightMini"}
          ${styles.sectionImg}`}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper;
