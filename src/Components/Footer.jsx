import Git from '../assets/github.png'
import Linkedin from '../assets/linkedin.png'
import Twitter from '../assets/twitter.png'

export default function Footer() {
  return (
    <>
  <div className="text-center my-2 mx-2 md:flex md:justify-between lg:mb-0 xl:items-center">
      <p className="text-xs md:text-sm xl:text-xl 2xl:text-3xl">© 2025 Frontend Developer Portfolio. All rights reserved</p>

    <div className='hidden md:flex space-x-2'>
      <img src={Git} alt='Github Profile' className='w-5 h-5 xl:w-10 xl:h-10 2xl:w-20 2xl:h-20' />
      <img src={Linkedin} alt='Linkedin Profile' className='w-5 h-5 xl:w-10 xl:h-10 2xl:w-20 2xl:h-20' />
      <img src={Twitter} alt='Twitter Profile' className='w-5 h-5 xl:w-10 xl:h-10 2xl:w-20 2xl:h-20' />
    </div>
  </div>
    </>
  )
}
