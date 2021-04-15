import React from "react";
import styled from "styled-components";
import {db } from './firebase';

const CartItem =({ id, item }) =>{
// deleting items 
const deleteItem=(e)=>{
   e.preventDefault()

db.collection('cartItems').doc(id).delete();

}


// for selecting the values in quantity section 
  let options = [];

  for (let i = 1; i < Math.max(item.quantity + 1, 20); i++) {
    options.push(<option value={i}>Qty: {i}</option>);
  }

// onchange function 
const changeQuantity =(newQuantity)=>{
  db.collection('cartItems').doc(id).update({
      quantity:parseInt(newQuantity)
  })
}




  return (
    <Container>
      <ImageContainer>
        <img src={item.image} />
      </ImageContainer>
      <CardItemInfo>
        <CartItemInfoTop>
          <h2>{item.name}</h2>
        </CartItemInfoTop>
        <CartItemInfoBottom>
          <CardItemQuantityContainer>
            <select 
            value={item.quantity}
            onChange={(e)=>changeQuantity(e.target.value)}
            >
            {options}
            </select>
          </CardItemQuantityContainer>
          <CardItemDeleteContainer
          onClick={deleteItem}
          >
          Delete</CardItemDeleteContainer>
        </CartItemInfoBottom>
      </CardItemInfo>
      <CardItemPrice>${item.price}</CardItemPrice>
    </Container>
  );
}

export default CartItem;

const Container = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
  display: flex;
  border-bottom: 1px solid #ddd;
`;
const CardItemInfo = styled.div`
  flex-grow: 1;
`;
const CartItemInfoTop = styled.div`
  color: #007185;
  h2 {
    font-size: 18px;
  }
`;
const CartItemInfoBottom = styled.div`
  display: flex;
  margin-top: 4px;
  align-items: center;
`;
const CardItemQuantityContainer = styled.div`
  select {
    border-radius: 7px;
    background-color: #f0f2f2;
    padding: 8px;
    box-shadow: 0 2px 5px rgba(15, 17, 17, 0.15);
    :focus {
      outline: none;
    }
  }
`;
const CardItemDeleteContainer = styled.div`
  color: #007185;
  margin-left: 16px;
  cursor: pointer;
`;
const ImageContainer = styled.div`
  width: 180px;
  height: 180px;
  flex-shrink: 0;
  flex-grow: 0;
  margin-right: 16px;
  img {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }
`;

const CardItemPrice = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-left: 16px;
`;
