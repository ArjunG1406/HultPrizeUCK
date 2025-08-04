import { Timeline } from '@/app/components/Timeline';
import Image from 'next/image';
import React from 'react'

const TimelinePage = () => {
    const data = [
        {
            title: "YATHRA 2025",
            content: (
                <div>
                    <p className="text-neutral-700 text-2xl font-normal mb-8">
                        Yathra'25 is an inter-college idea-pitching competition organized by Hult Prize UCEK, open to UG, PG, and PhD students across Kerala. Aligned with the 17 UN Sustainable Development Goals, it empowers participants to present innovative solutions, collaborate with experts, and drive global change.
                    </p>
                    <Image src={'/005.jpg'} className='rounded-[30px]' alt='yathra' width={800} height={500} />
                </div>
            ),
        },
        {
            title: "SOCIAL ENTERPRENEURSHIP BOOTCAMP",
            content: (
                <div>
                    <p className="text-neutral-700 text-2xl font-normal mb-8">
                        We launched a 3-day bootcamp to kickstart participants’ entrepreneurial journey through hands-on workshops and interactive sessions. The program focuses on business model development and impact measurement, equipping students with proven frameworks to build sustainable ventures that drive measurable change.
                    </p>
                </div>
            ),
        },
        {
            title: "From Problem to Prototype: Master the Art of Product Design!",
            content: (
                <div>
                    <p className="text-neutral-700 text-2xl font-normal mb-8">
                        Led by Shahin Sadath, UX Engineer at QBurst Technologies, this hands-on session will walk participants through transforming real-world challenges into innovative prototypes. With expert guidance and practical insights, attendees will gain the skills needed to design impactful, user-centered solutions.
                     </p>
                </div>
            ),
        },
        {
            title: "BUILDING BUSNIESS WIHT PURPOSE",
            content: (
                <div>
                    <p className="text-neutral-700 text-2xl font-normal mb-8">
                       Experience a powerful talk by Archana Gopinath, Founder of @thereadingroomtvm, TEDx Speaker, and Social Entrepreneur, as she shares insights on building businesses that create lasting impact. Powered by the Hult Prize Team, this session will challenge you to think beyond profits and embrace purpose-driven change.
                     </p>
                </div>
            ),
        },
       
    ];
    return (
        <div className="bg-white">
            <div className="screen overflow-y-hidden pb-[40px]">
                <div className="px-10 pt-10">
                    <h4 className='text-6xl text-black'><span className='font-semibold text-primary'>HULT PRIZE UCEK</span> REWIND</h4>
                </div>
                <Timeline data={data} />
            </div>
        </div>
    )
}

export default TimelinePage