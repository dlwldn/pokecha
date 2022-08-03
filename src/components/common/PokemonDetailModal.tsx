import React from "react";
import Slider from "react-slick";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { modalState } from "../../lib/store/client/modal";

const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

type Props = {};

const PokemonDetailModal = () => {
    const { pokemonList, targetIndex } = useRecoilValue(modalState);

    console.log(pokemonList, targetIndex);

    return (
        <SliderWrapper>
            <Slider initialSlide={targetIndex} {...settings}>
                {pokemonList.map((pokemon, idx) => {
                    return (
                        <CarouselContent key={idx}>
                            <h3>{pokemon.name}</h3>
                            <img src={pokemon.image} alt={`${pokemon.name} 이미지`} />
                        </CarouselContent>
                    );
                })}
            </Slider>
        </SliderWrapper>
    );
};

export default PokemonDetailModal;

const SliderWrapper = styled.div`
    height: 100%;

    .slick-next {
        right: -20%;
    }
    .slick-prev {
        left: -20%;
    }
    .slick-next, .slick-prev {
        width: 100px;
        height: 100px;
    }
    .slick-prev:before, .slick-next:before {
        font-size: 100px;
    }
`
const CarouselContent = styled.div`
    display: flex;
`
