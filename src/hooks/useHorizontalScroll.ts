import { useEffect, useRef } from 'react'

export const useHorizontalScroll = () => {
  const stickySectionsRef = useRef<HTMLDivElement[]>([])
  const horizontalScrollRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let animationId: number

    const handleScroll = () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }

      animationId = requestAnimationFrame(() => {
        stickySectionsRef.current.forEach(section => {
          if (section) {
            transform(section)
          }
        })
      })
    }

    const transform = (section: HTMLDivElement) => {
      const offsetTop = section.parentElement?.offsetTop || 0
      const scrollSection = horizontalScrollRef.current

      if (!scrollSection) return

      const scrollY = window.scrollY
      const sectionHeight = window.innerHeight
      const projectCount = scrollSection.children.length
      const scrollProgress = (scrollY - offsetTop) / sectionHeight
      const clampedProgress = Math.max(0, Math.min(scrollProgress, 1))

      // 横スクロールの割合を計算（0-1の範囲）
      const horizontalScrollPercentage =
        Math.floor(clampedProgress * 10000) / 100
      console.log('horizontalScrollPercentage', horizontalScrollPercentage)
      scrollSection.style.transition = 'transform 0.4s ease-out'

      if (0 < horizontalScrollPercentage && horizontalScrollPercentage <= 40) {
        return (scrollSection.style.transform = `translate3d(${0}vw, 0, 0)`)
      } else if (
        40.01 < horizontalScrollPercentage &&
        horizontalScrollPercentage <= 80
      ) {
        return (scrollSection.style.transform = `translate3d(${-100}vw, 0, 0)`)
      } else if (
        80.01 < horizontalScrollPercentage &&
        horizontalScrollPercentage <= 100
      ) {
        return (scrollSection.style.transform = `translate3d(${-200}vw, 0, 0)`)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  const addStickySection = (element: HTMLDivElement | null) => {
    if (element && !stickySectionsRef.current.includes(element)) {
      stickySectionsRef.current.push(element)
    }
  }

  const addHorizontalScroll = (element: HTMLDivElement | null) => {
    horizontalScrollRef.current = element
  }

  return { addStickySection, addHorizontalScroll }
}
