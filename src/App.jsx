// as
// import React from 'react'


  import { useState } from "react"
  
  const App = () => {
  const [color, setColor] = useState("black")
  
  return (
  <>
  <div className="w-381 h-screen duration-200"
    style = {{backgroundColor: color}} 
  >
   </div>
   
    <div className="fixed flex-wrap flex justify-center gap-3 
                    bottom-22 inset-x-0">

    <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white
                    px-3 py-2 rounded-3xl">                
     
      <button
       onClick={() => setColor("red")}
       className="outline-none px-8 py-4 rounded-full 
       border-2 gap-3 text-bold text-black shadow-lg"
       style={{backgroundColor:"red"}}
       >Red
       </button>
       <button
       onClick={() => setColor("yellow")}
        className="flex flex-wrap justify-center bg-yellow-400 rounded-3xl 
       border-2 gap-3 text-bold px-8 py-4 text-black shadow-lg"
       style={{backgroundColor:"yellow"}}>Yellow
       </button>
       <button
       onClick={() => setColor("blue")}
       className="flex flex-wrap justify-center bg-blue-700 rounded-3xl 
       border-2 gap-3 text-bold px-8 py-4 text-black shadow-lg"
       style={{backgroundColor:"blue"}}>Blue
       </button>
       <button
       onClick={() => setColor("green")}
       className="flex flex-wrap justify-center bg-green-700 rounded-3xl 
       border-2 gap-3 text-bold px-8 py-4 text-black shadow-lg"
       style={{backgroundColor:"green"}}>Green
       </button>
       <button
       onClick={() => setColor("orange")}
       className="flex flex-wrap justify-center bg-orange-500 rounded-3xl 
       border-2 gap-3 text-bold px-8 py-4 text-black shadow-lg"
       style={{backgroundColor:"orange"}}>Orange
       </button>
       <button
       onClick={() => setColor("purple")}
       className="flex flex-wrap justify-center bg-purple-700 rounded-3xl 
       border-2 gap-3 text-bold px-8 py-4 text-black shadow-lg"
       style={{backgroundColor:"purple"}}>Purple
       </button>
       <button 
       onClick={() => setColor("gray")}
       className="flex flex-wrap justify-center bg-gray-500 rounded-3xl 
       border-2 gap-3 text-bold px-8 py-4 text-black shadow-lg"
       style={{backgroundColor:"gray"}}>Gray
       </button>
   </div>
   </div> 
   </>
  )
}

export default App
