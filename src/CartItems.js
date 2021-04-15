import React from 'react'
import styled from "styled-components";
import CartItem from "./CartItem";


function CartItems({cartItems}) {
    return (
        <Container>
           <Title><h1>Shopping Cart</h1></Title>
           <hr/>

           <ItemsContainer>
           {
               cartItems.map((item)=>(
                <CartItem
                    id ={item.id}
                    item ={item.product}
                />
               ))
           }
              
           </ItemsContainer>
        </Container>
    )
}

export default CartItems


const Container=styled.div`
flex:0.8;
margin-right:18px;
background-color:white;
padding:20px;
background-color:white;
`

const Title =styled.h1`
margin-bottom:8px;

`
const ItemsContainer =styled.div`


`
// const CartItem =styled.div`



// `