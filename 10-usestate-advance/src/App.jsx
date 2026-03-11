import React, { useState } from 'react'

const App = () => {
const [num, setnum] = useState([5,25,1,4,65,1])


const btnClicked = () => {
  const newNum = [...num]

  newNum.push(55)

  setnum(newNum)
}

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>Click to push 55 in array</button>
    </div>
  )
}

export default App
