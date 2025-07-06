import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FootWrap>
      <FootTop>
        <FootInner>
          <FootNav1>
            <li>
              <a href="#">이용약관</a>
            </li>
            <li>
              <a href="#">개인정보처리방침</a>
            </li>
          </FootNav1>
          <FootNav2>
            <li>
              <a href="#">Facabook</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Youtube</a>
            </li>
          </FootNav2>
        </FootInner>
      </FootTop>
      <FootBottom>
        <FootLeft>
          <FootTitle>
            <strong>Copyright. My-Portfolio</strong>
          </FootTitle>
          <FootText>대표: 유지원 | 사업자등록번호: 123-45-67890</FootText>
          <FootText>주소: 경기도 수원시 영통구 영통동</FootText>
          <FootText>통신판매업신고번호: 제2025-서울강남-01234호</FootText>
          <FootText>Email: jjiwon0768@gmail.com</FootText>
          <FootText>Contact: 010-3312-0768</FootText>
        </FootLeft>
        <FootRight>
          <FootTitle>
            <strong>고객센터 📞 080-123-4567</strong>
          </FootTitle>
          <FootText>
            운영시간: 평일 10:00 - 17:00 (점심시간 12:00 - 13:00)
          </FootText>
          <FootText>주말/공휴일 휴무</FootText>
        </FootRight>
      </FootBottom>
    </FootWrap>
  );
};

export default Footer;

// Styled Components
const FootWrap = styled.div`
  width: 100%;
  background: #eee;
  margin-top: 7.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FootTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid var(--border-color1);
`;

const FootInner = styled.div`
  width: 75rem;
  display: flex;
  justify-content: space-between;
`;

const FootNav1 = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.875rem;
  padding: 1rem 0;
  li {
    color: var(--secondary-color);
    font-size: 0.875rem;
  }
  `;
  
  const FootNav2 = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.875rem;
  li {
    color: var(--secondary-color);
    font-size: 0.875rem;
  }
`;

const FootBottom = styled.div`
  width: 75rem;
  padding: 3rem 0;
  display: flex;
`;

const FootLeft = styled.div`
  flex: 1;
`;

const FootRight = styled.div`
  flex: 1;
`;

const FootTitle = styled.p`
  margin-bottom: 0.625rem;
  strong {
    font-weight: 500;
  }
`;

const FootText = styled.p`
  color: #777;
  font-size: 0.75rem;
  margin-bottom: 0.25rem;
`;

const StyledA = styled.a`
  font-size: 0.875rem;
  color: #777;
`;
