import React from "react";
import styled from "styled-components";

const GNB = () => {
  return (
    <GnbMenu>
      <li>
        <a href="/login">로그인</a>
      </li>
      <li>
        <a href="/join">회원가입</a>
      </li>
    </GnbMenu>
  );
};

export default GNB;

const GnbMenu = styled.ul`
  display: flex;

  li {
    border-right: 1px solid var(--secondary-color);

    &:last-child {
      border-right: none;
    }

    a {
      color: var(--secondary-color);
      font-size: 0.75rem;
      padding: 0 0.5rem;
      display: block;
    }
  }
`;
