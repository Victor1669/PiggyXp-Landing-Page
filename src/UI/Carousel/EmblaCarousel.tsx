import {
  forwardRef,
  useImperativeHandle,
  useState,
  useCallback,
  useEffect,
} from "react";
import type { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";

import "./embla.css";

interface PropType<T> extends React.HTMLAttributes<HTMLDivElement> {
  data: T[];
  render: (item: T, index: number) => React.ReactNode;
  options?: EmblaOptionsType;
  showButtons?: boolean;
}

export interface EmblaCarouselRef {
  next: () => void;
  prev: () => void;
  scrollTo: (index: number) => void;
}

function EmblaCarouselInner<T>(
  { data, render, options, showButtons, ...divProps }: PropType<T>,
  ref: React.ForwardedRef<EmblaCarouselRef>,
) {
  const [canScroll, setCanScroll] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    ...options,
    watchDrag: canScroll,
  });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const checkScroll = useCallback((api: EmblaCarouselType) => {
    setCanScroll(api.scrollSnapList().length > 1);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    checkScroll(emblaApi);
    emblaApi.on("reInit", checkScroll).on("init", checkScroll);

    return () => {
      emblaApi.off("reInit", checkScroll).off("init", checkScroll);
    };
  }, [emblaApi, checkScroll]);

  useImperativeHandle(
    ref,
    () => ({
      next: () => emblaApi?.scrollNext(),
      prev: () => emblaApi?.scrollPrev(),
      scrollTo: (index: number) => emblaApi?.scrollTo(index),
    }),
    [emblaApi],
  );

  const shouldShowButtons = showButtons && canScroll;

  return (
    <div {...divProps} className={`embla ${divProps.className ?? ""}`}>
      {shouldShowButtons && (
        <PrevButton
          className="embla__button"
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
        />
      )}

      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {data.map((item, index) => render(item, index))}
        </div>
      </div>

      {shouldShowButtons && (
        <NextButton
          className="embla__button"
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
        />
      )}
    </div>
  );
}

const EmblaCarousel = forwardRef(EmblaCarouselInner) as <T>(
  props: PropType<T> & {
    ref?: React.Ref<EmblaCarouselRef>;
  },
) => React.ReactElement;

export default EmblaCarousel;
