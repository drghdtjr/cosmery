import React, { useState, useEffect } from "react";
import LNB from "./LNB.jsx";
import GNB from "./GNB.jsx";
import SearchContainer from "./search/SearchContainer.jsx";
import "./header.css";

const Header = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSearchClick = () => {
    if (isMobile) {
      setIsSearchOpen(true);
    }
  };

  const handleSearchClose = () => {
    setIsSearchOpen(false);
  };

  return (
    <header className="header-wrapper">
      <div className="head-top">
        <GNB />
      </div>
      <div className="head-mid">
        <div className="head-mid-left">
          <button
            type="button"
            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            className={`hamburger-button ${isCategoryOpen ? "active" : ""}`}
          >
            <div className="hamburger-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
          <a href="/" className="logo">
            <img src="/logo.png" alt="포트폴리오" />
          </a>
        </div>
        <div className="head-mid-right">
          {!isMobile && <SearchContainer />}
          <ul className="nav-list">
            {isMobile && (
              <li>
                <img 
                  src="/search.svg" 
                  alt="search" 
                  onClick={handleSearchClick}
                  style={{ cursor: 'pointer' }}
                />
              </li>
            )}
            <li>
              <a href="/order">
                <img src="/my-bag.svg" alt="bag" />
              </a>
            </li>
            <li>
              <a href="/my-page">
                <img src="/my-page.svg" alt="mypage" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {isMobile && isSearchOpen && (
        <div className="mobile-search-overlay">
          <div className="mobile-search-container">
            <button className="mobile-search-close" onClick={handleSearchClose}>
              &larr;
            </button>
            <SearchContainer />
          </div>
        </div>
      )}
      <LNB
        isCategoryOpen={isCategoryOpen}
        setIsCategoryOpen={setIsCategoryOpen}
      />
    </header>
  );
};

export default Header;
