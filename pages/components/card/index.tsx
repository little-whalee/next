import React, { CSSProperties } from 'react';
import styles from './index.module.css';
interface CardProps {
  backgroundImg: string;
  bottomImg: string;
  children: React.ReactNode;
  containerStyle?: CSSProperties;
}
const CustomCard: React.FC<CardProps> = ({
  backgroundImg,
  bottomImg,
  children,
  containerStyle = {},
}) => {
  return (
    <div className={styles.main_container} style={containerStyle}>
      <img src={bottomImg} alt="bottom" className={styles.bottom_img} />
      <div className={styles.card_container}>
        <img src={backgroundImg} alt="first" className={styles.background} />
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default CustomCard;
