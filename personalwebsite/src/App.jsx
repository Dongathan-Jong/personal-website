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
          <h1 className="poppins-black mt-4 text-[3vw]">Hello!</h1>
          <p className="outfit text-[1vw]">My Name Is:</p>
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
        <div className="bg-[#4e4e4eaa] w-[90vw] h-[90%] rounded-3xl items-center justify-center flex flex-col mt-8 aboutshadow">
          <div className="grid grid-cols-3 h-[90%] gap-7 w-[95vw] mt-8 mb-7 mt-7">
            <div className="rounded-3xl items-center justify-center flex ml-20">
              <img src="/assets/pictures/me.jpg" alt="Me!" className="w-9/10 rounded-3xl"></img>
            </div>
            <div className="bg-[#4e4e4eaa] rounded-3xl items-center justify-center col-span-2 mr-20">
              <p className="montserrat mr-10 ml-10 text-[1.5vw] mt-8">Hey! My name is Jonathan Dong, an aspiring developer from Canada! </p>
              <br></br>
              <p className="montserrat mr-10 ml-10 text-[1.5vw]">I am currently studying at{' '}  
                <a href="https://carleton.ca/" target="_blank" className="!underline !text-[#919191] hover:!text-red-700 transition">Carleton University</a> for a Bachelors in Aerospace Engineering.</p>
              <br></br>
              <p className="montserrat mr-10 ml-10 text-[1.5vw]">Last summer, I interned at{' '}
                <a href="https://hackclub.com/" target="_blank" className="!underline !text-[#919191] hover:!text-red-700 transition">Hack Club</a>
                {' '}where I ran a{' '}
                <a href="https://highway.hackclub.com" target="_blank" className="!underline !text-[#919191] hover:!text-red-700 transition">hardware program for teenagers</a>, providing teenagers over the world with $75,000+ worth of hardware grants. Also, I co-hosted the{' '}
                <a href="https://undercity.hackclub.com/" target="_blank" className="!underline !text-[#919191] hover:!text-red-700 transition">largest hardware hackathon</a> {' '}at Github HQ in San Fransisco!</p>
              <br></br>
              <p className="montserrat mr-10 ml-10 text-[1.5vw] mb-8">Proficient in Fusion 360, KiCAD, and Arduino, I love making hardware + software projects to make everyday life better. I would love to talk more! Reach out to me at{' '}
                 <a href="mailto:jonathandong2020@gmail.com" className="!underline !text-[#919191] hover:!text-red-700 transition">jonathandong2020@gmail.com</a>
              </p>
            </div>
        </div>
        </div>
      </div>
  
      

      <div className="bg-black w-full min-h-screen flex flex-col items-center justify-center mt-20">
        <div className="bg-black flex flex-col w-screen h-[1000px] items-center justify-center">
          <p className="biorhyme-expanded-extrabold text-[10vw] mt-4">Skills</p>
          <p className="outfit mb-4">Hardware</p>
          <div className="grid grid-cols-5 gap-8 h-200">
            <div className="bg-[#34b1eb] w-[12vw] h-[12vw] rounded-3xl items-center justify-center flex skillshadow">
              <img src="/assets/pictures/arduino.png" alt="Arduino" className="w-4/5 h-4/5 object-contain rounded-2xl"/>
            </div>
            <div className="bg-[#a8134e] w-[12vw] h-[12vw] rounded-3xl items-center justify-center flex skillshadow">
              <img src="/assets/pictures/rpi.png" alt="Raspberry Pi" className="w-7/10 h-7/10 object-contain rounded-2xl"/>
            </div>
            <div className="bg-[#8a0613] w-[12vw] h-[12vw] rounded-3xl items-center justify-center flex skillshadow">
              <img src="/assets/pictures/esp.png" alt="ESP32 & ESP8266" className="w-7/10 h-7/10 object-contain rounded-2xl"/>
            </div>
            <div className="bg-[#0e068a] w-[12vw] h-[12vw] rounded-3xl items-center justify-center flex skillshadow">
              <img src="/assets/pictures/kicad.png" alt="KiCad" className="w-full h-full object-contain rounded-2xl"/>
            </div>
            <div className="bg-[#994c11] w-[12vw] h-[12vw] rounded-3xl items-center justify-center flex skillshadow">
              <img src="/assets/pictures/f360.png" alt="Fusion 360" className="w-4/5 h-4/5 object-contain rounded-2xl"/>
            </div>
          </div>
          <p className="outfit mb-4">Software</p>
          <div className="grid grid-cols-5 gap-8 h-200">
            <div className="bg-[#00067d] w-[12vw] h-[12vw] rounded-3xl items-center justify-center flex skillshadow">
              <img src="/assets/pictures/java.png" alt="Java" className="w-4/5 h-4/5 object-contain rounded-2xl"/>
            </div>
            <div className="bg-[#140054] w-[12vw] h-[12vw] rounded-3xl items-center justify-center flex skillshadow">
              <img src="/assets/pictures/cpp.png" alt="C++" className="w-4/5 h-4/5 object-contain rounded-2xl"/>
            </div>
            <div className="bg-[#4a0054] w-[12vw] h-[12vw] rounded-3xl items-center justify-center flex skillshadow">
              <img src="/assets/pictures/csharp.png" alt="C#" className="w-4/5 h-4/5 object-contain rounded-2xl"/>
            </div>
            <div className="bg-[#a85903] w-[12vw] h-[12vw] rounded-3xl items-center justify-center flex skillshadow">
              <img src="/assets/pictures/html.png" alt="HTML" className="w-4/5 h-4/5 object-contain rounded-2xl"/>
            </div>
            <div className="bg-[#03a8a0] w-[12vw] h-[12vw] rounded-3xl items-center justify-center flex skillshadow">
              <img src="/assets/pictures/tailwind.png" alt="Tailwind" className="w-4/5 h-4/5 object-contain rounded-2xl"/>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-black w-full min-h-screen flex flex-col items-center justify-center">
        <p className="biorhyme-expanded-extrabold text-[6vw] mt-4">Projects</p>
        <div className="grid grid-cols-3 gap-30 h-[24vw] w-[90vw] justify-items-center mt-4">
          <div className="bg-[#171717] w-[30vw] rounded-3xl items-center justify-center flex flex-col projectshadow">
            <div className="bg-[#595959] w-[28vw] h-[18vw] rounded-2xl items-center justify-center flex mt-[1vw]">
              <img src="/assets/pictures/megablot.png" alt="Mega Blot" className="w-9/10 object-contain rounded-3xl"></img>
            </div>
            <p className="outfit text-[2vw]">
              <a href="https://github.com/Dongathan-Jong/megablot" target="_blank" className="!underline !text-[#FFFFFF]">Mega Blot</a></p>
              <p className="outfit text-[1vw] ml-2 mr-2 mb-2">A 30x50 cm pen plotter that has a custom 4 pen tool changer for CMYK plots!</p>
          </div>
          <div className="bg-[#171717] w-[30vw] rounded-3xl items-center justify-center flex flex-col projectshadow">
            <div className="bg-[#595959] w-[28vw] h-[18vw] rounded-2xl items-center justify-center flex mt-[1vw]">
              <img src="/assets/pictures/spotify display.jpg" alt="Spotify Display" className="w-9/10 object-contain rounded-3xl"></img>
            </div>
            <p className="outfit text-[2vw]"><a href="https://github.com/Dongathan-Jong/spotifydisplay" target="_blank" className="!underline !text-[#FFFFFF]">Spotify Display</a></p>
            <p className="outfit text-[1vw] ml-2 mr-2 mb-2">A Spotify Desk Display that shows the currently playing song + artist! Based on the Car Thing.</p>
          </div>
          <div className="bg-[#171717] w-[30vw] rounded-3xl items-center justify-center flex flex-col projectshadow">
            <div className="bg-[#595959] w-[28vw] h-[18vw] rounded-2xl items-center justify-center flex mt-[1vw]">
              <img src="/assets/pictures/duccit.jpg" alt="Ducc It!" className="w-9/10 object-contain rounded-3xl"></img>
            </div>
            <p className="outfit text-[2vw]"><a href="https://github.com/Dongathan-Jong/ducc-it" target="_blank" className="!underline !text-[#FFFFFF]">Ducc It!</a></p>
            <p className="outfit text-[1vw] ml-2 mr-2 mb-2">A fully custom designed 3D printer that flew to Denver, CO for RMRRF! Under $300 and fully auto-ejects prints.</p>
          </div>
        </div>
      </div>

      <div className="bg-black w-full flex flex-col items-center justify-center">
        <p className="outfit text-[1vw] text-[#575757]">Made with ❤️ by Jonathan Dong</p>
        <div className="flex items-center justify-center">
          
        </div>
      </div>
    </>
  )
}

export default App
