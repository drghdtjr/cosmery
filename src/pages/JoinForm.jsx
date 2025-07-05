import React, { useState } from "react";
import styles from "../components/join/Form.module.css";

const JoinForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "이름을 입력해주세요.";
    if (!form.email.includes("@"))
      newErrors.email = "유효한 이메일 주소를 입력해주세요.";
    if (form.password.length < 6)
      newErrors.password = "비밀번호는 6자 이상이어야 합니다.";
    if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = "비밀번호가 일치하지 않습니다.";
    if (!/^01[016789]-?[0-9]{3,4}-?[0-9]{4}$/.test(form.phone))
      newErrors.phone = "유효한 휴대폰 번호를 입력해주세요.";
    if (!form.agree) newErrors.agree = "약관 동의는 필수입니다.";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("회원가입 성공:", form);
      // 실제 가입 요청 로직
    }
  };

  return (
    <div className={styles.formWrapper}>
      <div className={styles.formInner}>
        <h2>회원가입</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <span>이름</span>
          <input
            type="text"
            name="name"
            placeholder="이름을 입력해주세요"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <p className={styles.error}>{errors.name}</p>}

          <span>이메일</span>
          <input
            type="email"
            name="email"
            placeholder="이메일을 입력해주세요"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <p className={styles.error}>{errors.email}</p>}

          <span>비밀번호</span>
          <input
            type="password"
            name="password"
            placeholder="비밀번호를 입력해주세요"
            value={form.password}
            onChange={handleChange}
          />
          {errors.password && <p className={styles.error}>{errors.password}</p>}

          <span>비밀번호 확인</span>
          <input
            type="password"
            name="confirmPassword"
            placeholder="비밀번호를 다시 입력해주세요"
            value={form.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <p className={styles.error}>{errors.confirmPassword}</p>
          )}

          <div className={styles.phoneBox}>
            <span>휴대폰 번호</span>
            <div className={styles.phoneInner}>
              <input
                type="tel"
                name="phone"
                placeholder="숫자만 입력해주세요"
                value={form.phone}
                onChange={handleChange}
              />
              <button className={styles.phoneBtn} type="button">전송</button>
            </div>
            {errors.phone && <p className={styles.error}>{errors.phone}</p>}
          </div>

          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
            />
            이용약관에 동의합니다
          </label>
          {errors.agree && <p className={styles.error}>{errors.agree}</p>}

          <button type="submit" className={styles.submitBtn}>
            가입하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinForm;
