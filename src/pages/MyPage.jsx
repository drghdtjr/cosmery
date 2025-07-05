import React from 'react'
import styles from '../components/myPage/MyPage.module.css'
import SideMenu from '../components/myPage/sideMenu/SideMenu'
import SideContent1 from '../components/myPage/sideContents/sidecontent1/SideContent1'
import { useState } from 'react'
import SideContent2 from '../components/myPage/sideContents/sidecontent2/SideContent2'
import SideContent3 from '../components/myPage/sideContents/sidecontent3/SideContent3'
import EditProfileForm from '../components/join/EditProfileForm'
import ShippingAddressManager from '../components/shippingAddress/shippingAddrManager/ShippingAddressManager'

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
        {contentType === "1" && <SideContent1 title={selectedMenu} head1="주문일/주문번호" head2="상품정보" head3="배송진행상태" head4="총 결제금액" />}
        {contentType === "2" && <SideContent2 title={selectedMenu} couponCount="0" head1="쿠폰명" head2="할인내용/사용조건" head3="유효기간" head4="사용 가능 여부" />}
        {contentType === "3" && <SideContent3 title={selectedMenu} head1="주문일/주문번호" head2="상품정보" head3="배송진행상태" head4="작성여부" />}
        {contentType === "4" && <SideContent3 title={selectedMenu} head1="유형" head2="문의내용" head3="작성일" head4="상태" />}
        {contentType === "5" && <EditProfileForm />}
        {contentType === "6" && <ShippingAddressManager />}
      </div>
    </div>
  );
}

export default MyPage