'use client'

import Image from 'next/image'
import React from 'react'

type WorkingStatus = 'working' | 'inactive' | 'away'

type Card = {
    name: string
    title: string
    image: string
    working?: WorkingStatus
    yearsOfService?: number
    buttonText?: string
    buttonUrl?: string
}

const NameCard = ({ 
    name, 
    title, 
    image, 
    working = 'working', 
    yearsOfService = 0,
    buttonText = 'LinkedIn',
    buttonUrl
}: Card) => {
    const isWorking = working === 'working'
    
    const getYearsText = (years: number) => {
        if (years === 0) return 'New'
        if (years === 1) return '1 Year'
        else
        return `${years} Years`
    }

    const getWorkingStatusText = (working: WorkingStatus) => {
        switch (working) {
            case 'working': return 'WORKING'
            case 'away': return 'AWAY'
            case 'inactive': return 'OFFLINE'
            default: return 'UNKNOWN'
        }
    }

    // const handleCardClick = () => {
    //     if (buttonUrl) {
    //         window.open(buttonUrl, '_blank', 'noopener,noreferrer')
    //     }
    // }

    const handleButtonClick = (e: React.MouseEvent) => {
        e.stopPropagation() // Prevent card click when button is clicked
        if (buttonUrl) {
            window.open(buttonUrl, '_blank', 'noopener,noreferrer')
        }
    }

    return (
  <div
    className={`
      group relative w-[300px] h-[480px] flex flex-col justify-between
      rounded-xl overflow-hidden bg-gradient-to-b from-black to-gray-900/70 
      transition-all duration-300 hover:scale-[1.02] 
      hover:shadow-2xl hover:border-gray-600/50 
      ml-2 mt-2 border border-gray-700/50 
      hover:from-pink-600 hover:to-blue-500 
      ${buttonUrl ? 'cursor-pointer' : 'cursor-default'}
    `}
  >
    {/* Image Container stays the same */}
    <div className="relative aspect-[3/4] overflow-hidden m-1">
      <Image 
        src={image} 
        alt={`${name}'s profile`}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-2xl"
        sizes="300px"
        priority={false}
      />
      {/* Working Status Indicator */}
      <div className="absolute bottom-3 left-3">
        <div className={`
          flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm
          ${isWorking 
            ? 'bg-green-500/80 text-green-100 border border-green-500/50' 
            : 'bg-gray-800/20 text-gray-300 border border-gray-800/30'
          }
        `}>
          <div className={`
            w-2 h-2 rounded-full 
            ${isWorking ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}
          `} />
          {getWorkingStatusText(working)}
        </div>
      </div>
    </div>

    {/* Content area fixed height with overflow hidden */}
    <div className="p-4 space-y-3 flex flex-col flex-grow overflow-hidden">
      {/* Name */}
      <div className="text-xl font-semibold text-white truncate">
        {name}
      </div>

      {/* Years of Service Overlay */}
      <div className="absolute top-2 right-5 z-10">
        <div className="px-3 py-1.25 rounded-full text-xs font-semibold backdrop-blur-sm bg-purple-500/70 text-purple-100 border border-purple-600/30">
          {getYearsText(yearsOfService)}
        </div>
      </div>

      {/* Title with fixed max height and overflow */}
      <div className="text-white/80 leading-relaxed max-h-[4.5rem] overflow-hidden">
        <h2 className="text-sm font-medium">
          {title}
        </h2>
      </div>

      {/* Action Button */}
      {buttonUrl && (
        <button
          onClick={handleButtonClick}
          className={`
            w-full px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-200
            bg-gradient-to-r from-blue-600/80 to-blue-700 hover:from-blue-500 hover:to-blue-600
            text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02]
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900
            active:scale-[0.98]
          `}
          aria-label={`${buttonText} for ${name}`}
        >
          <span className="flex items-center justify-center gap-2">
            {buttonText}
            <Image 
              src="/arrowwhite.png" 
              alt="Arrow Icon" 
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" 
              width={500} 
              height={500}
              priority={false}
              />
          </span>
        </button>
      )}
    </div>
  </div>
)

}

export default NameCard