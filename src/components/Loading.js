import React from 'react';
import styles from "../css/Loading.module.css"
const Loading = () => {
    return (
        <div className={styles.asl}>
      <div className={styles.simple_spinner}>
       <span></span>
     </div>
        </div>
    );
};

export default Loading;