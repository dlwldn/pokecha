import { useCallback, useEffect, useState } from "react";

const defaultOption: IntersectionObserverInit = {
    root: null,
    threshold: 0.5,
    rootMargin: "0px",
};

export default function useIntersection(
    element: Element | null,
    option?: IntersectionObserverInit
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
        if (!element) return;

        const observer = new IntersectionObserver(checkIntersection, {
            ...defaultOption,
            ...option,
        });
        observer.observe(element);

        return () => {
            observer && observer.disconnect();
        };
    }, [element]);

    return entry;
}
