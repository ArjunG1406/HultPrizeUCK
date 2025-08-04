'use client'
import AnimatedContent from '@/app/components/AnimatedContent';
import FadeContent from '@/app/components/FadeContent';
import SplitText from '@/app/components/SplitText';
import Image from 'next/image'
import Link from 'next/link'
import HeroAnimation from './animation';
import React, { useState, useEffect } from 'react'

const handleAnimationComplete = () => {
    console.log('All letters have animated!');
};

const showDuration = 2000; // milliseconds

export default function Hero() {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const showInterval = setInterval(() => {
            setCurrentWordIndex((prev) => (prev + 1) % 3);
        }, showDuration);

        return () => {
            clearInterval(showInterval);
        };
    }, []);

    return <section className="hero bg-white">
        <div className="main relative overflow-hidden min-h-[100vh] flex screen flex-col justify-center">
            <span className='absolute z-[3] w-[90px] border-l-[0.01rem] border-zinc-300/70 right-[1] top-0 bottom-0' />
            <div className="flex flex-col items-start absolute z-[2]">
                <AnimatedContent
                    distance={150}
                    direction="vertical"
                    reverse={false}
                    config={{ tension: 80, friction: 20 }}
                    initialOpacity={0}
                    animateOpacity
                    scale={1.4}
                    threshold={0.2}
                >
                    <h2 className='md:text-7xl sm:text-6xl text-6xl mb-10 px-10 text-start font-regular p-0 mt-[-10px]'>
                        Empowering
                        <br />
                        <span className='font-semibold text-primary tracking-tight'>
                            {currentWordIndex === 0 && <span className={"transition-all animate-fade-in"}>
                                DREAMERS 🎨 
                            </span>}
                            {currentWordIndex === 1 && <span className={"transition-all animate-fade-in "}>
                               POSSIBILITIES💡 
                            </span>}
                            {currentWordIndex === 2 && <span className={"transition-all animate-fade-in "}>
                                VISIONARIES ⚙️
                            </span>}
                        </span>
                        <br />
                        Students among us
                        <span className='font-semibold text-primary'>
                            .
                        </span>
                    </h2>
                </AnimatedContent>
                
                <SplitText
                    text="Let Get Your Dreams Incubated!"
                    className="text-2xl font-regular ps-10 text-center w-auto"
                    delay={15}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    threshold={0.2}
                    rootMargin="-50px"
                    onLetterAnimationComplete={handleAnimationComplete}
                />
                <span className='text-xl ps-10' />
                <FadeContent>
                    <Link target="_blank" href={'https://innovate.startupmission.in/#/register'} className='bg-pink-600 hover:bg-yellow-500 hover:text-black group flex items-center justify-between w-auto rounded-r-full ps-10 pe-3 py-3 mt-3 text-white'>
                        <span className='text-3xl group-hover:tracking-widest transition-all tracking-wider '>JOIN NOW!</span>
                        <span className='bg-primary ms-20 rounded-full px-5 py-3'><Image className='w-5 rotate-[38deg] group-hover:rotate-0 transition-all' src={'/favicon.ico'} width={600} height={600} alt='' /> </span>
                    </Link>
                </FadeContent>

            </div>
            <HeroAnimation />
        </div>
    </section>
}
