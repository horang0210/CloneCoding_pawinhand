import React from "react";
import { Link } from "react-router-dom";
import styles from "./Menu.module.scss";
import Layout from "../components/layout";

const Menu = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.menuBtn}>
          <ul>
              <Link to="https://pawinhand.kr/service/about.html" target="_blank" rel="noopener noreferrer" className={styles.menuBtn}>
                포인핸드 소개
              </Link>
              <br />
              <Link to="https://pawinhand.kr/service/activities.html" target="_blank" rel="noopener noreferrer" className={styles.menuBtn}>
                포인핸드 활동
              </Link>
              <br />
              <Link to="https://smartstore.naver.com/pawinhand" target="_blank" rel="noopener noreferrer" className={styles.menuBtn}>
                포인핸드 스토어
              </Link>
              <br />
              <Link to="https://pawinhand.kr/service/statistics.html" target="_blank" rel="noopener noreferrer" className={styles.menuBtn}>
                유기동물 통계
              </Link>
              <br />
              <Link to="https://pawinhand.kr/service/review.html" target="_blank" rel="noopener noreferrer" className={styles.menuBtn}>
                입양후기
              </Link>
              <br />
              <Link to="https://pawinhand.kr/service/sponsorship.html" target="_blank" rel="noopener noreferrer" className={styles.menuBtn}>
                포인핸드 후원
              </Link>
              <br />
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Menu;
