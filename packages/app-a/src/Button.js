import React, { useEffect } from 'react';

import { useTitle } from './hooks/index'

function Button(props) {

  const [title, setTitle] = useTitle('我是 APP A 的按钮组件，使用了自己的 hooks')


  useEffect(() => {
    console.log('APP A 按钮 use effect')
  }, [title])

  return <button>{title}</button>
}
export default Button;