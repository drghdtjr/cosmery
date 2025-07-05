import React from "react";
import './lnb.css'

const LNB = ({
  isCategoryOpen,
  setIsCategoryOpen,
}) => {
  return (
    <div className="lnb_wrap">
      {/* 모든 메뉴 */}
      <div
        className={`lnb_category_wrap ${isCategoryOpen ? "active" : ""}`}
        onMouseLeave={() => setIsCategoryOpen(false)}
      >
        <ul className="lnb-main-menu container">
          <li>
            <a href="#">스킨케어</a>
            <ul className="lnb-sub-menu">
              <li>
                <a href="#">토너</a>
              </li>
              <li>
                <a href="#">에센스 / 앰플</a>
              </li>
              <li>
                <a href="#">세럼</a>
              </li>
              <li>
                <a href="#">로션 / 크림</a>
              </li>
              <li>
                <a href="#">아이크림</a>
              </li>
              <li>
                <a href="#">수분 / 진정 케어</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">메이크업</a>
            <ul className="lnb-sub-menu">
              <li>
                <a href="#">베이스</a>
              </li>
              <li>
                <a href="#">립</a>
              </li>
              <li>
                <a href="#">아이</a>
              </li>
              <li>
                <a href="#">치크 & 컨투어</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">클렌징</a>
            <ul className="lnb-sub-menu">
              <li>
                <a href="#">클렌징 오일</a>
              </li>
              <li>
                <a href="#">클렌징 폼 / 젤</a>
              </li>
              <li>
                <a href="#">클렌징 워터</a>
              </li>
              <li>
                <a href="#">립 & 아이 리무버</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">바디 케어</a>
            <ul className="lnb-sub-menu">
              <li>
                <a href="#">바디워시</a>
              </li>
              <li>
                <a href="#">바디로션 / 크림</a>
              </li>
              <li>
                <a href="#">바디스크럽</a>
              </li>
              <li>
                <a href="#">핸드크림</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">헤어 케어</a>
            <ul className="lnb-sub-menu">
              <li>
                <a href="#">샴푸</a>
              </li>
              <li>
                <a href="#">트리트먼트</a>
              </li>
              <li>
                <a href="#">헤어오일</a>
              </li>
              <li>
                <a href="#">두피케어</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">퍼퓸 & 디퓨져</a>
            <ul className="lnb-sub-menu">
              <li>
                <a href="#">향수</a>
              </li>
              <li>
                <a href="#">룸스프레이</a>
              </li>
              <li>
                <a href="#">디퓨저</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">뷰티 소품</a>
            <ul className="lnb-sub-menu">
              <li>
                <a href="#">메이크업 브러쉬</a>
              </li>
              <li>
                <a href="#">퍼프 / 스펀지</a>
              </li>
              <li>
                <a href="#">스킨케어 도구</a>
              </li>
              <li>
                <a href="#">거울 / 파우치</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LNB;
