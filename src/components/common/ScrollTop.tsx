import React, { useEffect, useState } from "react";
import styled from "styled-components";
import palette from "../../style/palette";
import transitions from "../../style/transition";

type Props = {};

const ScrollTop = (props: Props) => {
    const [showScroll, setShowScroll] = useState<boolean>(false);

    useEffect(()=> {
        document.addEventListener('scroll', scrollEvent);
        return () => {
            document.removeEventListener('scroll', scrollEvent);
        }
    }, [])

    const scrollEvent = () => {
        const scrollPositionY = window.scrollY;
        if(scrollPositionY > 50) {
            setShowScroll(true);
        } else {
            setShowScroll(false);
        }
    }

    const onClickTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    return <Button showScroll={showScroll} onClick={onClickTop}>↑</Button>;
};

export default ScrollTop;

const Button = styled.button<{ showScroll: boolean }>`
    visibility: ${({ showScroll }) => showScroll ? 'visible' : 'hidden' };
    opacity: ${({ showScroll }) => showScroll ? 1 : 0 };
    ${transitions.defaultTransition};
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    font-size: 30px;
    color: ${palette.white};
    background-color: ${palette.ice};
    cursor: pointer;
`
