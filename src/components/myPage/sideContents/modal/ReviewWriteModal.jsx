import React, { useState } from "react";
import styles from "./modal.module.css";

const ReviewWriteModal = ({ onClose, onSave }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (!title.trim() || !content.trim()) {
      alert("제목과 본문을 모두 입력해주세요.");
      return;
    }
    onSave({ title, content });
    onClose();
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>리뷰 작성</h2>
        <input
          type="text"
          placeholder="제목을 입력하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={styles.input}
        />
        <textarea
          placeholder="리뷰 내용을 입력하세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className={styles.textarea}
        />
        <div className={styles.buttonGroup}>
          <button className={styles.submitButton} onClick={handleSubmit}>
            저장
          </button>
          <button className={styles.closeButton} onClick={onClose}>
            &times;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewWriteModal;
