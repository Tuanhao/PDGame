import React from 'react';

export default function Answer(props) {
  return (
    <button 
        onClick={props.onClick} 
        disabled={props.buttonsClicked} 
        className={"button--"+ props.isCorrect}>
      {props.value}
    </button>
  )
}