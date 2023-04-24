import React from 'react'
import { FaFacebookSquare, FaInstagram, FaTree } from 'react-icons/fa';
import styled from 'styled-components'
import { mobile, tab } from '../responsive';

const Container = styled.div`
    background-color: lightgray;
    margin: 0;
`;
const FooterContent = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Left = styled.div``;
const Logo = styled.img`
    width: 250px;
    height: 200px;

    ${tab({
        width: '200px',
        height: '150px'
    })}
    ${mobile({
        display: 'none',
    })}
`;

const Middle = styled.div``;
const MidTitle = styled.h1`
    font-size: 22px;
    font-weight: 500;
    text-shadow: -1px 1px 2px #333; 
`;
const MidItems = styled.p`
    font-size: 18px;
    font-weight: 400;

    ${mobile({
        fontSize: '14px'
    })};
`;


const Right = styled.div`
    margin-right: 20px;
`;
const RightTitle = styled.h1`
    font-size: 22px;
    font-weight: 500;
    text-shadow: -1px 1px 2px #333; 
`;
const RightItems = styled.p`
    font-size: 18px;
    font-weight: 400;

    ${mobile({
        fontSize: '14px'
    })};
`;
const Socials = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px;
`;


const LastText = styled.p`
    font-size: 14px;
    text-align: center;
    margin: 0;
`;
const Zink = styled.a``;

const Footer = () => {
  return (
    <Container>
        <FooterContent>
        <Left>
            <Logo src='https://i.ibb.co/FXWnfGk/My-project-2.png'/>
        </Left>

        <Middle>
            <MidTitle>Trades</MidTitle>
            <MidItems>CCTV</MidItems>
            <MidItems>Electronics</MidItems>
            <MidItems>Lights</MidItems>
        </Middle>

        <Right>
            <RightTitle>Contact</RightTitle>
            <RightItems> +27 81 430 7404</RightItems>
            <RightItems> nyakameragroup@gmail.com</RightItems>
            <Socials>
            <Zink href="https://www.facebook.com/profile.php?id=100091676980838" target='_blank'><FaFacebookSquare size="1.5em" color='blue' cursor="pointer"/></Zink>
            <Zink href="https://instagram.com/ng_electronics_installations?igshid=MGNiNDI5ZTU=" target='_blank'><FaInstagram size="1.5em" color='purple' cursor="pointer"/></Zink>
            <Zink href='https://www.gumtree.co.za/u-seller-listings/ng-electronics-and-installations/v1u131154347p1' target='_blank'><FaTree size="1.5em" color='green' cursor="pointer"/></Zink>
            </Socials>
        </Right>
        </FooterContent>

        <LastText>all rights reserved</LastText>
    </Container>
  )
}

export default Footer