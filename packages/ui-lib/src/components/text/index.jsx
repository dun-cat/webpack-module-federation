import React from 'react';

function Text(props) {

  return <span style={{
    margin: "10px",
    padding: "10px",
    color:'#8bc34a',
    textAlign: "center",
    fontSize:"30px"
  }}>{props.text}</span>
}
export default Text;