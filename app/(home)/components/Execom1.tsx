'use client'

import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import Card from '@/app/components/card' // Your NameCard component
import membersData from '@/app/components/members.json' // Import your members data

// Type definitions
interface Member {
  id: number
  name: string
  title: string
  image: string
  buttonUrl: string
  yearsOfService: number
}

interface DotsIndicatorProps {
  total: number
  activeIndex: number
  onClick: (index: number) => void
}

// Enhanced animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
}

const titleVariants: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.6
    }
  }
}

const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.8,
    rotateY: direction > 0 ? 25 : -25,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 30,
    }
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.8,
    rotateY: direction < 0 ? 25 : -25,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 30,
    }
  })
}

const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.8,
    rotateX: -15,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
      delay: index * 0.1,
      duration: 0.6
    }
  }),
  hover: {
    y: -10,
    scale: 1.02,
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 10
    }
  }
}

const buttonVariants: Variants = {
  idle: { 
    scale: 1,
    boxShadow: "0 0 0 0 rgba(236, 72, 153, 0)"
  },
  hover: { 
    scale: 1.05,
    boxShadow: "0 0 20px 5px rgba(236, 72, 153, 0.3)",
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 10
    }
  },
  tap: { 
    scale: 0.95,
    transition: { duration: 0.1 }
  }
}

const dotVariants: Variants = {
  inactive: { 
    scale: 1,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    boxShadow: "0 0 0 0 rgba(59, 130, 246, 0)"
  },
  active: { 
    scale: 1.2,
    backgroundColor: "rgb(236, 72, 153)",
    boxShadow: "0 0 10px 2px rgba(236, 72, 153, 0.5)",
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 15
    }
  },
  hover: {
    scale: 1.1,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 10
    }
  }
}

const DotsIndicator: React.FC<DotsIndicatorProps> = ({ total, activeIndex, onClick }) => (
  <motion.div 
    className="flex justify-center mt-6 sm:mt-8 gap-2 sm:gap-3"
    initial="hidden"
    animate="visible"
    variants={containerVariants}
  >
    {Array.from({ length: total }).map((_, i: number) => (
      <motion.button
        key={i}
        onClick={() => onClick(i)}
        className="w-3 h-3 sm:w-4 sm:h-4 rounded-full cursor-pointer"
        initial={{ 
          scale: 1,
          backgroundColor: "rgba(255, 255, 255, 0.3)",
        }}
        animate={i === activeIndex ? {
          scale: 1.2,
          backgroundColor: "rgb(236, 72, 153)",
          boxShadow: "0 0 10px 2px rgba(236, 72, 153, 0.5)"
        } : {
          scale: 1,
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          boxShadow: "0 0 0 0 rgba(236, 72, 153, 0)"
        }}
        whileHover={{
          scale: 1.1,
          backgroundColor: "rgba(255, 255, 255, 0.5)"
        }}
        whileTap={{ scale: 0.8 }}
        transition={{
          type: "spring" as const,
          stiffness: 400,
          damping: 15,
          duration: 0.2
        }}
        aria-label={`Go to slide ${i + 1}`}
      />
    ))}
  </motion.div>
)

const CardSlideshow: React.FC = () => {
  const members: Member[] = [
    ...membersData.membersData 
  ]

  const [currentPage, setCurrentPage] = useState<number>(0)
  const [isPlaying, setIsPlaying] = useState<boolean>(true)
  const [cardsPerView, setCardsPerView] = useState<number>(1)
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const [touchStart, setTouchStart] = useState<number>(0)
  const [touchEnd, setTouchEnd] = useState<number>(0)
  const [direction, setDirection] = useState<number>(0)

  const totalPages = useMemo(() => Math.ceil(members.length / cardsPerView), [members.length, cardsPerView])

  // Handle responsive cards per view
  useEffect(() => {
    const handleResize = (): void => {
      const width = window.innerWidth
      let newCardsPerView = 1
      
      if (width >= 1440) newCardsPerView = 4       // 2xl screens - 4 cards
      else if (width >= 1024) newCardsPerView = 4  // lg screens - 4 cards  
      else if (width >= 768) newCardsPerView = 2   // md screens - 2 cards
      else newCardsPerView = 1                     // mobile - 1 card
      
      setCardsPerView(newCardsPerView)
      
      // Reset to first page when screen size changes to avoid being stuck
      const newTotalPages = Math.ceil(members.length / newCardsPerView)
      if (currentPage >= newTotalPages) {
        setCurrentPage(0)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [members.length, currentPage])

  // Auto-play logic with smoother transitions
  useEffect(() => {
    if (!isPlaying || isHovered) return

    const interval = setInterval(() => {
      setDirection(1)
      setCurrentPage((prev: number) => (prev >= totalPages - 1 ? 0 : prev + 1))
    }, 4000) // Slightly faster for better engagement

    return () => clearInterval(interval)
  }, [isPlaying, isHovered, totalPages])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.key === 'ArrowRight') {
        next()
      } else if (e.key === 'ArrowLeft') {
        prev()
      } else if (e.key === ' ') {
        e.preventDefault()
        togglePlayPause()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Navigation functions with direction tracking
  const next = useCallback((): void => {
    setDirection(1)
    setCurrentPage((prev: number) => (prev >= totalPages - 1 ? 0 : prev + 1))
  }, [totalPages])

  const prev = useCallback((): void => {
    setDirection(-1)
    setCurrentPage((prev: number) => (prev <= 0 ? totalPages - 1 : prev - 1))
  }, [totalPages])

  const goTo = useCallback(
    (index: number): void => {
      setDirection(index > currentPage ? 1 : -1)
      setCurrentPage(Math.min(index, totalPages - 1))
    },
    [totalPages, currentPage]
  )

  const togglePlayPause = (): void => setIsPlaying((prev: boolean) => !prev)

  // Enhanced touch handlers
  const handleTouchStart = (e: React.TouchEvent): void => {
    setTouchStart(e.targetTouches[0].clientX)
    setTouchEnd(0)
  }

  const handleTouchMove = (e: React.TouchEvent): void => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = (): void => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe && currentPage < totalPages - 1) {
      next()
    } else if (isRightSwipe && currentPage > 0) {
      prev()
    }

    setTouchStart(0)
    setTouchEnd(0)
  }

  // Get the cards for the current page
  const getCurrentPageCards = () => {
    const startIndex = currentPage * cardsPerView
    const endIndex = startIndex + cardsPerView
    return members.slice(startIndex, endIndex)
  }

  const currentCards = getCurrentPageCards()

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-6 sm:py-8 md:py-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Enhanced Title */}
        <motion.div 
          className="mb-8 sm:mb-10 md:mb-12 text-left"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15, duration: 0.6 }}
        >
          <motion.h1 
            className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 sm:mb-3 font-bold"
            whileHover={{ scale: 1.02, originX: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            EXECOM
          </motion.h1>
          <motion.p 
            className="text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Executive Committee Members
          </motion.p>
        </motion.div>

        {/* Enhanced Slideshow */}
        <motion.div
          className="relative max-w-7xl mx-auto select-none perspective-1000"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          whileHover={{ scale: 1.01 }}
        >
          <motion.div 
            className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-800/40 via-gray-700/30 to-gray-800/40 backdrop-blur-md border border-gray-600/30 p-4 sm:p-6 md:p-8 shadow-2xl"
            animate={{
              boxShadow: isHovered 
                ? "0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(236, 72, 153, 0.1)" 
                : "0 20px 25px -5px rgba(0, 0, 0, 0.6)"
            }}
            transition={{ duration: 0.3 }}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentPage}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className={`grid gap-3 sm:gap-5 md:gap-7 lg:gap-9 ${
                  cardsPerView === 1 
                    ? 'grid-cols-1' 
                    : cardsPerView === 2
                    ? 'grid-cols-2'
                    : 'grid-cols-4'
                }`}
                style={{ perspective: "1000px" }}
              >
                {currentCards.map((member: Member, index: number) => (
                  <motion.div
                    key={`${member.id}-${currentPage}-${index}`}
                    className="w-full h-full"
                    custom={index}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    layout
                  >
                    <Card {...member} />
                  </motion.div>
                ))}
                
                {/* Fill empty slots with animated placeholders */}
                {currentCards.length < cardsPerView && Array.from({ length: cardsPerView - currentCards.length }).map((_, index) => (
                  <motion.div 
                    key={`empty-${index}`} 
                    className="w-full h-full opacity-20 rounded-xl bg-gradient-to-br from-gray-700/20 to-gray-800/20 border border-gray-600/20"
                    animate={{ 
                      opacity: [0.1, 0.3, 0.1],
                      scale: [0.98, 1, 0.98]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      delay: index * 0.5 
                    }}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Enhanced Navigation Controls */}
          <motion.button
            initial={{ scale: 1, boxShadow: "0 0 0 0 rgba(236, 72, 153, 0)" }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px 5px rgba(236, 72, 153, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={prev}
            disabled={currentPage === 0}
            className="hidden sm:block absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full p-3 sm:p-4 text-white hover:bg-white/10 z-20 transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </motion.button>

          <motion.button
            initial={{ scale: 1, boxShadow: "0 0 0 0 rgba(236, 72, 153, 0)" }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px 5px rgba(236, 72, 153, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={next}
            disabled={currentPage === totalPages - 1}
            className="hidden sm:block absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full p-3 sm:p-4 text-white hover:bg-white/10 z-20 transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </motion.button>

          {/* Enhanced Play/Pause Control */}
          <motion.button
            initial={{ scale: 1, boxShadow: "0 0 0 0 rgba(236, 72, 153, 0)" }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px 5px rgba(236, 72, 153, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={togglePlayPause}
            className="absolute top-3 sm:top-5 right-3 sm:right-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full p-3 sm:p-4 text-white hover:bg-white/10 z-20 transition-all"
            aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            <AnimatePresence mode="wait">
              {isPlaying ? (
                <motion.div
                  key="pause"
                  initial={{ opacity: 0, rotate: 180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -180 }}
                  transition={{ duration: 0.2 }}
                >
                  <Pause className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="play"
                  initial={{ opacity: 0, rotate: 180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -180 }}
                  transition={{ duration: 0.2 }}
                >
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ml-0.5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Animated progress bar */}
          {isPlaying && !isHovered && (
            <motion.div 
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 4, ease: "linear", repeat: Infinity }}
            />
          )}
        </motion.div>

        {/* Enhanced Pagination */}
        <DotsIndicator total={totalPages} activeIndex={currentPage} onClick={goTo} />

        {/* Enhanced Footer */}
        <motion.div 
          className="text-left mt-4 sm:mt-6 text-gray-400 text-sm sm:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <span className="font-medium">Page {currentPage + 1} of {totalPages}</span>
          {isPlaying && !isHovered && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="ml-2 text-green-400"
            >
              • Auto-playing
            </motion.span>
          )}
          <span className="ml-3 text-gray-500">
            ({cardsPerView === 1 ? '1 card' : `${cardsPerView} cards`} per view)
          </span>
        </motion.div>

        {/* Enhanced Mobile Navigation */}
        <motion.div 
          className="flex justify-center gap-5 mt-6 sm:hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <motion.button
            initial={{ scale: 1, boxShadow: "0 0 0 0 rgba(236, 72, 153, 0)" }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px 5px rgba(236, 72, 153, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={prev}
            disabled={currentPage === 0}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-full p-4 text-white hover:bg-white/10 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button
            initial={{ scale: 1, boxShadow: "0 0 0 0 rgba(236, 72, 153, 0)" }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px 5px rgba(236, 72, 153, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={next}
            disabled={currentPage === totalPages - 1}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-full p-4 text-white hover:bg-white/10 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </motion.div>

        {/* Enhanced Mobile Swipe Hint */}
        <motion.div 
          className="text-center mt-3 text-gray-500 text-sm sm:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.span
            animate={{ x: [-10, 10, -10] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            ← Swipe to navigate →
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default CardSlideshow