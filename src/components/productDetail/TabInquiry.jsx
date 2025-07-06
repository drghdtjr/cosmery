import React from "react";
import styles from "./productDetail.module.css";

const TabInquiry = () => {
  return (
    <div className={styles.tabInquiryWrapper}>
      <h2 className={styles.tabInquiryTitle}>
        무엇을 도와드릴까요?
      </h2>
      <div className={styles.tabInquiryContent}>
        <div>
          <a href="">
            <img src="/faq_img.png" alt="faq" />
          </a>
        </div>
        <div>
          <a href="">
            <img src="/chat_img.png" alt="chat" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TabInquiry;
