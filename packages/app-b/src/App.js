import React, { Suspense, useState } from "react";

// import Button from 'ui_lib/button';
import { Button as UIButton, Text } from '@lumin-ui/components';


import Button from 'app-a/button';

// const Button = lazy(() => import("ui_lib/text"))


import TitleBar from './TitleBar'


const App = () => {

  const textForButton = '(我是 APP B 传入的文本)'
  const textForText = '我是 APP B 传入 UI 组件的文本'

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


        {/* UI Lib */}
        <div style={{
          margin: "10px",
          padding: "10px",
          textAlign: "center",
          backgroundColor: "#ff5722"
        }}>

          <div>
            <h1>UI Lib 组件</h1>
            <h2 style={{ cursor: 'pointer' }} onClick={onLoadingUILibClick}>点击我，动态渲染 Text 组件</h2>
            {libBText}

            <div>
              <UIButton>{textForButton}</UIButton>
            </div>


          </div>
        </div>


        {/* App A */}
        <div style={{
          margin: "10px",
          padding: "10px",
          textAlign: "center",
          backgroundColor: "#ff5722"
        }}>

          <div>
            <h1>APP A</h1>
            <TitleBar />

            <Button />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
