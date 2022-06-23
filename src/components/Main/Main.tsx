import React from 'react';
import Content from './Content/Content';
import styles from './Main.module.scss';

const Main = () => (
    <div>
      <div className={styles.previewContainer}>
        <h1>Portfolio</h1>
        <p>Agency provides a full service range including technical skills, design, business understanding.</p>
      </div>
      <Content />
    </div>
  )

export default Main;