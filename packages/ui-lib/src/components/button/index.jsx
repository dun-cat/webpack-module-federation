import React from 'react';

function Button(props) {
  return <button style={{
    color: '#9c27b0',
    fontSize:'30px'
  }}>按钮:{props.children}</button>
}
export default Button;