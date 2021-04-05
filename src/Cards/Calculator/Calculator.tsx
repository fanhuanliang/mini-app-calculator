/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState } from 'react';
import { evaluate } from 'mathjs';
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
  const [store, setStore] = useState('');
  const buttons = [
    'ac',
    '+/-',
    '%',
    '+',
    '7',
    '8',
    '9',
    '-',
    '4',
    '5',
    '6',
    '*',
    '1',
    '2',
    '3',
    '/',
    'del',
    '0',
    '.',
    '='
  ]; 

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    let value = (event.target as Element).innerHTML;
    const symbol = ['+', '-', '*', '%', '/'] 
    // console.log('input', input, 'store', store)
    if (value === '=') {
      if (input === '.') {
        // console.log('not working')
      } else {
        (input.length > 0 && store.length > 0)? (setInput(evaluate(store + input).toString()), setStore('')): null;
      }
    } else if (value === 'ac') {
      setInput('');
      setStore('');
    } else if (symbol.indexOf(value) !== -1 && store[store.length-1] === value) {
      // console.log("duplicate symbol");
    } else if (symbol.indexOf(value) !== -1 && input.length === 0) {
      // console.log("can't enter");
    } else if (value === '.' && input.indexOf(value) !== -1) {
      // console.log("Only one dot");
    } else if (value === 'del') {
      setInput(input.toString().slice(0, input.toString().length - 1));
    } else if (symbol.indexOf(value) !== -1) {
      setStore(input + value);
      setInput('')
    } else if (value === '+/-') {
      input[0] === "-" ? setInput(input.slice(1)) : setInput("-" + input);
    } else {
      setInput(input + value);
    }
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
