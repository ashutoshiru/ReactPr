import React from 'react'

const App = () => {

  const submitHandler = (ash) =>{
    ash.preventDefault()
    console.log("Form submitted by Ashutosh kumar")
  }
  return (
    <div >
     <form action=""className='form' onSubmit={(ash) =>{
      submitHandler(ash)
     }}>
       <input type="text" placeholder='enter your name here'/>
      <button>Submit</button>
     </form>
    </div>
  )
}

export default App
