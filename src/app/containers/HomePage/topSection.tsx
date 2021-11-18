import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/responsive";
import { Button } from "../../components/button";
import BlobImage from '../../../assets/images/blob.svg'
import FashionImage from '../../../assets/images/clothing.png'

export const TopSection = () => {
  return (
    <TopSectionContainer>
      <LeftContainer>
        <Slogan>vogue. trend. craze. rage. mania. mode. fancy.</Slogan>
        <Description>
          Style is a way to say who you are without having to speak.
        </Description>
        <ButtonsContainer>
          <Button text="Get it" />
          <Button theme="filled" text="Sell it" />
        </ButtonsContainer>
      </LeftContainer>
      <RightContainer>
        <BlobContainer>
          <img src={BlobImage} alt='blob' />
        </BlobContainer>
        <StandaloneItem>
          <img src={FashionImage} alt='style'/>
        </StandaloneItem>
      </RightContainer>
    </TopSectionContainer>
  );
}

const TopSectionContainer = styled.div`
  min-height: 500px;
  margin-top: 6em;
  ${tw`
    w-full
    max-w-screen-2xl
    flex
    justify-between
    pl-3
    pr-3
    lg:pl-12
    lg:pr-12
  `}
`;

const LeftContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
  `};
`;

const RightContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
    relative
    mt-20
  `};
`;

const Slogan = styled.h1`
  ${tw`
    font-bold
    text-2xl
    xl:text-6xl
    sm:text-3xl
    md:text-5xl
    lg:font-black
    md:font-extrabold
    text-black
    mb-4
    sm:leading-snug
    lg:leading-normal
    xl:leading-relaxed
  `};
`;

const Description = styled.p`
  ${tw`
    text-xs
    lg:text-sm
    xl:text-lg
    sm:max-h-full
    overflow-hidden
    max-h-12
    text-gray-800
  `};
`;

const BlobContainer = styled.div`
  width: 30em;
  height: 70em;
  position: absolute;
  right: -25em;
  top: -15em;
  z-index: -1;
  transform: rotate(-30deg);
  img {
    width: 100%;
    height: auto;
    max-height: max-content;
  }
  @media (min-width: ${SCREENS.sm}) {
    width: 40em;
    max-height: 10em;
    right: -10em;
    top: -16em;
    transform: rotate(-25deg);
  }
  @media (min-width: ${SCREENS.lg}) {
    width: 50em;
    max-height: 30em;
    right: -10em;
    top: -16em;
    transform: rotate(-30deg);
  }
  @media (min-width: ${SCREENS.xl}) {
    width: 70em;
    max-height: 30em;
    right: -10em;
    top: -25em;
    transform: rotate(-20deg);
  }
`;

const StandaloneItem = styled.div`
  width: auto;
  height: 10em;
  right: -3em;
  top: -5em;
  position: absolute;
  img {
    width: auto;
    height: 100%;
    max-width: fit-content;
  }
  @media (min-width: ${SCREENS.sm}) {
    height: 16em;
    right: 0;
    top: -6em;
  }
  @media (min-width: ${SCREENS.lg}) {
    height: 21em;
    right: 0;
    top: -5em;
  }
  @media (min-width: ${SCREENS.xl}) {
    height: 30em;
    right: 0;
    top: -9em;
  }
`;

const ButtonsContainer = styled.div`
  ${tw`
    flex
    flex-wrap
    mt-4
  `};
`;