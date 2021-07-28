import React from "react";

import { Button, Text } from '@lumin-ui/components';

import dayjs from 'dayjs'

const App = () => {

  const textForButton = '我是按钮'
  const textForText = '我是文本'

  return (
    <div>
      <div style={{
        margin: "10px",
        padding: "10px",
        textAlign: "center",
        backgroundColor: "cyan"
      }}>
        <h1 >UI Lib</h1>
        <Button>{textForButton}</Button>
        <Text text={textForText} />
        {dayjs().format()}
      </div>
    </div>
  )
}

export default App;
