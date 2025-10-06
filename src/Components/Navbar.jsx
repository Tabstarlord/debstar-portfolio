import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.png'

export default function Navbar() {
  return (
    <>
    <section className='bg-blue-600 sm:bg-red-600 md:bg-amber-900 lg:bg-purple-900 xl:bg-sky-900 2xl:bg-emerald-900'>
      <ul className='flex gap-4 mx-5 mt-2 items-center justify-between sm:justify-normal xl:text-xl 2xl:text-3xl'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/About'>About</Link></li>
        <li><Link to='/Contact'>Contact</Link></li>
        <li><Link to='/Projects'>Projects</Link></li>

        <img src={Logo} alt='Logo' className='w-6 h-6 sm:hidden' />
      </ul>
    </section>
    </>
  )
}
