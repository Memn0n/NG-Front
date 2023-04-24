import React, { useState } from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  height: 100%;
  ${mobile({
    width: '100%',
  })}
`;

const HamburgerIcon = styled.div`
  display: none;
  ${mobile({
    display: 'block',
    cursor: 'pointer',
    position: 'fixed',
    top: '10px',
    right: '10px',
    zIndex: '20',
  })}
`;

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  width: 250px;
  height: 100vh;
  background-color: #E3E6F3;
  transition: all 0.3s ease-in-out;
  z-index: 15;

  ${mobile({
    width: '60%',
  })}
`;

const SidebarMenu = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  list-style: none;
  padding: 0;
`;

const SidebarMenuItem = styled.li`
  margin: 10px 0;
  padding: 10px;
  font-size: 20px;
  color: #7fffd3;
  transition: 0.3s ease;
  text-shadow: -1px 1px 1px #000;

  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #00ffff;
    text-decoration: underline;
  }
`;

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <HamburgerIcon onClick={toggleSidebar}>
        <FaBars />
      </HamburgerIcon>
      <SidebarWrapper isOpen={isOpen}>
        <SidebarMenu>
          <SidebarMenuItem>Quote</SidebarMenuItem>
          <SidebarMenuItem>Products</SidebarMenuItem>
          <SidebarMenuItem>About</SidebarMenuItem>
          <SidebarMenuItem>Contact</SidebarMenuItem>
        </SidebarMenu>
      </SidebarWrapper>
    </Container>
  );
};

export default Sidebar;
