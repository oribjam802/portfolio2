import React, { ReactNode } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import EmblaProgressBar from '@/components/EmblaProgressBar'
import EmblaCarouselArrowButton from '@src/components/EmblaCarouselArrowButtons'
import { usePrevNextButtons } from '@src/hooks/usePrevNextButtons'
import { useProgressBar } from '@src/hooks/useProgressBar'
import clsx from 'clsx'

type Props = {
  children: ReactNode
  className?: string
  loop?: boolean
  align?: 'start' | 'center' | 'end'
  showArrows?: boolean
  showProgressBar?: boolean
}

const EmblaCarouselWrap: React.FC<Props> = ({
  children,
  className,
  loop = false,
  align = 'start',
  showArrows = true,
  showProgressBar = true,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop,
    align,
  })

  const { selectedIndex, scrollSnaps, progress, onProgressBarClick } =
    useProgressBar(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi)

  return (
    <div className={clsx('relative', className)} ref={emblaRef}>
      <div className="flex space-x-[10%]">{children}</div>

      {(showArrows || showProgressBar) && (
        <>
          {showArrows && (
            <>
              <EmblaCarouselArrowButton
                className="bg-white/15 w-12 h-12 backdrop-blur-lg shadow-[0_0_3px_1px_rgba(81,81,81,0.2)] rounded-full absolute top-0 bottom-0 my-auto -left-[5%] z-20"
                arrowType="prev"
                onClick={onPrevButtonClick}
                disabled={prevBtnDisabled}
              />
              <EmblaCarouselArrowButton
                className="bg-white/15 w-12 h-12 backdrop-blur-lg shadow-[0_0_3px_1px_rgba(81,81,81,0.2)] rounded-full absolute top-0 bottom-0 my-auto -right-[5%] z-20"
                arrowType="next"
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
              />
            </>
          )}

          {showProgressBar && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 max-w-md">
              <EmblaProgressBar
                progress={progress}
                totalSlides={scrollSnaps.length}
                currentIndex={selectedIndex}
                onProgressClick={onProgressBarClick}
                className="w-full"
              />
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default EmblaCarouselWrap
