// ShippingAddressForm.jsx
import React, { useState } from "react";
import styles from "./ShippingAddressForm.module.css";

const ShippingAddressForm = ({ onSave }) => {
  const [form, setForm] = useState({
    name: "",
    phone1: "",
    phone2: "",
    phone3: "",
    address: "",
    detailAddress: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSave = () => {
    const fullPhone = `${form.phone1}-${form.phone2}-${form.phone3}`;
    const newAddress = {
      name: form.name,
      phone: fullPhone,
      address: form.address,
      detailAddress: form.detailAddress,
    };
    onSave(newAddress);
  };

  return (
    <div className={styles.shippingAddressForm}>
      <div className={styles.formGroup}>
        <label>이름</label>
        <input
          type="text"
          name="name"
          className={styles.input}
          value={form.name}
          onChange={handleChange}
        />
      </div>

      <div className={styles.formGroup}>
        <label>연락처</label>
        <div className={styles.phoneGroup}>
          <input
            type="text"
            name="phone1"
            maxLength={3}
            className={styles.inputShort}
            value={form.phone1}
            onChange={handleChange}
          />
          <span className={styles.hyphen}>-</span>
          <input
            type="text"
            name="phone2"
            maxLength={4}
            className={styles.inputShort}
            value={form.phone2}
            onChange={handleChange}
          />
          <span className={styles.hyphen}>-</span>
          <input
            type="text"
            name="phone3"
            maxLength={4}
            className={styles.inputShort}
            value={form.phone3}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className={styles.formGroup}>
        <label>주소</label>
        <div className={styles.addressRow}>
          <input
            type="text"
            name="address"
            className={styles.input2}
            value={form.address}
            onChange={handleChange}
          />
          <button type="button" className={styles.searchButton}>
            검색
          </button>
        </div>
      </div>

      <div className={styles.formGroup}>
        <label>상세주소</label>
        <input
          type="text"
          name="detailAddress"
          className={styles.input}
          value={form.detailAddress}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default ShippingAddressForm;
