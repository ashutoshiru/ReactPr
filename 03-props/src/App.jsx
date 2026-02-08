import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div className='parent'>
      <Card user = "Ashutosh" link = "https://plus.unsplash.com/premium_photo-1738590561029-33c9c5d64af2?q=80&w=1267&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/> 
      <Card user='Hiru' link = "https://plus.unsplash.com/premium_photo-1738449258712-f1e6ad3d40e1?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user = 'Ashu' link = "https://plus.unsplash.com/premium_photo-1738449258706-74c1dc94b988?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user = "Kajuu" link = "https://plus.unsplash.com/premium_photo-1738592736106-a17b897c0ab1?q=80&w=1267&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    </div>
  )
}

export default App
