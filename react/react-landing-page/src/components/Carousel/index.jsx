import useEmblaCarousel from "embla-carousel-react";
import { NextButton, PrevButton, usePrevNextButtons } from "./CarouselButtons";

const Carousel = ({ slides }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
        skipSnaps: false,
    });

    const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
        usePrevNextButtons(emblaApi);

    return (
        <>
            <div className="embla__viewport overflow-hidden" ref={emblaRef}>
                <ul className="embla__container flex  touch-pan-y touch-pinch-zoom p-2 gap-8">
                    {slides.map((slide, index) => (
                        <li
                            key={slide.id || index}
                            className="embla__slide flex-none w-full sm:w-1/2 lg:w-[30%] "
                        >
                            <div className="text-center bg-white p-4 rounded-lg shadow-md h-full flex flex-col">
                                {/* Avatar */}
                                <div className="w-24 h-24 mx-auto mb-4">
                                    <img
                                        src={slide.image}
                                        alt={slide.name}
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                </div>

                                {/* Étoiles */}
                                <div className="flex justify-center mb-2">
                                    {[...Array(5)].map((_, starIndex) => (
                                        <span key={starIndex} className="text-yellow-400">
                                            ★
                                        </span>
                                    ))}
                                </div>

                                {/* Nom */}
                                <h3 className="font-semibold text-xl mb-3">{slide.name}</h3>

                                {/* Texte */}
                                <p className="text-gray-600">{slide.text}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="embla__controls flex justify-center gap-5 mt-7">
                <div className="embla__buttons flex gap-2 items-center">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>
            </div>
        </>
    );
};

export default Carousel;
