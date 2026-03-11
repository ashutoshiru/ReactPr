import React from 'react'

const App = () => {

 function inpChange(value){
  console.log(`Ash is typing ${value}`);
 }


  return (
    <div>
      Ashutosh 
      <input type="text" placeholder="Enter your text" onChange={(elem)=>{
        inpChange(elem.target.value)
      }}  />

    </div>
  )
}

export default App
