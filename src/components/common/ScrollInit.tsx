import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useDebounce from "../../hooks/useDebounce";

type Props = {};

const ScrollInit = (props: Props) => {
    const { pathname } = useLocation();
    const [homeScrollY, setHomeScrollY] = useState<number>(0);
    const scrollDebounce = useDebounce(homeScrollY, 300);

    useEffect(() => {
        window.scrollTo(0, pathname === '/' ? scrollDebounce : 0);
        document.addEventListener('scroll', scrollEvent);
        return () => {
            document.removeEventListener('scroll', scrollEvent);
        }
    }, [pathname, scrollDebounce]);

    const scrollEvent = useCallback(() => {
        const scrollPositionY = window.scrollY;
        pathname === '/' && setHomeScrollY(scrollPositionY);
    }, [pathname]) 

    return null;
};

export default ScrollInit;
