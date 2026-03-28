import { useState, useEffect, useCallback } from 'react'

export function useTypingEffect(phrases, typingSpeed = 80, deletingSpeed = 40, pauseDuration = 2000) {
  const [displayText, setDisplayText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const tick = useCallback(() => {
    const currentPhrase = phrases[phraseIndex]

    if (!isDeleting) {
      // Typing
      setDisplayText(currentPhrase.substring(0, displayText.length + 1))

      if (displayText.length === currentPhrase.length) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), pauseDuration)
        return
      }
    } else {
      // Deleting
      setDisplayText(currentPhrase.substring(0, displayText.length - 1))

      if (displayText.length === 0) {
        setIsDeleting(false)
        setPhraseIndex((prev) => (prev + 1) % phrases.length)
        return
      }
    }
  }, [displayText, isDeleting, phraseIndex, phrases, pauseDuration])

  useEffect(() => {
    const speed = isDeleting ? deletingSpeed : typingSpeed
    const timer = setTimeout(tick, speed)
    return () => clearTimeout(timer)
  }, [tick, isDeleting, typingSpeed, deletingSpeed])

  return displayText
}
