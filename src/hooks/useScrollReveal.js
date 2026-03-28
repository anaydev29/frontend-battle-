import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
    )

    const setupObserver = () => {
      document
        .querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children')
        .forEach((el) => observer.observe(el))
    }

    setupObserver()

    const mutationObserver = new MutationObserver(() => {
      setupObserver()
    })
    mutationObserver.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
    }
  }, [])
}
