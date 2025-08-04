import React from 'react'
import Dot from './dot'

const About = () => {
    return (
        <div className='flex py-20 flex-col screen px-10 bg-black' id='about'>
            <div className="main flex flex-col">
                <span className='text-primary font-semibold text-xl'>ABOUT</span>
                <span className='text-5xl text-white'>ABOUT HULTPRIZE UCK</span>
                <span className='text-white/70 text-xl mt-5 font-light'>
                    Hult Prize UCEK is a student-led organization at the University College of Engineering, Kariavattom, dedicated to fostering innovation and entrepreneurship among students. As part of the global Hult Prize network, we empower students to create sustainable solutions for pressing social challenges through competitions, workshops, and mentorship programs.
                </span>
            </div>
            <div className="flex sm:flex-row flex-col w-full mt-5 border-t-[0.01rem] border-primary">
                <div className="w-50 flex flex-col pt-5 pe-5  pb-5 sm:border-b-[0rem] sm:border-r-[0.01rem] border-b-[0.01rem] border-primary">
                    <span className='sm:text-6xl text-4xl text-white flex items-end'>VISION<Dot /></span>
                    <span className='text-white/70 text-xl mt-5 font-light'>
                    To be a leading platform for nurturing entrepreneurial talent and fostering innovation, empowering students to create impactful solutions that address global challenges and contribute to a sustainable future.
                    </span>
                </div>
                <div className="w-50 flex flex-col mt-5 sm:ps-5 ">
                    <span className='sm:text-6xl text-4xl text-white flex items-end'>MISSION<Dot /></span>
                    <span className='text-white/70 text-xl mt-5 font-light'>
                    To inspire and equip students with the skills, knowledge, and resources needed to become successful entrepreneurs and change-makers, fostering a culture of innovation, collaboration, and social responsibility within the university community.
                    </span>
                </div>
            </div>
        </div>
    )
}

export default About