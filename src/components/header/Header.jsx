import React, { useState } from "react";
import styles from "./Header.module.css";
import LNB from "../navigation/localNavi/LNB.jsx";
import GNB from "../navigation/globalNavi/GNB.jsx";
import SearchContainer from "./search/SearchContainer.jsx";

const Header = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`${styles.headTop} ${styles.container}`}>
        <GNB />
      </div>
      <div className={`${styles.headMid} ${styles.container}`}>
        <div className={styles.headMid1}>
          {/* 햄버거 버튼 - 로고 왼쪽 */}
          <button
            type="button"
            onMouseOver={() => setIsCategoryOpen(true)}
            className={`${styles.lnbAllMenu} ${
              isCategoryOpen ? styles.active : ""
            }`}
          >
            <div className={styles.hamburgerBtn}>
              <span></span>
              <span className={styles.mid}></span>
              <span></span>
            </div>
          </button>

          {/* 로고 */}
          <a className={styles.logo} href="/">
            <img src="../../src/assets/logo.png" alt="포트폴리오" />
          </a>
        </div>

        <div className={styles.headMid2}>
          {/* 검색창 */}
          <SearchContainer />
        </div>

        <div className={styles.headMid3}>
          {/* 상단 네비게이션 */}
          <ul className={styles.headNav}>
            <li>
              <a href="/order">
                <img src="../../src/assets/my-bag.svg" alt="bag" />
              </a>
            </li>
            <li>
              <a href="/my-page">
                <img src="../../src/assets/my-page.svg" alt="mypage" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* LNB 메뉴 */}
      <LNB
        isCategoryOpen={isCategoryOpen}
        setIsCategoryOpen={setIsCategoryOpen}
      />
    </header>
  );
};

export default Header;
