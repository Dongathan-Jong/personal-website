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
        <div className="bg-yellow-700 flex flex-col w-screen h-[1000px] items-center justify-center">
          <p className="biorhyme-expanded-extrabold text-[10vw]">Skills</p>

          <div id="default-carousel" class="relative w-full" data-carousel="slide">
            <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <p className="outfit">Here are some of my skills!</p>
              </div>
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <p className="outfit">Here are some of my skills!</p>
              </div>
            </div>

            <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
              <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
              <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
            </div>

            <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                    </svg>
                    <span class="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span class="sr-only">Next</span>
                </span>
            </button>
          </div>



          <div className="grid grid-cols-5 w-full h-full items-stretch gap-2">
            <div className="bg-black  w-4/5 h-[200px] rounded-3xl">
              <p className="outfit">Arduino</p>
            </div>
            <div className="bg-black  w-4/5 h-[200px] rounded-3xl">
              <p className="outfit">Raspberry Pi</p>
            </div>
            <div className="bg-black  w-4/5 h-[200px] rounded-3xl">
              <p className="outfit">Java</p>
            </div>
            <div className="bg-black  w-4/5 h-[200px] rounded-3xl">
              <p className="outfit">C / C# / C++</p>
            </div>
            <div className="bg-black  w-4/5 h-[200px] rounded-3xl">
              <p className="outfit">HTML, Tailwind, React</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
