import React from '../assets/react.png'
import Css from '../assets/css.png'
import Html from '../assets/html.png'
import Javascript from '../assets/javascript.png'
import Code from '../assets/coding.png'
import Tailwind from '../assets/tailwind.png'
import Experience from '../assets/experience.png'
import Education from '../assets/education.png'

import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

export default function About() {
  return (
    <>
    <Navbar />
      <section>
        <h1 className='text-xl text-center font-black mt-5 mb-2 mx-2 md:text-2xl lg:text-3xl'>Crafting Seamless Web Experience</h1>
        <p className='mx-2 text-center mb-5'>A dedicated Frontend Developer passionte about building intuitive,performant, and visually appealing web applications. I thrive on bringing ideas to life with elegant code and thoughtful design.</p>

        <div className='bg-gray-600 space-y-4 md:flex md:gap-5'>
          <div className='bg-gray-500 rounded-md pt-3 space-y-2 md:w-full md:m-3 md:self-start md:rounded-lg'>
            <h5 className='text-2xl font-black mx-2'>Technical Skills</h5>
            <ul className='space-y-6 mx-2 pb-5'>
              <li className='flex justify-between mx-2 items-center'>
                <img src={React} alt='Reactjs' className='w-5 h-5' />
                <p className='text-md font-medium'>React.js</p>
                <input type='range' value={8} min={0} max={10} className='w-20' />
                <div className='space-y-2'>
                  <p className='bg-gray-900 px-2 rounded-3xl font-medium py-1 text-center'>Framework</p>
                  <p className='bg-gray-900 px-2 rounded-3xl font-medium py-1 text-center'>Frontend</p>
                </div>
              </li>

              <li className='flex justify-between mx-2 items-center'>
                <img src={Javascript} alt='Javascript' className='w-5 h-5' />
                <p className='text-md font-medium'>Javascript</p>
                <input type='range' value={6} min={0} max={10} className='w-20' />
                <div className='space-y-2'>
                  <p className='bg-gray-900 px-2 rounded-3xl font-medium py-1 text-center'>Language</p>
                  <p className='bg-gray-900 px-2 rounded-3xl font-medium py-1 text-center'>Frontend</p>
                </div>
              </li>

              <li className='flex justify-between mx-2 items-center'>
                <img src={Html} alt='Html' className='w-5 h-5' />
                <p className='text-md font-medium'>HTML</p>
                <input type='range' value={10} min={0} max={10} className='w-20' />
                <div className='space-y-2'>
                  <p className='bg-gray-900 px-2 rounded-3xl font-medium py-1 text-center'>Language</p>
                  <p className='bg-gray-900 px-2 rounded-3xl font-medium py-1 text-center'>Frontend</p>
                </div>
              </li>

              <li className='flex justify-between mx-2 items-center'>
                <img src={Javascript} alt='Javascript' className='w-5 h-5' />
                <p className='text-md font-medium'>Javascript</p>
                <input type='range' value={6} min={0} max={10} className='w-20' />
                <div className='space-y-2'>
                  <p className='bg-gray-900 px-2 rounded-3xl font-medium py-1 text-center'>Language</p>
                  <p className='bg-gray-900 px-2 rounded-3xl font-medium py-1 text-center'>Frontend</p>
                </div>
              </li>

              <li className='flex justify-between mx-2 items-center'>
                <img src={Tailwind} alt='Tailwind' className='w-5 h-5' />
                <p className='text-md font-medium'>Tailwind CSS</p>
                <input type='range' value={6} min={0} max={10} className='w-20' />
                <div className='space-y-2'>
                  <p className='bg-gray-900 px-2 rounded-3xl font-medium py-1 text-center'>Styling</p>
                  <p className='bg-gray-900 px-2 rounded-3xl font-medium py-1 text-center'>Framework</p>
                </div>
              </li>

              <li className='flex justify-between mx-2 items-center'>
                <img src={Code} alt='Next.Js' className='w-5 h-5' />
                <p className='text-md font-medium'>Next.js</p>
                <input type='range' value={2} min={0} max={10} className='w-20' />
                <div className='space-y-2'>
                  <p className='bg-gray-900 px-2 rounded-3xl font-medium py-1 text-center'>Framework</p>
                  <p className='bg-gray-900 px-2 rounded-3xl font-medium py-1 text-center'>Frontend</p>
                </div>
              </li>

              <li className='flex justify-between mx-2 items-center'>
                <img src={Css} alt='Tailwind' className='w-5 h-5' />
                <p className='text-md font-medium'>CSS Module</p>
                <input type='range' value={4} min={0} max={10} className='w-20' />
                <div className='space-y-2'>
                  <p className='bg-gray-900 px-2 rounded-3xl font-medium py-1 text-center'>Styling</p>
                  <p className='bg-gray-900 px-2 rounded-3xl font-medium py-1 text-center'>Language</p>
                </div>
              </li>


            </ul>
          </div>
          <div className='bg-gray-500 rounded-md pt-3 space-y-2 md:w-fit md:m-3 md:rounded-lg'>
            <h5 className='text-2xl font-black mx-2'>Work Experience</h5>
            <ul className='mx-2 pb-5'>
              <li className='py-5'>
                <div className='flex items-center gap-2'>
                  <img src={Experience} alt='Experience' className='w-6 h-6' />
                <h5 className='text-lg font-bold'>Frontend Developer (Contract)</h5>
                </div>
                <p className='text-lg opacity-70 font-medium'>African Diaries</p>
                <i className='font-medium'>Jan 2025 - Mar 2025</i>
                <p>Designed an adult content platform based  on client specifications. Ensured high performance, accessibility, and cross-device responsiveness. Collaborated with clients remotely to deliver update</p>
              </li>

              <li className='py-5'>
                <div className='flex items-center gap-2'>
                  <img src={Experience} alt='Experience' className='w-6 h-6' />
                <h5 className='text-lg font-bold'>Frontend Developer (Contract)</h5>
                </div>
                <p className='text-lg opacity-70 font-medium'>Sponsoft</p>
                <i className='font-medium'>Jun 2024 - Aug 2024</i>
                <p>Built an affiliate marketing platform with a team using React.js and CSS for a smooth user experience. Developed reusable components and integrated dynamic APIs. Improved app performance and resolved complex UI bugs to enhance responsiveness and accessibility.</p>
              </li>

              <li className='py-5'>
                <div className='flex items-center gap-2'>
                  <img src={Experience} alt='Experience' className='w-6 h-6' />
                <h5 className='text-lg font-bold'>Frontend Developer (Freelance)</h5>
                </div>
                <p className='text-lg opacity-70 font-medium'>Upwork</p>
                <i className='font-medium'>Jun 2024 - Aug 2024</i>
                <p>Delivered customized website solutions for international clients across industries Maintained strong communication and long-term support with clients. Wrote scalable, clean, and maintainable code within timelines and budgets.</p>
              </li>


              <h5 className='text-2xl font-black mx-2 pt-15'>Experience & Education</h5>
              <li className='py-5'>
                <div className='flex items-center gap-2'>
                  <img src={Education} alt='Education' className='w-6 h-6' />
                <h5 className='text-lg font-bold'>B.Sc. in Computer Science</h5>
                </div>
                <p className='text-lg opacity-70 font-medium'>Nnamdi Azikiwe University, Awka</p>
                <i className='font-medium'>May 2017 - Dec 2021</i>
                <p>Graduated with honors, focusing on web development, data structures and algorithms. Completed a capstone project on a real-time chat application using webSockets</p>
              </li>
            </ul>
          </div>
        </div>

        
      </section>
    <Footer />
    </>
  )
}
