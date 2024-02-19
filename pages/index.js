// pages/index.js

import React from 'react';
import styles from './index.module.css';

const HomePage = () => {
  if (typeof document !== 'undefined') {
    // 获取左右按钮元素
    const leftButton = document.querySelector(`.${styles.left}`);
    const rightButton = document.querySelector(`.${styles.right}`);

    // 获取容器元素
    const container = document.querySelector(`.${styles.container}`);

    // 一开始隐藏左滑动按钮
    leftButton.style.display = 'none';

    // 监听滚动事件，根据滚动位置动态显示/隐藏按钮
    container.addEventListener('scroll', () => {
      // 检查是否已经滑动到最左边
      if (container.scrollLeft <= 0) {
        leftButton.style.display = 'none';
      } else {
        leftButton.style.display = 'block';
      }

      // 检查是否已经滑动到最右边
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth
      ) {
        rightButton.style.display = 'none';
      } else {
        rightButton.style.display = 'block';
      }
    });

    // 监听左按钮点击事件
    leftButton.addEventListener('click', () => {
      // 计算滑动的距离，这里假设每次滑动一个 slide 的宽度
      const slideWidth = container.offsetWidth;
      const currentScroll = container.scrollLeft;
      const newScroll = currentScroll - slideWidth;

      // 实现滑动效果
      container.scrollTo({
        left: newScroll,
        behavior: 'smooth',
      });
    });

    // 监听右按钮点击事件
    rightButton.addEventListener('click', () => {
      // 计算滑动的距离，这里假设每次滑动一个 slide 的宽度
      const slideWidth = container.offsetWidth;
      const currentScroll = container.scrollLeft;
      const newScroll = currentScroll + slideWidth;

      // 实现滑动效果
      container.scrollTo({
        left: newScroll,
        behavior: 'smooth',
      });
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.main_container1}>
        <img
          src="/assets/background3.png"
          alt="second"
          className={styles.bottom_img1}
        />
        <div className={styles.card_container1}>
          <img
            src="/assets/first.png"
            alt="first"
            className={styles.background}
          />
          <div className={styles.content1}>
            <div className={styles.top_line} />
            <p className={styles.title}>Introduction to programming</p>
            <div className={styles.tags}>
              <div className={styles.tag}>Beginner</div>
            </div>
            <p className={styles.info}>
              This course covers the most basic concepts in programming using
              Solidity as an example.
            </p>
            <div className={styles.bottom}>
              <div className={styles.side_info}>
                <img src="/assets/clock.png" alt="first" />
                <p className={styles.tip}>36 Hour</p>
              </div>
              <div className={styles.side_info}>
                <img src="/assets/book.png" alt="first" />
                <p className={styles.tip}>5 Course</p>
              </div>
              <div className={styles.special}>
                <img src="/assets/flight.png" alt="first" />
                <span className={styles.special_font}>45% COMPLETED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.main_container2}>
        <img
          src="/assets/background1.png"
          alt="second"
          className={styles.bottom_img2}
        />
        <div className={styles.card_container2}>
          <img
            src="/assets/second.png"
            alt="second"
            className={styles.background}
          />

          <div className={styles.content2}>
            <p className={styles.title}>Moonshot 2023 Summer Hackathon</p>
            <div className={styles.tags}>
              <div className={styles.tag}>All Tracks</div>
              <div className={styles.tag}>Solidity</div>
              <div className={styles.tag}>ZK</div>
            </div>
            <div className={styles.row}>
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
            <img src="/assets/left.png" alt="more" className={styles.left} />
          </div>
        </div>
      </div>
      <div className={styles.main_container3}>
        <img
          src="/assets/background2.png"
          alt="second"
          className={styles.bottom_img3}
        />

        <div className={styles.card_container3}>
          <img
            src="/assets/third.png"
            alt="first"
            className={styles.background}
          />
          <div className={styles.content3}>
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
            <p className={styles.info}>
              Basic concepts in programming of Solidity. Topics include:
              variables, functions, flow control, error handling, data
              structure.
            </p>
            <div className={styles.bottom}>
              <div className={styles.side_info} style={{ marginRight: 30 }}>
                <img src="/assets/clock.png" alt="first" />
                <p className={styles.tip}>36 Hour</p>
              </div>
              <div className={styles.side_info}>
                <img src="/assets/book.png" alt="first" />
                <p className={styles.tip}>5 Course</p>
              </div>
            </div>
            <img src="/assets/right.png" alt="more" className={styles.right} />
          </div>
        </div>
      </div>
      <div className={styles.main_container4}>
        <img
          src="/assets/background4.png"
          alt="second"
          className={styles.bottom_img4}
        />
        <div className={styles.card_container4}>
          <img
            src="/assets/forth.png"
            alt="first"
            className={styles.background}
          />
          <div className={styles.content4}>
            <div
              className={styles.top_line}
              style={{
                backgroundImage:
                  'linear-gradient(to bottom, rgba(224, 173, 56, 1), rgba(235, 62, 28, 1))',
              }}
            />
            <img
              src="/assets/forth2.png"
              alt="first"
              className={styles.image}
            />
            <p className={styles.last_title}>What is Bitcoin</p>
            <div className={styles.last_info}>
              <img src="/assets/clock.png" alt="first" />
              <p className={styles.tip}>36 Hour</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
