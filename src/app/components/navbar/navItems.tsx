import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from 'react-burger-menu';
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive";
import menuStyles from "./menuStyles";

const ListContainer = styled.ul`
  ${tw`
    flex
    list-none
  `};
`;

const NavItem = styled.li<{ menu?: boolean}>` //optional prop
  ${tw`
    text-xs
    md:text-sm
    text-black
    mr-1
    md:mr-5
    cursor-pointer
    font-medium
    transition
    duration-300
    ease-in-out
    hover:text-gray-600
    uppercase
  `}

  ${({ menu }) => menu && css`
    ${tw`
      text-white
      text-xl
      mb-3
      focus:text-white
    `}
  `}
`;

export const NavItems = () => {

    const isMobile = useMediaQuery({ maxWidth: SCREENS.sm })

 return (
  <div>
    { isMobile ? 
      (
        <Menu right styles={menuStyles}>
          <ListContainer>
            {/* TODO react router */}
            <NavItem menu><a href='#'>Home</a></NavItem>
            <NavItem menu><a href='#'>Clothes</a></NavItem>
            <NavItem menu><a href='#'>Store</a></NavItem>
            <NavItem menu><a href='#'>Contacts</a></NavItem>
          </ListContainer>
        </Menu>
      ) :
      (
        <ListContainer>
          {/* TODO react router */}
          <NavItem><a href='#'>Home</a></NavItem>
          <NavItem><a href='#'>Clothes</a></NavItem>
          <NavItem><a href='#'>Store</a></NavItem>
          <NavItem><a href='#'>Contacts</a></NavItem>
        </ListContainer>
      )}
  </div>
)
}