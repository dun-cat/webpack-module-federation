import React, { Suspense, useState } from "react";

// import Button from 'ui_lib/button';
import { Button, Text } from '@lumin-ui/components';
// const Button = lazy(() => import("ui_lib/text"))


const App = () => {

  const textForButton = '(我是 APP B 传入的文本)'
  const textForText = '[我是 APP B 传入的文本，哈哈哈哈]'

  const [libBText, setLibText] = useState(null)

  const onLoadingUILibClick = () => {
    import("@lumin-ui/components").then(module => {
      const Text = module.Text
      setLibText(<Text text={textForText} />)
    })
  }

  return (
    <div>
      <div style={{
        margin: "10px",
        padding: "10px",
        textAlign: "center",
        backgroundColor: "cyan"
      }}>
        <h1 >App B</h1>


        <div style={{
          margin: "10px",
          padding: "10px",
          textAlign: "center",
          backgroundColor: "#ff5722"
        }}>
          <h2 style={{ cursor: 'pointer' }} onClick={onLoadingUILibClick}>点击我，动态加载远程组件，并渲染</h2>
          <div>
            <h1>下面是UI Lib的组件</h1>
            <Button>{textForButton}</Button>
            {libBText}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
