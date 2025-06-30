import { useCallback, useEffect, useState } from "react";

export const usePrevNextButtons = (emblaApi) => {
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

    const onPrevButtonClick = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const onNextButtonClick = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => {
            setPrevBtnDisabled(!emblaApi.canScrollPrev());
            setNextBtnDisabled(!emblaApi.canScrollNext());
        };

        onSelect();
        emblaApi.on("reInit", onSelect);
        emblaApi.on("select", onSelect);

        return () => {
            emblaApi.off("reInit", onSelect);
            emblaApi.off("select", onSelect);
        };
    }, [emblaApi]);

    return {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    };
};

export const PrevButton = ({ onClick, disabled }) => (
    <button
        className="appearance-none bg-transparent cursor-pointer hover:border hover:border-primary-600 hover:text-primary-600 p-0 m-0 shadow-[inset_0_0_0_0.2rem_var(--detail-medium-contrast)] w-14 h-14 rounded-full text-text-body flex items-center justify-center disabled:text-detail-high-contrast"
        onClick={onClick}
        disabled={disabled}
        aria-label="Slide précédent"
        type="button"
    >
        <svg className="w-3/5 h-3/5" viewBox="0 0 532 532">
            <path
                fill="currentColor"
                d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
            />
        </svg>
    </button>
);

export const NextButton = ({ onClick, disabled }) => (
    <button
        className="appearance-none bg-transparent hover:border hover:border-primary-600 hover:text-primary-600 cursor-pointer border-0 p-0 m-0 shadow-[inset_0_0_0_0.2rem_var(--detail-medium-contrast)] w-14 h-14 rounded-full text-text-body flex items-center justify-center disabled:text-detail-high-contrast"
        onClick={onClick}
        disabled={disabled}
        aria-label="Slide suivant"
        type="button"
    >
        <svg className="w-3/5 h-3/5" viewBox="0 0 532 532">
            <path
                fill="currentColor"
                d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
            />
        </svg>
    </button>
);
