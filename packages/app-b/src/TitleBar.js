import { useTitle } from 'app-a/hooks'

import React from 'react';

export default function TitleBar(props) {

  const [title, setTitle] = useTitle('我是 APP B 传入的默认文本，用 APP A 的 hooks 设置的，你可以通过输入框改变我')

  const onInputChange = (e) => {
    setTitle(e.target.value)
  }

  return <div>
    <input onInput={onInputChange} />
    <h3>{title}</h3>
  </div>
}