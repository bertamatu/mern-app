import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { IButtonProps } from "../../../types/types";

export const Button = (props: IButtonProps) => {
  const { theme, text, className } = props;

  return theme === "filled" ?
  <FilledButton className={className}>{text}</FilledButton> :
  <OutlinedButton className={className}>{text}</OutlinedButton>
}

const BaseButton = styled.button`
  ${tw`
    pl-5
    pr-5
    pt-3
    pb-3
    outline-none
    rounded-md
    text-white
    text-xs
    font-semibold
    border-transparent
    border-2
    border-solid
    focus:outline-none
    transition-all
    duration-200
    ease-in-out
    m-1
  `};
`;

const OutlinedButton = styled(BaseButton)`
  ${tw`
    bg-red-500
    hover:bg-transparent
    hover:text-red-500
    hover:border-red-500
    hover:text-black
  `};
`;

const FilledButton = styled(BaseButton)`
  ${tw`
    border-red-500
    text-black
    bg-transparent
    hover:bg-red-500
    hover:text-white
    hover:border-transparent
  `};
`;