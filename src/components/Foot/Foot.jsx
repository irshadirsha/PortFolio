import React from 'react';
import { FiInstagram } from "react-icons/fi";
import Styles from "./Foot.module.css";

function Foot() {
  return (
    <footer className={Styles.foot}>
      <div className={Styles.infoSection}>
        <h6 className={Styles.title}>More Information</h6>
        <ul className={Styles.list}>
          <li className={Styles.insta}>
            <FiInstagram className={Styles.icon} />
            <a className={Styles.link} href='https://www.instagram.com/cm_madavur?igsh=b2Vnc242NjgzNHhx'>cm_madavur</a>
          </li>
        </ul>
      </div>
      <div className={Styles.footerText}>
        <p>2024 All Rights Reserved By <span className={Styles.highlight}>@sadikalikeDev</span></p>
        <p>Distributed by <span className={Styles.highlight}>Sadikalike7@gmail.com</span></p>
      </div>
    </footer>
  );
}

export default Foot;

// import React from 'react'
// import { FiInstagram } from "react-icons/fi";
// import Styles from "./Foot.module.css"


// function Foot() {
//   return (<footer className={Styles.foot}>
//       <div>
//             <h6 className={Styles.title}>
//                   more information
//             </h6>
//             <ul>
//                   <li className={Styles.insta}><FiInstagram />
//                   <a className={Styles.link} href='https://www.instagram.com/cm_madavur?igsh=b2Vnc242NjgzNHhx'>cm_madavur</a>

//                   </li>
//             </ul>
//       </div>
//       <div style={{ textAlign: 'center', color: 'gray', fontFamily: 'Arial, sans-serif' }}>
//         <p>2024 All Rights Reserved By <span style={{color:'#fff'}}>@sadikalikeDev</span></p>
//         <p>Distributed by <span style={{color:'#fff'}}>Sadikalike7@gmail.com</span></p>
// </div>

//   </footer>
   
//   )
// }

// export default Foot
