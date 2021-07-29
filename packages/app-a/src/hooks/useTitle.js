import React, { useState, useEffect } from 'react';
export default function useTitle(text) {

  const defaultTitle = text
  const [title, setTitle] = useState(text)

  useEffect(() => {

    console.log('useEffect ! title changed')
    return () => {
      console.log('useEffect depose !')
    }
  }, [title])
  return [title ? title : defaultTitle, setTitle]
}