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
  background: #3D3D3D;
  margin: 5px;
  text-align: center;
  cursor: pointer;
  border-radius: 50%;
  padding: 12px;
  box-shadow: 0 9px #999;
  &:active{
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }    
  &.item-3, &.item-7, &.item-11, &.item-15, &.item-19{
    background: #FEA443;
    &:hover{
       background: #F2CB05;
      //  transition: all 0.5s ease-in;
      }
  }
  &.item-0, &.item-1, &.item-2 {
    background: #D9D9D9;
    &:hover{
      background: #A8C0CE;
      // transition: all 0.5s ease-in;
     }
  }
  `