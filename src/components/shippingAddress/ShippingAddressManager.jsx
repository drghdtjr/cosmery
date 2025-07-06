import React, { useState } from "react";
import styles from "./ShippingAddressManager.module.css";
import Modal from "./Modal"; // Modal 컴포넌트는 따로 구성돼 있어야 합니다
import ManagerForm from "./ManagerForm";

const dummyAddresses = [
  {
    id: 1,
    name: "홍길동",
    phone: "010-1234-5678",
    address: "서울시 강남구 테헤란로",
  },
  { id: 2, name: "김민지", phone: "010-2345-6789", address: "부산시 해운대구" },
];

const ShippingAddressManager = () => {
  const [addresses, setAddresses] = useState(dummyAddresses);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = (id) => {
    setAddresses((prev) => prev.filter((addr) => addr.id !== id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>배송지 관리</h2>
        <button
          className={styles.addButton}
          onClick={() => setIsModalOpen(true)}
        >
          신규 등록
        </button>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>이름</th>
            <th>연락처</th>
            <th>주소</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {addresses.map((addr) => (
            <tr key={addr.id}>
              <td>{addr.name}</td>
              <td>{addr.phone}</td>
              <td>{addr.address}</td>
              <td>
                <button
                  onClick={() => handleDelete(addr.id)}
                  className={styles.deleteBtn}
                >
                  삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <ManagerForm onSave={(newAddress) => {
            setAddresses((prev) => [...prev, newAddress]);
            setIsModalOpen(false);
          }} />
        </Modal>
      )}
    </div>
  );
};

export default ShippingAddressManager;
