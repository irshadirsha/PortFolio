import React from "react";

import styles from "./Hero.module.css";


export const Hero = () => {
  return (
    <section className={styles.container} >
      <div className={styles.content}>
        {/* <h1 className={styles.title}>Hi, I'm Ada</h1> */}
        <p className={styles.description}>
        "എൻറെ കലാമുകൾ ലോകത്തെമ്പാടും പ്രശസ്തമാകും"<br></br>
        
        قُطْبُ العَالَمْ سِي يَم وَلِيُّ اللّهِ المَدَوُورِي رَضِيَ اللهُ عَنْهُ
</p>
        {/* <a href="mailto:sadikalike7@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a> */}
      </div>
      
      <img
        src="./assets/cm.png"
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
