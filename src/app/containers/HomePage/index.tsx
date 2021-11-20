import React from "react";
import styled from 'styled-components';
import tw from "twin.macro";
import { BookItem } from "../../components/bookItem";
import { Marginer } from "../../components/marginer";
import { Navbar } from "../../components/navbar";
import { AboutUs } from "./aboutUs";
import { BookingSteps } from "./bookingSteps";
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
            <Marginer direction="vertical" margin="9em"/>
            <BookingSteps/>
            <AboutUs />
            <Marginer direction="vertical" margin="8em" />
        </HomePageContainer>
    )
}