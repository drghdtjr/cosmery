import React from "react";
import styles from "./productDetail.module.css";
const TabDetailInfo = () => {
  const info = [
    { label: "제품명", value: "더미 히알루론산 수분 크림" },
    { label: "용량", value: "50ml" },
    { label: "제품 주요 사양", value: "모든 피부용 / 민감성 피부 사용 가능" },
    {
      label: "사용 기한 또는 개봉 후 사용 기간",
      value: "제조일로부터 36개월 / 개봉 후 12개월",
    },
    { label: "제조일자", value: "2025년 3월 이후 제조 제품부터 순차 출고" },
    { label: "주요 성분", value: "히알루론산, 세라마이드, 병풀추출물, 판테놀" },
    {
      label: "전체 전성분",
      value:
        "정제수, 글리세린, 다이프로필렌글라이콜, 1,2-헥산다이올, 세라마이드엔피, 병풀추출물, 판테놀, 나이아신아마이드, 마데카소사이드, 알란토인 등",
    },
    { label: "기능성 여부", value: "미백 · 주름개선 2중 기능성 화장품" },
    { label: "제조업자", value: "(주)지원코스" },
    { label: "책임판매업자", value: "(주)지원뷰티" },
    { label: "제조국", value: "대한민국 (Made in Korea)" },
    {
      label: "품질보증 기준",
      value:
        "본 제품에 이상이 있을 경우 '소비자분쟁해결 기준'에 따라 보상받을 수 있습니다.",
    },
    {
      label: "소비자 상담실",
      value: "1234-5678 (평일 10:00~17:00) / support@jiwonbeauty.com",
    },
  ];

  return (
    <div className={styles.tabDetailInfoWrapper}>
      <h2 style={{ fontSize: "28px", fontWeight: "400" }}>상품 정보</h2>
      <table className={styles.tabDetailInfoTable}>
        <tbody>
          {info.map((row, index) => (
            <tr key={index} className={styles.tabDetailInfoRow}>
              <th className={styles.tabDetailInfoLabel}>{row.label}</th>
              <td className={styles.tabDetailInfoValue}>{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabDetailInfo;
