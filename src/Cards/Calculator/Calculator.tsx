import React, { useState } from 'react';
import {
  Cal,
  Input,
  Wrapper,
  ButtonWrapper,
  Button,
  Content,
  BigButton,
} from "./Calculator.styled";

export const Calculator = () => {
  const [input, setInput] = useState('345345232342');
  const buttons = [
    'AC',
    'Del',
    '%',
    "+",
    "7",
    "8",
    "9",
    "-",
    "4",
    "5",
    "6",
    "×",
    "1",
    "2",
    "3",
    "÷",
    "0",
    ".",
  ]; 
  const renderButton = (button:string, index:number):any => {
    return (
      <ButtonWrapper key={index}>
        <Button>{button}</Button>
      </ButtonWrapper>
    )
  }
    return (
      <Cal>
        <Input>
          <Content>{input}</Content>
        </Input>
        <Wrapper>
          {buttons.map((button, index) => renderButton(button, index))}
          <BigButton>
            <Button>=</Button>
          </BigButton>
        </Wrapper>
      </Cal>
    );
}
