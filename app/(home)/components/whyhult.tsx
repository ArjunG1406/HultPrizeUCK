'use client'
import { motion } from 'framer-motion'
import { TextGenerateEffect } from '@/app/components/TextGenerateEffect'
import React from 'react'
import { FaPeopleGroup } from 'react-icons/fa6'
import { GlobeIcon, NetworkIcon, TestTube2Icon } from 'lucide-react'
import Image from 'next/image'

const data = [
    {
        icon: <FaPeopleGroup size={50} />,
        title: 'MENTORING',
        desc: 'Startup bootcamp also provides mentoring support to help the students in developing innovative ideas, setting goals and exploring careers which is best suited.'
    },
    {
        icon: <GlobeIcon size={50} />,
        title: 'INNOVATION',
        desc: 'Startup bootcamp provides students with assistance in projects through innovative ideas which can be utilised for future endeavours'
    },
    {
        icon: <NetworkIcon size={50} />,
        title: 'NETWORKING',
        desc: 'Startup bootcamp also helps students in connecting them with other personalities to identify their potential and increase their opportunities'
    },
    {
        icon: <TestTube2Icon size={50} />,
        title: 'INCUBATION',
        desc: 'Startup bootcamp provides incubation support to students by giving opportunity to express their innovative ideas and make it work'
    }
]
const WhyHult = () => {
    return (
        <div id='whyhult' className="bg-white p-10 rounded-b-[120px]">
            <section className="py-10 screen px-10 mt-10 border-[0.05rem] rounded-[95px] border-primary bg-white ">
                <h1 className="w-full text-center text-6xl">WHY <span className="text-primary font-semibold">HULT PRIZE</span>?</h1>

                <TextGenerateEffect duration={1} className="font-medium text-center text-md" words="Here students take their first step as innovators and entrepreneurs" />
                <div className="grid grid-cols-1 gap-5 md:grid-cols-4 sm:grid-cols-2 mt-10 ">
                    {data.map((item, index) => {
                        return <motion.div key={index} className='border-[0.01rem] z-[10] flex flex-col items-start rounded-[45px] p-5 hover:border-zinc-400 border-zinc-200 ' >
                            <span className='text-slate-700 py-6'>{item.icon}</span>
                            <h3 className='font-medium text-2xl'>{item.title}</h3>
                            <h3 className='font-regular text-md'>{item.desc}</h3>
                            <button className='bg-secondary border-[0.01rem] group transition-all hover:border-black flex items-center rounded-full px-4 mt-2 w-auto'>
                                <Image src={'/arrowblack.png'} alt='' className='transition-all  w-[40px] opacity-50 group-hover:opacity-100' width={500} height={500} />
                                <span> LEARN MORE</span>
                            </button>
                        </motion.div>
                    })}
                </div>
            </section>
        </div>
    )
}

export default WhyHult