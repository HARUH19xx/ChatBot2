import React from 'react';
import '../assets/styles/style.css'

const Answer = (props) => {
  return (
    <button className="custom-button" onClick={() => props.select(props.content, props.nextId)}>
      {props.content}
    </button>
  )
}

export default Answer;
