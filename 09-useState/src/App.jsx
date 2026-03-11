import React, { useState } from 'react'

const App = () => {



  const [amam, ooso] = useState(0)

  let incCount = (num) => {
    ooso(amam+1)
    console.log("num is increasing")
  }

  let decCount = (num) => {
    ooso(amam-1)
    console.log("num is decreasing");
    
  }



  return (
    <div>
      <h1>{amam}</h1>
      <button onClick={incCount}>increase</button>
      <button onClick={decCount}>decrease</button>
    </div>
  )
}

export default App
