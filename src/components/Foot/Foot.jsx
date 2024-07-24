import React from 'react'
import { FiInstagram } from "react-icons/fi";
import Styles from "./Foot.module.css"


function Foot() {
  return (<footer className={Styles.foot}>
      <div>
            <h6 className={Styles.title}>
                  more information
            </h6>
            <ul>
                  <li className={Styles.insta}><FiInstagram />
                  <a className={Styles.link} href='https://www.instagram.com/cm_madavur?igsh=b2Vnc242NjgzNHhx'>cm_madavur</a>

                  </li>
            </ul>
      </div>
  </footer>
   
  )
}

export default Foot
