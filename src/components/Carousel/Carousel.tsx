import { FC } from "react";
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "../EmblaCarouselButtons/EmblaCarouselDotButton";
import { NextButton, PrevButton, usePrevNextButtons } from "../EmblaCarouselButtons/EmblaCarouselArrowButtons";
import Autoplay from 'embla-carousel-autoplay';
import ClassNames from 'embla-carousel-class-names';
import Image from "next/image";

type Props = {
    slides: number[],
    options: EmblaOptionsType
}

const Carousel : FC<Props> = (props) => {
    const {slides, options} = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay(), ClassNames()]);
    const {selectedIndex, scrollSnaps, onDotButtonClick} = useDotButton(emblaApi);

    const {prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick} = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
        <div className="embla__viewport mt-2" ref={emblaRef}>
            <div className="embla__container">
                {slides.map((index) => (
                    <div className="embla__slide embla__class-names" key={index}>
                        <Image className="embla__slide__img rounded-lg" width={600} height={400} src={`/images/dining/dining${index}.jpg`} alt="Dining Photos" />
                    </div>
                ))}
            </div>
        </div>

        <div className="embla__controls">
            <div className="embla__buttons">
                <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
            </div>

            <div className="embla__dots">
                {scrollSnaps.map((_, index) => (
                    <DotButton key={index} onClick={() => onDotButtonClick(index)} className={'embla__dot'.concat(index === selectedIndex ? ' embla__dot--selected' : '')} />
                ))}
            </div>
        </div>
    </section>
  );
};

export default Carousel;