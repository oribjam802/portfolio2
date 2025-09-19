import React, { ReactNode } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import EmblaCarouselDotButton from '@src/components/EmblaCarouselDotButton'
import EmblaCarouselArrowButton from '@src/components/EmblaCarouselArrowButtons'
import { usePrevNextButtons } from '@src/hooks/usePrevNextButtons'
import { useDotButton } from '@src/hooks/useDotButton'

import clsx from 'clsx'

type Props = {
  children: ReactNode
  className?: string
  loop?: boolean
  align?: 'start' | 'center' | 'end'
  showArrows?: boolean
  showDots?: boolean
}

const EmblaCarouselWrap: React.FC<Props> = ({
  children,
  className,
  loop = false,
  align = 'start',
  showArrows = true,
  showDots = true,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop,
    align,
  })

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi)

  return (
    <div className={clsx('relative', className)} ref={emblaRef}>
      <div className="flex space-x-[10%]">{children}</div>

      {(showArrows || showDots) && (
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
                className="bg-white/15 w-12 h-12 backdrop-blur-lg shadow-[0_0_3px_1px_rgba(81,81,81,0.2)] rounded-full absolute top-0 bottom-0 my-auto top-0 -right-[5%] z-20"
                arrowType="next"
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
              />
            </>
          )}

          {showDots && (
            <div className="flex space-x-2">
              {scrollSnaps.map((_, index) => (
                <EmblaCarouselDotButton
                  key={index}
                  className={clsx(
                    'w-2 h-2 rounded-full transition-opacity duration-200',
                    'embla__dot',
                    index === selectedIndex
                      ? 'embla__dot--selected bg-gray-800'
                      : 'bg-gray-400 hover:bg-gray-600'
                  )}
                  onClick={() => onDotButtonClick(index)}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default EmblaCarouselWrap
