import React, { useState } from 'react';
import {
  Cal,
  Input,
  Wrapper,
  ButtonWrapper,
  Button,
  Content,
} from './Calculator.styled';

export const Calculator = () => {
  const [input, setInput] = useState('');
  const buttons = [
    'ac',
    '±',
    '%',
    '+',
    '7',
    '8',
    '9',
    '-',
    '4',
    '5',
    '6',
    '×',
    '1',
    '2',
    '3',
    '÷',
    'del',
    '0',
    '.',
    '='
  ]; 

  // const handleInput = (event: React) => {
  //   console.log(event.)
  // }

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    console.log((event.target as Element).innerHTML);
    // const newInput = ...input
    setInput(input + (event.target as Element).innerHTML);
  };

  const renderButton = (button:string, index:number):any => {
    return (
      <ButtonWrapper key={index}>
        <Button onClick={handleClick} className={`item-${index}`}>
          {button}
        </Button>
      </ButtonWrapper>
    );
  }
    return (
      <Cal>
        <Input>
          <Content>{input}</Content>
        </Input>
        <Wrapper>
          {buttons.map((button, index) => renderButton(button, index))}
        </Wrapper>
      </Cal>
    );
}
