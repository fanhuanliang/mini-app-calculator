import React from 'react'

export const Calculator = () => {
  const buttons = ["7", "8", "9", "/", '4', '5', '6', '-', '1', '2', '3', '+', 'AC', '0', '.', '=']; 
  const renderButton = (button:string, index:number):any => {
    return (
      <div key={index}>
        <div>{button}</div>
      </div>
    )
  }
    return (
      <div>
        {buttons.map((button, index) => renderButton(button, index))}
      </div>
    )
}
