'use client'
import Image from 'next/image'
import React from 'react'
import Slider from 'react-infinite-logo-slider'

const Summit = () => {
    return (
        <div className='w-full bg-white px-5 pb-20 pt-20' id='summit'>
            <div className="screen bg-black rounded-[45px] overflow-hidden w-full p-0">
                <div className="flex sm:flex-row flex-col items-center md:px-10 px-3 pt-10 justify-between ">
                    <h2 className='text-white py-3  text-6xl'>YATHRA 2025</h2>
                    <button className='bg-primary group py-1 flex items-center rounded-[35px] px-4 mt-2 w-auto'>
                        <Image src={'/arrowblack.png'} alt='' className='transition-all w-[40px] opacity-50 group-hover:opacity-100' width={500} height={500} />
                        <span className='font-semibold'> SHOW EVENT</span>
                    </button>
                </div>
                <p className='text-white/70 text-xl mt-5 px-10 w-full'>
                    Yathra is the flagship event of the Hult Prize Club at UCEK, aimed at igniting innovation and entrepreneurial thinking among students. Centered around the UN’s Sustainable Development Goals, it offers workshops, networking, and pitching sessions that help participants shape impactful business ideas. Yathra is more than just a competition — it’s a journey of growth, collaboration, and meaningful change...
                </p>
                <div className="mt-3">
                    <Slider
                        width="450px"
                        duration={40}
                        blurBorders={true}
                        blurBorderColor={'#000'}
                    >
                        <Slider.Slide>
                            <div className="px-3">
                                <Image src={'/1.jpg'} alt='' className='h-[240px] rounded-xl object-cover' width={2200} height={2200} />
                            </div>
                        </Slider.Slide>
                        <Slider.Slide>
                            <div className="px-3">
                                <Image src={'/2.jpg'} alt='' className='h-[240px] rounded-xl object-cover' width={2200} height={2200} />
                            </div>
                        </Slider.Slide>
                        <Slider.Slide>
                            <div className="px-3">
                                <Image src={'/3.jpg'} alt='' className='h-[240px] rounded-xl object-cover' width={2200} height={2200} />
                            </div>
                        </Slider.Slide>
                        <Slider.Slide>
                            <div className="px-3">
                                <Image src={'/4.jpg'} alt='' className='h-[240px] rounded-xl object-cover' width={2200} height={2200} />
                            </div>
                        </Slider.Slide>
                    </Slider>
                </div>
                <div className="mt-5 mb-8">
                    <Slider
                        width="450px"
                        duration={50}
                        blurBorders={true}
                        blurBorderColor={'#000'}
                    >
                        <Slider.Slide>
                            <div className="px-3">
                                <Image src={'/5.jpg'} alt='' className='h-[240px] rounded-xl object-cover' width={2200} height={2200} />
                            </div>
                        </Slider.Slide>
                        <Slider.Slide>
                            <div className="px-3">
                                <Image src={'/6.jpg'} alt='' className='h-[240px] rounded-xl object-cover' width={2200} height={2200} />
                            </div>
                        </Slider.Slide>
                        <Slider.Slide>
                            <div className="px-3">
                                <Image src={'/7.jpg'} alt='' className='h-[240px] rounded-xl object-cover' width={2200} height={2200} />
                            </div>
                        </Slider.Slide>
                        <Slider.Slide>
                            <div className="px-3">
                                <Image src={'/8.jpg'} alt='' className='h-[240px] rounded-xl object-cover' width={2200} height={2200} />
                            </div>
                        </Slider.Slide>
                        <Slider.Slide>
                            <div className="px-3">
                                <Image src={'/9.jpg'} alt='' className='h-[240px] rounded-xl object-cover' width={2200} height={2200} />
                            </div></Slider.Slide>
                            <Slider.Slide>
                            <div className="px-3">
                                <Image src={'/10.jpg'} alt='' className='h-[240px] rounded-xl object-cover' width={2200} height={2200} />
                            </div>
                        </Slider.Slide>
                            <Slider.Slide>
                            <div className="px-3">
                                <Image src={'/001.jpg'} alt='' className='h-[240px] rounded-xl object-cover' width={2200} height={2200} />
                            </div>
                        </Slider.Slide>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Summit