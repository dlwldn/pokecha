import React, { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { modalState } from "../../lib/store/client/modal";
import { userState } from "../../lib/store/client/user";
import { usePokemonDetail } from "../../lib/store/server/pokemon";
import Bread from "./Bread";

type Props = {};

const GachaContainer = (props: Props) => {
    const [gachaPokemonId, setGachaPokemonId] = useState<number>(0);
    const [showBread, setShowBread] = useState<boolean>(true);
    const [isDuplication, setIsDuplication] = useState<number>(0); // force update
    const {
        data: pokemonDetailList,
        isFetching,
        refetch,
    } = usePokemonDetail([gachaPokemonId], {
        staleTime: 0,
        enabled: gachaPokemonId !== 0,
    });
    const setModalClientState = useSetRecoilState(modalState);
    const [userClientState, setUserClientState] = useRecoilState(userState);

    useEffect(() => {
        if (isFetching) {
            setShowBread(false);
        }
    }, [isFetching]);

    useEffect(() => {
        if (pokemonDetailList) {
            // image preloaded
            const image = new Image();
            image.src = pokemonDetailList.pages[0][0].image;
            image.onload = () => {
                setShowBread(true);
                setModalClientState({
                    showModal: true,
                    targetIndex: 0,
                    pokemonList: pokemonDetailList.pages[0],
                    isNew: isDuplication ? false : true,
                });
                if (!isDuplication) {
                    setUserClientState({
                        pokemonIdList: [
                            ...userClientState.pokemonIdList,
                            ...pokemonDetailList.pages[0].map(
                                (item) => item.id
                            ),
                        ],
                    });
                }
            };
        }
    }, [pokemonDetailList, isDuplication]);

    const onClickBread = () => {
        const randomId = Math.floor(Math.random() * 850) + 1;
        setGachaPokemonId(randomId);
        if (userClientState.pokemonIdList.some((id) => id === randomId)) {
            refetch();
            setIsDuplication(isDuplication + 1);
            return;
        }
        setIsDuplication(0);
    };

    return (
        <GachaWrapper>
            {<Bread onClick={onClickBread} showBread={showBread} />}
        </GachaWrapper>
    );
};

export default GachaContainer;

const GachaWrapper = styled.div`
    width: 100%;
    height: calc(100vh - 140px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 0.3s opacity;
`;
