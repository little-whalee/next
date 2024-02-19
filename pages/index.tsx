// pages/index.js

import React, { useEffect, useRef, useState } from 'react';
import Card from './components/card';
import styles from './index.module.css';

const HomePage: React.FC = () => {
  const containerRef = useRef(null!);
  const leftRef = useRef(null!);
  const rightRef = useRef(null!);
  const [showIcon, setShowIcon] = useState<boolean>(true);
  const HOUR_PARAM = `36 Hour`;
  const COURSE_PARAM = `5 Course`;
  const FLIGHT_PARAM = `45% COMPLETED`;
  const CARD1_INFO_PARAM = `This course covers the most basic concepts in programming using Solidity as an example.`;
  const CARD3_INFO_PARAM = `Basic concepts in programming of Solidity. Topics include: variables, functions, flow control, error handling, data structure.`;

  useEffect(() => {
    const handleScroll = () => {
      const leftButton = leftRef.current;
      const rightButton = rightRef.current;
      const container = containerRef.current;
      // 一开始隐藏左滑动按钮
      if (leftButton) {
        setShowIcon(false);
      }
      // 检查是否已经滑动到最左边
      if (container.scrollLeft <= 0) {
        setShowIcon(false);
      } else {
        setShowIcon(true);
      }
      // 检查是否已经滑动到最右边
      if (
        container.scrollLeft + container.clientWidth + 4 >=
        container.scrollWidth
      ) {
        setShowIcon(false);
      } else {
        setShowIcon(true);
      }
    };

    const container = containerRef.current;
    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // 左滑动按钮控制
  const handleLeftButtonClick = () => {
    const container = containerRef.current;
    const slideWidth = container.offsetWidth;
    const currentScroll = container.scrollLeft;
    const newScroll = currentScroll - slideWidth;
    container.scrollTo({
      left: newScroll,
      behavior: 'smooth',
    });
  };
  // 右滑动按钮控制
  const handleRightButtonClick = () => {
    const container = containerRef.current;
    const slideWidth = containerRef.current.offsetWidth;
    const currentScroll = container.scrollLeft;
    const newScroll = currentScroll + slideWidth;
    container.scrollTo({
      left: newScroll,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.container} ref={containerRef}>
      <Card
        backgroundImg="/assets/first.png"
        bottomImg="/assets/background3.png"
      >
        <div className={styles.top_line} />
        <p className={styles.title}>Introduction to programming</p>
        <div className={styles.tags}>
          <div className={styles.tag}>Beginner</div>
        </div>
        <p className={styles.info}>{CARD1_INFO_PARAM}</p>
        <div
          className={styles.bottom}
          style={{ justifyContent: 'space-between' }}
        >
          <div className={styles.side_info}>
            <img src="/assets/clock.png" alt="first" />
            <p className={styles.tip}>{HOUR_PARAM}</p>
          </div>
          <div className={styles.side_info}>
            <img src="/assets/book.png" alt="first" />
            <p className={styles.tip}>{COURSE_PARAM}</p>
          </div>
          <div className={styles.special}>
            <img src="/assets/flight.png" alt="first" />
            <span className={styles.special_font}>{FLIGHT_PARAM}</span>
          </div>
        </div>
      </Card>
      <Card
        backgroundImg="/assets/second.png"
        bottomImg="/assets/background1.png"
        containerStyle={{ position: 'absolute', left: 450 }}
      >
        <p className={styles.title}>Moonshot 2023 Summer Hackathon</p>
        <div className={styles.tags}>
          <div className={styles.tag}>All Tracks</div>
          <div className={styles.tag}>Solidity</div>
          <div className={styles.tag}>ZK</div>
        </div>
        <div className={styles.row} style={{ width: 336 }}>
          <div className={styles.box}>
            <span className={styles.catalogue}>Signup</span>
            <span className={styles.date}>4/15-6/15</span>
          </div>
          <div className={styles.box}>
            <span className={styles.catalogue}>Event</span>
            <span className={styles.date}>6/15 - 7/15</span>
          </div>
          <div className={styles.box}>
            <span className={styles.catalogue}>Grant size</span>
            <span className={styles.date}>200K</span>
          </div>
        </div>
        {!showIcon && (
          <img
            src="/assets/left.png"
            alt="more"
            className={styles.left}
            ref={leftRef}
            onClick={() => handleLeftButtonClick()}
          />
        )}
      </Card>
      <Card
        backgroundImg="/assets/third.png"
        bottomImg="/assets/background2.png"
        containerStyle={{ position: 'absolute', left: 900 }}
      >
        <div
          className={styles.top_line}
          style={{
            backgroundImage:
              'linear-gradient(to bottom, rgba(217, 227, 19, 1), rgba(60, 188, 52, 1))',
          }}
        />
        <p className={styles.title}>Web 3.0 Programming Basics</p>
        <div className={styles.tags}>
          <div className={styles.tag}>Beginner</div>
        </div>
        <p className={styles.info}>{CARD3_INFO_PARAM}</p>
        <div className={styles.bottom}>
          <div className={styles.side_info} style={{ marginRight: 30 }}>
            <img src="/assets/clock.png" alt="first" />
            <p className={styles.tip}>{HOUR_PARAM}</p>
          </div>
          <div className={styles.side_info}>
            <img src="/assets/book.png" alt="first" />
            <p className={styles.tip}>{COURSE_PARAM}</p>
          </div>
        </div>
        {showIcon && (
          <img
            src="/assets/right.png"
            alt="more"
            className={styles.right}
            onClick={() => handleRightButtonClick()}
            ref={rightRef}
          />
        )}
      </Card>
      <Card
        backgroundImg="/assets/forth.png"
        bottomImg="/assets/background4.png"
        containerStyle={{ position: 'absolute', left: 1350 }}
      >
        <div
          className={styles.top_line}
          style={{
            backgroundImage:
              'linear-gradient(to bottom, rgba(224, 173, 56, 1), rgba(235, 62, 28, 1))',
          }}
        />
        <img src="/assets/forth2.png" alt="first" className={styles.image} />
        <p className={styles.last_title}>What is Bitcoin</p>
        <div className={styles.last_info}>
          <img src="/assets/clock.png" alt="first" />
          <p className={styles.tip}>36 Hour</p>
        </div>
      </Card>
    </div>
  );
};

export default HomePage;
