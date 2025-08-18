import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <div className="bg-black h-screen w-full flex flex-col items-center justify-center ">
        <div className="bg-red-500 flex flex-col justify-end items-center justify-center h-3/5 w-4/5 rounded-3xl nametagshadow">
        <div className="self-auto">
          <h1 className="poppins-black mt-4">Hello!</h1>
          <p className="outfit">My Name Is:</p>
          <br></br>
        </div>
          <div className="bg-white w-9/10 h-13/20 rounded-2xl items-center justify-center mb-7 flex flex-col">
            <div>
              <h2 className="namefont text-[4.5vw] glow-hover">Jonathan Dong</h2>
            </div>
          </div>
        </div>
      </div>

      
      <div className="bg-black w-full flex flex-col items-center justify-center">
        <div className="bg-black flex flex-col w-screen h-[1000px] items-center justify-center">
          <p className="biorhyme-expanded-extrabold text-[10vw] mt-4">Skills</p>

          <p className="outfit mb-4">Hardware</p>
          <div className="grid grid-cols-5 gap-8 h-200">
            <div className="bg-black w-[12vw] h-[12vw] rounded-3xl items-center justify-center flex skillshadow">
              <img src="/assets/pictures/arduino.png" alt="Arduino" className="w-4/5 h-4/5 object-contain rounded-2xl"/>
            </div>
            <div className="bg-black w-[12vw] h-[12vw] rounded-3xl items-center justify-center flex skillshadow">
              <img src="/assets/pictures/java.png" alt="Java" className="w-4/5 h-4/5 object-contain rounded-2xl"/>
            </div>
            <div className="bg-black w-[12vw] h-[12vw] rounded-3xl items-center justify-center flex skillshadow">
              <img src="/assets/pictures/html.png" alt="HTML" className="w-4/5 h-4/5 object-contain rounded-2xl"/>
            </div>
            <div className="bg-black w-[12vw] h-[12vw] rounded-3xl items-center justify-center flex skillshadow">
              <img src="/assets/pictures/kicad.png" alt="KiCad" className="w-full h-full object-contain rounded-2xl"/>
            </div>
            <div className="bg-black w-[12vw] h-[12vw] rounded-3xl items-center justify-center flex skillshadow">
              <img src="/assets/pictures/f360.png" alt="Fusion 360" className="w-4/5 h-4/5 object-contain rounded-2xl"/>
            </div>
          </div>

          <p className="outfit mb-4">Software</p>
          <div className="grid grid-cols-5 gap-8 h-200">
            <div className="bg-black w-[12vw] h-[12vw] rounded-3xl items-center justify-center flex skillshadow">
              <img src="/assets/pictures/arduino.png" alt="Arduino" className="w-4/5 h-4/5 object-contain rounded-2xl"/>
            </div>
            <div className="bg-black w-[12vw] h-[12vw] rounded-3xl items-center justify-center flex skillshadow">
              <img src="/assets/pictures/java.png" alt="Java" className="w-4/5 h-4/5 object-contain rounded-2xl"/>
            </div>
            <div className="bg-black w-[12vw] h-[12vw] rounded-3xl items-center justify-center flex skillshadow">
              <img src="/assets/pictures/html.png" alt="HTML" className="w-4/5 h-4/5 object-contain rounded-2xl"/>
            </div>
            <div className="bg-black w-[12vw] h-[12vw] rounded-3xl items-center justify-center flex skillshadow">
              <img src="/assets/pictures/kicad.png" alt="KiCad" className="w-full h-full object-contain rounded-2xl"/>
            </div>
            <div className="bg-black w-[12vw] h-[12vw] rounded-3xl items-center justify-center flex skillshadow">
              <img src="/assets/pictures/f360.png" alt="Fusion 360" className="w-4/5 h-4/5 object-contain rounded-2xl"/>
            </div>
          </div>

         
        </div>
      </div>
    </>
  )
}

export default App
