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
                <h2 className="namefont text-[6vw] glow-hover">Jonathan</h2>
                <h2 className="namefont text-[4.5vw] glow-hover">Dong</h2>
              </div>
            </div>
          </div>
        </div>
    
        

        <div className="bg-black w-full min-h-screen flex flex-col items-center justify-center">
          <p className="biorhyme-expanded-extrabold text-[4vw] mt-4">About Me</p>
          <div className="bg-[#4e4e4eaa] w-[90vw] h-9/10 rounded-3xl items-center justify-center flex flex-col mt-8 aboutshadow">
            <div className="grid grid-cols-3 h-9/10 gap-7 w-[95vw] mt-8 mb-7 mt-7">
              <div className="rounded-3xl items-center justify-center flex ml-20">
                <img src="/assets/pictures/me.jpg" alt="Me!" className="w-9/10 rounded-3xl"></img>
              </div>
              <div className="bg-[#4e4e4eaa] rounded-3xl items-center justify-center col-span-2 mr-20">
                <p className="montserrat mr-10 ml-10 text-[1.5vw] mt-8">Hey! My name is Jonathan Dong, an aspiring developer from Canada! </p>
                <br></br>
                <p className="montserrat mr-10 ml-10 text-[1.5vw]">I am currently studying @ Carleton University for a Bachelors in Aerospace Engineering.</p>
                <br></br>
                <p className="montserrat mr-10 ml-10 text-[1.5vw]">Last summer, I interned @ Hack Club, where I ran a hardware program for teenagers, providing teenagers over the world with $75,000+ worth of hardware grants.</p>
                <br></br>
                <p className="montserrat mr-10 ml-10 text-[1.5vw] mb-8">Proficient in Fusion 360, KiCAD, and Arduino, I love making hardware + software projects to make everyday life better. I would love to talk more! Reach out to me @ jonathandong2020@gmail.com</p>
              </div>
          </div>
          </div>
        </div>
    
        

        <div className="bg-black w-full min-h-screen flex flex-col items-center justify-center mt-20">
          <div className="bg-black flex flex-col w-screen h-[1000px] items-center justify-center">
            <p className="biorhyme-expanded-extrabold text-[10vw] mt-4">Skills</p>

            <p className="outfit mb-4">Hardware</p>
            <div className="grid grid-cols-5 gap-8 h-200">
              <div className="bg-black w-[12vw] h-[12vw] rounded-3xl items-center justify-center flex skillshadow">
                <img src="/assets/pictures/arduino.png" alt="Arduino" className="w-4/5 h-4/5 object-contain rounded-2xl"/>
              </div>
              <div className="bg-black w-[12vw] h-[12vw] rounded-3xl items-center justify-center flex skillshadow">
                <img src="/assets/pictures/rpi.png" alt="Raspberry Pi" className="w-7/10 h-7/10 object-contain rounded-2xl"/>
              </div>
              <div className="bg-black w-[12vw] h-[12vw] rounded-3xl items-center justify-center flex skillshadow">
                <img src="/assets/pictures/esp.png" alt="ESP32 & ESP8266" className="w-7/10 h-7/10 object-contain rounded-2xl"/>
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
                <img src="/assets/pictures/java.png" alt="Java" className="w-4/5 h-4/5 object-contain rounded-2xl"/>
              </div>
              <div className="bg-black w-[12vw] h-[12vw] rounded-3xl items-center justify-center flex skillshadow">
                <img src="/assets/pictures/cpp.png" alt="C++" className="w-4/5 h-4/5 object-contain rounded-2xl"/>
              </div>
              <div className="bg-black w-[12vw] h-[12vw] rounded-3xl items-center justify-center flex skillshadow">
                <img src="/assets/pictures/csharp.png" alt="C#" className="w-4/5 h-4/5 object-contain rounded-2xl"/>
              </div>
              <div className="bg-black w-[12vw] h-[12vw] rounded-3xl items-center justify-center flex skillshadow">
                <img src="/assets/pictures/html.png" alt="HTML" className="w-4/5 h-4/5 object-contain rounded-2xl"/>
              </div>
              <div className="bg-black w-[12vw] h-[12vw] rounded-3xl items-center justify-center flex skillshadow">
                <img src="/assets/pictures/tailwind.png" alt="Tailwind" className="w-4/5 h-4/5 object-contain rounded-2xl"/>
              </div>
            </div>

          
          </div>
        </div>
      
      
    </>
  )
}

export default App
