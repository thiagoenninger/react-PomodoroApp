/* eslint-disable @typescript-eslint/no-unused-vars */
import styled, {css} from "styled-components";

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const buttonVariant = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  margin: 8px;
  border: 0;
  border-radius: 4px;

  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.white};
  
  /* ${props => {
    return css `background-color: ${buttonVariant[props.variant]}`
  }} */
`