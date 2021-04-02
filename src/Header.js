import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from "react-router-dom"

function Header({ cartItems, user, signOut }) {

    const getCount = () => {
        let count = 0;
        //loop through all cart items
        cartItems.forEach((item) => {
            //add the quantity of the cart item to the total
            count += item.product.quantity;
        })

        return count;
    }

    return (
        <Container>
            <HeaderLogo>
                <Link to="/">
                    <img src={"https://i.imgur.com/7I9Was5.png"}/>
                </Link>
            </HeaderLogo>

            <HeaderOptionAddress>
                <LocationOnIcon />
                <HeaderOption>
                    <OptionLineOne>Hello, </OptionLineOne>
                    <OptionLinetwo>Select your address</OptionLinetwo>
                </HeaderOption>
            </HeaderOptionAddress>

            <HeaderSearch>
                <HeaderSearchInput type='text' />
                <HeaderSearchIconContainer>
                    <SearchIcon />
                </HeaderSearchIconContainer>
            </HeaderSearch>

            <HeaderNavItems>
                <HeaderOption onClick = {signOut}>
                    <OptionLineOne>Hello, {user.name}</OptionLineOne>
                    <OptionLinetwo>Accounts & Lists</OptionLinetwo>
                </HeaderOption>
                <HeaderOption>
                    <OptionLineOne>Returns</OptionLineOne>
                    <OptionLinetwo>& Orders</OptionLinetwo>
                </HeaderOption>
                <HeaderOptionCart>
                    <Link to="/cart">
                        <ShoppingBasketIcon />
                        <CartCount>{getCount()}</CartCount>
                    </Link>
                </HeaderOptionCart>
               </HeaderNavItems>
        </Container>
    )
}

export default Header

const Container = styled.div`
    height: 60px;
    background-color: #0F1111;
    display : flex;
    align-items: center;
    justify-content: space-between;
    color: white;
`

const HeaderLogo = styled.div`
    img {
        width: 100px;
        margin-left: 11px;
    }
`

const HeaderOptionAddress = styled.div `
    padding-left: 9px;
    display: flex;
    align-items: center;
`

const OptionLineOne = styled.div `

`

const OptionLinetwo = styled.div `
    font-weight: 700;
`

const HeaderSearch = styled.div`
    display: flex;
    flex-grow: 1;
    height: 40px;
    border-radius: 4px;
    overflow: hidden;
    margin-left: 5px;
    background-color: white;
    :focus-within {
        box-shadow: 0 0 0 3px #F90;
    }
`

const HeaderSearchInput = styled.input `
    flex-grow: 1;
    border: 0;

    :focus {
        border: none;
    }
`

const HeaderSearchIconContainer = styled.div `
    background-color: #febd69;
    width: 45px;    
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
`

const HeaderNavItems = styled.div `
    display: flex;
`

const HeaderOption = styled.div `
   padding: 10px 9px 10px 9px;   //TRouBLe - topm right bottom left
   cursor: pointer;
`

const HeaderOptionCart = styled.div `
    display: flex;
    a{
        display: flex;
        align-items: center;
        padding-right: 9px;
        color: white;
        text-decoration: none;
    }
`

const CartCount = styled.div `
    padding-left: 4px;
    font-weight: 700;
    color: #f08804;
`
