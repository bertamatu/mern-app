import React from "react";
import styled from 'styled-components';
import tw from "twin.macro";
import { BookItem } from "../../components/bookItem";
import { Navbar } from "../../components/navbar";
import { TopSection } from "./topSection";

const HomePageContainer = styled.section`
    ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
    `}    
`;

export const HomePage = () => {
    return (
        <HomePageContainer>
            <Navbar/>
            <TopSection/>
            <BookItem/>
        </HomePageContainer>
    )
}