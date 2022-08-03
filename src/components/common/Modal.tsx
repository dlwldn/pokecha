import React, { useEffect, useRef } from "react";
import { useRecoilState, useResetRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { modalState } from "../../lib/store/client/modal";
import palette from "../../style/palette";
import PokemonDetailModal from "./PokemonDetailModal";

type Props = {};

const Modal = (props: Props) => {
    const setModalClientState = useSetRecoilState(modalState);
    const dimmerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        window.addEventListener('keyup', keyboardCloseEvent)
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = "";
            window.removeEventListener('keyup', keyboardCloseEvent);
        };
    }, []);

    const keyboardCloseEvent = (e: KeyboardEvent) => {
        if(e.key === 'Escape') modalClose();
    }

    const onClickClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if(e.target === dimmerRef.current) {
            modalClose();
        }
    }
    const modalClose = () => {
        setModalClientState((currVal)=> {
            return {
                ...currVal,
                showModal: false,
            }
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
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Content = styled.div`
    width: 70%;
    background-color: ${palette.white};
`;
