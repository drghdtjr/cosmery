import React from "react";
import styles from "../components/login/Login.module.css";

const Login = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <div className={styles.loginWrap}>
        <div className={styles.loginInner}>
          <div className={styles.loginTopBox}>
            <h2>로그인</h2>
            <button className={styles.kakaoLogin}>카카오로 로그인하기</button>
            <div className={styles.divider}>
              <span className={styles.line}></span>
              <span className={styles.dividerText}>또는</span>
              <span className={styles.line}></span>
            </div>
          </div>
          <div className={styles.loginBox}>
            <div className={styles.idBox}>
                <img src="/id_input.svg" alt="아이디입력" />
                <input type="text" placeholder="아이디" />
            </div>
            <div className={styles.pwdBox}>
                <img src="/pwd_input.svg" alt="아이디입력" />
                <input type="password" placeholder="비밀번호" />
            </div>
            <button className={styles.loginBtn}>로그인</button>
            <ul className={styles.find}>
              <li><a href="#">아이디 찾기</a></li>
              <li><a href="#">비밀번호 찾기</a></li>
            </ul>
          </div>
          <div className={styles.easyLoginBox}>
            <div className={styles.divider}>
              <span className={styles.line}></span>
              <span className={styles.dividerText}>간편 로그인</span>
              <span className={styles.line}></span>
            </div>
            <div className={styles.easyLogin}>
              <div><img src="/kakao.png" alt="카카오로그인" /></div>
              <div><img src="/google.png" alt="구글로그인" /></div>
              <div><img src="/naver.png" alt="네이버로그인" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
