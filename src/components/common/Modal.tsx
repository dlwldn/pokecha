import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { modalState } from "../../lib/store/client/modal";
import media from "../../style/media";
import PokemonDetailModal from "./PokemonDetailModal";

type Props = {};

const Modal = (props: Props) => {
    const location = useLocation();
    const setModalClientState = useSetRecoilState(modalState);
    const dimmerRef = useRef<HTMLDivElement>(null);
    const [pathKey, setPathKey] = useState<string>(location.key);

    useEffect(() => {
        window.addEventListener("keyup", keyboardCloseEvent);
        document.body.style.cssText = `
            position: fixed; 
            top: -${window.scrollY}px;
            overflow-y: scroll;
            width: 100%;
        `;
        return () => {
            const scrollY = document.body.style.top;
            document.body.style.cssText = "";
            window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
            window.removeEventListener("keyup", keyboardCloseEvent);
        };
    }, []);

    useEffect(() => {
        if(location.key !== pathKey) {
            setPathKey(location.key);
            modalClose();
        }
    }, [location.key])

    const keyboardCloseEvent = (e: KeyboardEvent) => {
        e.key === "Escape" && modalClose();
    };

    const onClickClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.target === dimmerRef.current && modalClose();
    };
    const modalClose = () => {
        setModalClientState((currVal) => {
            return {
                ...currVal,
                showModal: false,
            };
        });
    };

    return (
        <Dimmer ref={dimmerRef} onClick={onClickClose}>
            <Content>
                <PokemonDetailModal />
            </Content>
        </Dimmer>
    );
};

export default Modal;

const Dimmer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Content = styled.div`
    width: 60%;
    min-width: 850px;

    ${media.custom(1350)} {
        min-width: 0;
    }
`;
