import React, { useState } from "react";
import "./form.css";

const EditProfileForm = () => {
  const [form, setForm] = useState({
    name: "홍길동",
    email: "jiwon1234@gmail.com",
    phone: "010-1234-1234",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.email.includes("@"))
      newErrors.email = "유효한 이메일 주소를 입력해주세요.";
    if (!/^01[016789]-?[0-9]{3,4}-?[0-9]{4}$/.test(form.phone))
      newErrors.phone = "유효한 휴대폰 번호를 입력해주세요.";
    if (form.newPassword && form.newPassword.length < 6)
      newErrors.newPassword = "새 비밀번호는 6자 이상이어야 합니다.";
    if (form.newPassword !== form.confirmPassword)
      newErrors.confirmPassword = "비밀번호가 일치하지 않습니다.";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("수정된 정보:", form);
      // 수정 API 호출
    }
  };

  return (
    <div style={{width: '800px'}}>
      <div className="formInner2">
        <h2>개인정보 수정</h2>
        <form onSubmit={handleSubmit} className="form">
          <span>이름</span>
          <input
            type="text"
            name="name"
            value={form.name}
            readOnly
            className="readonlyInput"
          />

          <span>이메일</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="이메일을 입력해주세요"
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <div className="phoneBox">
            <span>휴대폰 번호</span>
            <div className="phoneInner">
              <input
                type="tel"
                name="phone"
                placeholder="숫자만 입력해주세요"
                value={form.phone}
                onChange={handleChange}
              />
              <button className="phoneBtn" type="button">
                변경
              </button>
            </div>
            {errors.phone && <p className="error">{errors.phone}</p>}
          </div>

          <span>현재 비밀번호</span>
          <input
            type="password"
            name="currentPassword"
            value={form.currentPassword}
            onChange={handleChange}
            placeholder="현재 비밀번호를 입력해주세요"
          />

          <span>새 비밀번호 (선택)</span>
          <input
            type="password"
            name="newPassword"
            value={form.newPassword}
            onChange={handleChange}
            placeholder="새 비밀번호를 입력해주세요"
          />
          {errors.newPassword && (
            <p className="error">{errors.newPassword}</p>
          )}

          <span>새 비밀번호 확인</span>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="새 비밀번호를 다시 입력해주세요"
          />
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}

          <button type="submit">
            수정하기
          </button>
          <button className="deleteBtn">
            회원 탈퇴하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfileForm;
