import { socialLinks } from '@/constants/social'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='w-full px-5 bg-white'>
            <div className='bg-black screen px-10 md:px-20 mt-[-90px] pt-[40px] rounded-t-[60px] relative z-[10]'>
                <Image className='invert w-[180px]' src={'/logo.png'} width={500} height={500} alt='' />
                <span className='text-primary text-xl mt-10'>Quick Links</span>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 pt-10">
                    <div className="flex flex-col gap-4 text-2xl text-white">
                        <Link className='hover:text-primary footer-link group' target="_blank" href='https://www.hultprize.org/'>HULT PRIZE<Image src={'/arrowwhite.png'} alt='' className='transition-all w-[40px] opacity-0 group-hover:opacity-100' width={500} height={500} /></Link>
                        <Link className='hover:text-primary footer-link group' href='/#whyhult'>WHY HULT<Image src={'/arrowwhite.png'} alt='' className='transition-all w-[40px] opacity-0 group-hover:opacity-100' width={30} height={30} /></Link>
                        <Link className='hover:text-primary footer-link group' href='/#summit'>YATHRA 2025<Image src={'/arrowwhite.png'} alt='' className='transition-all w-[40px] opacity-0 group-hover:opacity-100' width={30} height={30} /></Link>
                        <Link className='hover:text-primary footer-link group' href='https://www.hultprize.org/hult-prize-winners/'>WINNERS & FINALISTS<Image src={'/arrowwhite.png'} alt='' className='transition-all w-[40px] opacity-0 group-hover:opacity-100' width={500} height={500} /></Link>
                        
                    </div>
                    <div className="flex flex-col gap-3 text-2xl text-white">
                        <Link className='hover:text-primary footer-link group' href='/#execom'>EXECOM<Image src={'/arrowwhite.png'} alt='' className='transition-all  w-[40px] opacity-0 group-hover:opacity-100' width={30} height={30} /></Link>
                        <Link className='hover:text-primary footer-link group' href='/#events'>EVENTS<Image src={'/arrowwhite.png'} alt='' className='transition-all w-[40px] opacity-0 group-hover:opacity-100' width={30} height={30} /></Link>
                        <Link className='hover:text-primary footer-link group' href='https://uck.ac.in/'>UCEK<Image src={'/arrowwhite.png'} alt='' className='transition-all w-[40px] opacity-0 group-hover:opacity-100' width={30} height={30} /></Link>
                        <Link className='hover:text-primary footer-link group' href='https://www.hultprize.org/code-of-conduct/'>CODE OF CONDUCT<Image src={'/arrowwhite.png'} alt='' className='transition-all w-[40px] opacity-0 group-hover:opacity-100' width={30} height={30} /></Link>
                    </div>
                    <div id='contact' className="text-white pt-3">
                        <p>University College Of Engineering</p>
                        <span className='text-zinc-400'>&copy;  Kariavattom</span>
                        <div className='flex flex-row gap-4 mt-5 flex-wrap justify-center'>
                            {socialLinks.map(E => ((<Link key={E.link} href={E.link} className='border border-zinc-50/30 rounded-[2px] p-1 group hover:bg-primary transition-all'>
                                <E.icon size={30} className='text-zinc-50 opacity-60 group-hover:opacity-100 transition-all' />
                            </Link>)))}
                        </div>
                    </div>
                </div>
                {/* <div className="flex justify-end gap-5 w-full mt-10 p-6">
                    <div className='text-zinc-400 group'>Designed & Developed By &nbsp;<Link className='text-primary inline-flex items-center' target="_blank" href="_blank">Arjun G<Image src={'/arrowwhite.png'} alt='' className='transition-all w-4 h-4 opacity-0 group-hover:opacity-100' width={500} height={500} /></Link></div>
                </div> */}
            </div>
        </div>
    )
}

export default Footer