import styled from 'styled-components';

export const Cal = styled.div`
  background: black;
  width: 400px;
  margin: auto;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  box-sizing : border-box;
  // height:800px
  font-size: 3em;
  color: white;
  box-shadow: 10px 10px grey;
  border-radius: 20px;
`

export const Input = styled.div`
  width: 360px;
  margin: 20px;
`
export const Content = styled.div`
  text-align: right;
  min-height: 75px;
  margin: 10px;
  overflow-wrap: break-word;
`
export const Wrapper = styled.div`
  // background: black;
  // height: 400px;
  display: flex;
  flex-flow: wrap;
  width: 360px;
  margin: 0px 20px 20px 20px;
`
export const ButtonWrapper = styled.div`
  width: 90px;
  `
export const Button = styled.div`
  background: #A5AAA3;
  margin: 5px;
  text-align: center;
  cursor: pointer;
  border-radius: 50%;
  padding: 12px;
  &.item-3 {
    background: #FEA443;
  }
  &.item-7 {
    background: #FEA443;
  }
  &.item-11 {
    background: #FEA443;
  }
  &.item-15 {
    background: #FEA443;
  }
  &.item-19 {
    background: #FEA443;
  }
  `