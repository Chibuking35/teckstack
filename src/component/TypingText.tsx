'use client'

import React, { useEffect, useState } from 'react'

interface TypingTextProps {
  text: string
  speed?: number
  className?: string
  startTyping?: boolean // New prop
}

const TypingText = ({ text, speed = 80, className = '', startTyping = true }: TypingTextProps) => {
  const cleanText = text.trim()
  const [displayedText, setDisplayedText] = useState('')
  const [hasTyped, setHasTyped] = useState(false)

  useEffect(() => {
    if (!startTyping || hasTyped) return

    let currentIndex = 0
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + cleanText[currentIndex])
      currentIndex++
      if (currentIndex >= cleanText.length) {
        clearInterval(interval)
        setHasTyped(true)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [cleanText, speed, startTyping, hasTyped])

  return (
    <div className={className}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </div>
  )
}
 export default TypingText                      