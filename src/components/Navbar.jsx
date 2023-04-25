import React, { useState } from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';
import { FaAlignRight, FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Container = styled.div`
    cursor: transparent;
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Left = styled.div``;
const Logo = styled.img`
    height: 120px;
    width: 150px;
    background-size: cover;
    margin-top: -20px;
    margin-left: 10px;
`
const Right = styled.div`
    display: flex;
    align-items: center;

    ${mobile({
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        position: "fixed",
        top: "0",
        right: ({ isOpen }) => (isOpen ? "0" : "-160px"),
        height: "100vh",
        width: "150px",
        background: " linear-gradient(to top, black, black, gray 50%, lightgray 75%)",
        boxShadow: "0 40px 60px rgba(0, 0, 0, 0.01)",
        padding: "80px 0 0 10px",
        transition: "0.4s",
        zIndex: "999"
    })};
`;

const MenuItem = styled.a`
    margin-right: 15px;
    margin-top: -10px;
    font-size: 20px;
    font-weight: 500;
    transition: 0.3s ease;
    color: #000;
    cursor: pointer;
  
    &:hover{
      color: orange;
      text-shadow: -1px 1px 1px #000;
    }

    ${mobile({
      margin: '10px'
  })}

`;
const Bar = styled.div`
    display: none;
    align-items: center;
    cursor: pointer;
    margin-right: 10px;
    transition: 0.3s ease;

    &:hover {
        color: orange;
      }

    ${mobile({
        display: "flex",
        alignItems: "center"
    })}
`;
const Close = styled.div`
    display: none;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
        color: orange;
      }

    ${mobile({
        display: "initial",
        position: "absolute",
        top: "30px",
        left: "30px",
        color: "#222",
        fontSize: "24px",
    })}
`;
const Hr = styled.hr`

    margin-top: -24px;
    box-shadow:-2px 2px 5px #333;
`;


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
        <Wrapper>
            <Left>
              <Logo src="https://i.ibb.co/FXWnfGk/My-project-2.png"/>
            </Left>
            <Right isOpen={isOpen}>
                <Link to="/"><MenuItem>HOME</MenuItem></Link>
                <Link to="/about"><MenuItem>ABOUT</MenuItem></Link>
                <Link to="/contact"><MenuItem>CONTACT</MenuItem></Link>
                <Close onClick={toggleMenu}><FaAngleRight size="1.5em"/></Close>
            </Right>
            <Bar onClick={toggleMenu}><FaAlignRight size="1.5em"/></Bar>
        </Wrapper>
        <Hr/>
    </Container>
  )
}

export default Navbar
