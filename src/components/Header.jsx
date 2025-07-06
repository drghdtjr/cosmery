import React, { useState } from "react";
import styled from "styled-components";
import LNB from "./LNB.jsx";
import GNB from "./GNB.jsx";
import SearchContainer from "./search/SearchContainer.jsx";

const Header = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  return (
    <HeaderWrapper>
      <HeadTop>
        <GNB />
      </HeadTop>
      <HeadMid>
        <HeadMidLeft>
          <HamburgerButton
            type="button"
            onMouseOver={() => setIsCategoryOpen(true)}
            className={isCategoryOpen ? "active" : ""}
          >
            <HamburgerIcon>
              <span></span>
              <span></span>
              <span></span>
            </HamburgerIcon>
          </HamburgerButton>
          <Logo href="/">
            <img src="/logo.png" alt="포트폴리오" />
          </Logo>
        </HeadMidLeft>
        <HeadMidCenter>
          <SearchContainer />
        </HeadMidCenter>
        <HeadMidRight>
          <NavList>
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
          </NavList>
        </HeadMidRight>
      </HeadMid>
      <LNB
        isCategoryOpen={isCategoryOpen}
        setIsCategoryOpen={setIsCategoryOpen}
      />
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: var(--bg-color1);
  border-bottom: 1px solid var(--border-color1);
`;

const HeadTop = styled.div`
  max-width: 67.5rem;
  margin: 0 auto;
  padding-top: 0.625rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const HeadMid = styled.div`
  max-width: 67.5rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.625rem 0;
`;

const HeadMidLeft = styled.div`
  width: 18.75rem;
  display: flex;
`;

const HamburgerButton = styled.button`
  width: 3.375rem;
  height: 3.375rem;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const HamburgerIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.3125rem;
  span {
    width: 1.375rem;
    height: 0.125rem;
    background-color: var(--text-color);
    border-radius: 0.125rem;
  }
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.75rem;
  margin-right: auto;
  margin-top: 0.3125rem;
`;

const HeadMidCenter = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const HeadMidRight = styled.div`
  width: 9.375rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  li {
    width: 2.75rem;
    height: 2.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      color: var(--text-color);
    }
    img {
      width: 1.5rem;
      height: 1.5rem;
      object-fit: cover;
    }
  }
`;
