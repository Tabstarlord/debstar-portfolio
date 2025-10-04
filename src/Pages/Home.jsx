import { Link } from "react-router-dom"

import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"


import Logo from '../assets/Logo.png'
import dp from '../assets/Starlord.jpg'

export default function Home() {
  return (
    <>
    <Navbar />
    <section className="bg-gray-600 mt-2 pb-5">
      <div className="md:flex">
        <div className="hidden md:flex md:bg-gradient-to-b from-blue-900 to-violet-900 md:w-full md:mb-5">
          <img src={Logo} alt="Logo" className="lg:w-129 lg:h-129 xl:w-198 xl:h-198 2xl:w-350 2xl:h-350" />
        </div>
        <div className="bg-slate-900 space-y-3 pt-5 pb-5 mb-5 md:w-fit xl:w-full">
          <img src={dp} alt="Profile Picture" className="w-35 h-35 lg:w-65 lg:h-65 xl:w-115 xl:h-115 2xl:w-260 2xl:h-260 rounded-full items-center mx-auto" />
          <h1 className="text-2xl font-black text-center lg:text-3xl xl:text-4xl lg:text-nowrap xl:mx-3 2xl:text-7xl">Chukwuemeka Henry Izukanne</h1>
          <h4 className="text-md font-serif font-semibold mx-2 text-center xl:text-2xl 2xl:text-4xl">Crafting Seamless User Experiences with Modern Web Technologies</h4>
          <p className="text-xs text-center mx-2 lg:text-md xl:text-3xl 2xl:text-5xl">A passionate frontend developer with a focus on building accessible, high-performance, and visually stunning web applicatins. Dedicated to pixel-perfectdesigs and intuitive user interface</p>

          <button className="w-full"><Link to='/Projects' className="bg-gradient-to-l from-blue-600 to-violet-600 py-1 px-4 rounded-full font-semibold xl:text-2xl 2xl:text-3xl">View My Work</Link></button>
        </div>
      </div>
      <h2 className="text-xl font-bold mx-auto text-center py-2 lg:text-3xl xl:text-5xl 2xl:text-6xl">Innovation Through Code and Design</h2>
        <p className="mx-2 text-center text-sm lg:text-md xl:text-xl 2xl:text-4xl">My journey in frontend development is driven to translate complex ideas into elegant, user-friendly digital experiences. I thrive on solving challenges, constantly learning new technologies,and collaborating to build products that make a real impact. With a strong foundation in responsive design, perfomance optimization, and intuitive UI/UX principles, I am committed to delivering excellence in every project.</p>
    </section>

    <Footer />
    </>
  )
}
