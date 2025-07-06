import React from 'react'
import styles from '../components/myPage/MyPage.module.css'
import SideMenu from '../components/myPage/sideMenu/SideMenu.jsx'
import SideContent1 from '../components/myPage/sidecontent/SideContent1.jsx'
import { useState } from 'react'
import SideContent2 from '../components/myPage/sidecontent/SideContent2.jsx'
import EditProfileForm from '../components/join/EditProfileForm.jsx'
import ShippingAddressManager from '../components/shippingAddress/ShippingAddressManager.jsx'
import { orderHistory, cancelReturnExchangeData, couponData, myReviewData, myInquiryData } from '../components/myPage/myPageData.js'

const MyPage = () => {
  const [selectedMenu, setSelectedMenu] = useState("주문/배송 조회");
  const [contentType, setContentType] = useState("1");
  return (
    <div className={styles.myPageWrapper}>
      <div className={styles.myPageInner}>
        <SideMenu
          onSelectMenu={setSelectedMenu}
          setContentType={setContentType}
          selectedMenu={selectedMenu}
        />
        {contentType === "1" && <SideContent1 title={selectedMenu} head1="주문일/주문번호" head2="상품정보" head3="배송진행상태" head4="총 결제금액" data={orderHistory} type={contentType} />}
        {contentType === "2" && <SideContent1 title={selectedMenu} head1="주문일/주문번호" head2="상품정보" head3="총 결제금액" head4="신청" data={cancelReturnExchangeData} type={contentType} />}
        {contentType === "3" && <SideContent1 title={selectedMenu} head1="주문일/주문번호" head2="유형" head3="사유" head4="상태" data={cancelReturnExchangeData} type={contentType} />}
        {contentType === "4" && <SideContent2 title={selectedMenu} couponCount="0" head1="쿠폰명" head2="할인내용/사용조건" head3="유효기간" head4="사용 가능 여부" data={couponData} />}
        {contentType === "5" && <SideContent1 title={selectedMenu} head1="주문일/주문번호" head2="상품정보" head3="배송진행상태" head4="작성여부" data={myReviewData} type={contentType} />}
        {contentType === "6" && <SideContent1 title={selectedMenu} head1="유형" head2="문의내용" head3="상태" head4="날짜" data={myInquiryData} type={contentType} />}
        {contentType === "7" && <EditProfileForm />}
        {contentType === "8" && <ShippingAddressManager />}
      </div>
    </div>
  );
}

export default MyPage