import React from 'react'
import './orderProduct.css'

const OrderProduct = ({ name, option, quantity, salePrice }) => {
  return (
    <div className="orderProductWrapper">
        <div className="orderProductLeft">
            <img src="/placeholder-image.webp" alt="예시이미지" className="orderProductImg" />
            <div className="orderProductInfo">
                <span className="orderProductTitle">{name}</span>
                <span className="orderProductOption">{option}</span>
            </div>
        </div>
        <div className="orderProductRight">
            <span className="rightQuantity">{quantity}개</span>
            <span className="rightSalePrice">{salePrice}원</span>
        </div>
    </div>
  )
}

export default OrderProduct