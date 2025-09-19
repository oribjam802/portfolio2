import { useCallback, useEffect, useState } from 'react'
import { EmblaCarouselType } from 'embla-carousel'

type UseProgressBarType = {
  selectedIndex: number
  scrollSnaps: number[]
  progress: number
  onProgressBarClick: (index: number) => void
}

export const useProgressBar = (
  emblaApi: EmblaCarouselType | undefined
): UseProgressBarType => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const [progress, setProgress] = useState(0)

  const onProgressBarClick = useCallback(
    (index: number) => {
      if (!emblaApi) return
      emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    const selected = emblaApi.selectedScrollSnap()
    setSelectedIndex(selected)

    // プログレスを計算 (0-100%)
    const totalSlides = emblaApi.scrollSnapList().length
    if (totalSlides > 1) {
      setProgress((selected / (totalSlides - 1)) * 100)
    } else {
      setProgress(0)
    }
  }, [])

  const onScroll = useCallback((emblaApi: EmblaCarouselType) => {
    // スクロール中のプログレスを計算
    const scrollProgress = emblaApi.scrollProgress()
    setProgress(scrollProgress * 100)
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi
      .on('reInit', onInit)
      .on('reInit', onSelect)
      .on('select', onSelect)
      .on('scroll', onScroll)
  }, [emblaApi, onInit, onSelect, onScroll])

  return {
    selectedIndex,
    scrollSnaps,
    progress,
    onProgressBarClick,
  }
}
