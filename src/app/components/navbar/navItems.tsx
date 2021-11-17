import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const ListContainer = styled.ul`
    ${tw`
        flex
        list-none
    `};
`;

const NavItem = styled.li`
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
    `};
`;

export const NavItems = () => {
 return <ListContainer>
     <NavItem><a href='#'>Home</a></NavItem>
     <NavItem><a href='#'>Clothes</a></NavItem>
     <NavItem><a href='#'>Store</a></NavItem>
     <NavItem><a href='#'>Contacts</a></NavItem>
 </ListContainer>
}