import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First from './components/First'
import Reg from './components/reg'
import Navbar from './components/Navbar'
import Basictb from './components/Basictb'
import Greetingcard from './components/Greetingcard'
import { Route, Routes } from 'react-router-dom'
import StateBasics from './components/StateBasics'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1>React JS</h1> */}
      {/* <First/> */}
      <Navbar/>
      <Routes>
         <Route path="/"element={<First/>}/>
         <Route path="/r"element={<Reg/>}/>
         <Route path="/t"element={<Basictb/>}/>
         <Route path="/c"element={<Greetingcard/>}/>
         <Route path="/b"element={<StateBasics/>}/>

      </Routes>
      {/* <Reg/>  */}
      {/* <Basictb/> */}
      {/* <Greetingcard/> */}
      
    </>
  )
}

export default App
