import React, { Suspense, useState } from "react";

import Button from './Button'

const App = () => {

  return (
    <div>
      <div style={{
        margin: "10px",
        padding: "10px",
        textAlign: "center",
        backgroundColor: "cyan"
      }}>
        <h1 >App A</h1>


        <Button />

      </div>
    </div>
  )
}

export default App;
