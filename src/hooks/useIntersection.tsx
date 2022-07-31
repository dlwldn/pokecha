import { RefObject, useCallback, useEffect, useState } from "react";

const defaultOption = {
    root: null,
    threshold: 0.5,
    rootMargin: "0px",
};

export default function useIntersection(
    elementRef: RefObject<Element>,
    option?: {
        root: null;
        threshold: number;
        rootMargin: string;
    }
) {
    const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
    const checkIntersection: IntersectionObserverCallback = useCallback(
        ([entry]) => {
            if (entry.isIntersecting) {
                setEntry(entry);
            } else {
                setEntry(entry);
            }
        },
        []
    );

    useEffect(() => {
        if (!elementRef.current) return;

        const observer = new IntersectionObserver(checkIntersection, {
            ...defaultOption,
            ...option,
        });
        observer.observe(elementRef.current);

        return () => {
            observer && observer.disconnect();
        };
    }, [elementRef.current]);

    return entry;
}
