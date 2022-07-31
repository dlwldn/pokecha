import React from "react";
import styled from "styled-components";
import { PokemonDetailData } from "../../lib/store/server/pokemon";
import palette, { Palette } from "../../style/palette";

type Props = {
    pokemon: PokemonDetailData;
};

const PokemonCard = ({ pokemon }: Props) => {
    return (
        <Card>
            <Name type={pokemon.types[0] as keyof Palette}>
                <div>
                    <span>{String(pokemon.id).padStart(3, "0")}</span>
                    <span>{pokemon.name}</span>
                </div>
            </Name>
            <Image>
                <img src={pokemon.image} alt="" />
            </Image>
            <Tag>
                <span>@Pokémon</span>
            </Tag>
        </Card>
    );
};

export default PokemonCard;

const Card = styled.div`
    position: relative;
    top: 0;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #eee;
    border-radius: 5px;
    transition: 0.3s;
    cursor: pointer;

    :hover {
        top: -10px;
    }
`;
const Name = styled.div<{ type: keyof Palette }>`
    width: 100%;
    margin-bottom: 10px;
    font-weight: 700;
    > div {
        display: inline-block;
        box-shadow: 1px 1px 3px #bfbfbf;
        border-radius: 15px;
        font-size: 13px;
        > span {
            display: inline-block;
            padding: 4px;
        }
        > span:nth-of-type(1) {
            border-radius: 15px;
            background-color: ${({ type }) => type && palette[type]};
            color: #fff;
        }
        > span:nth-of-type(2) {
        }
    }
`;
const Image = styled.div`
    width: 150px;
    height: 150px;
    padding: 10px;
    img {
        width: 100%;
        height: 100%;
    }
`;
const Tag = styled.div`
    width: 100%;
    text-align: right;
    font-weight: 700;
    > span {
        display: inline-block;
        padding: 3px 5px;
        box-shadow: 1px 1px 3px #bfbfbf;
        border-radius: 15px;
        font-size: 12px;
    }
`;
