import Slider, { Settings } from "react-slick";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { POKEMON_FILTER_LIST } from "../../lib/constant";
import { modalState } from "../../lib/store/client/modal";
import palette from "../../style/palette";
import FilterTag from "./FilterTag";

const slickSettings: Settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // lazyLoad: 'ondemand',
    // fade: true,
};

const PokemonDetailModal = () => {
    const { pokemonList, targetIndex } = useRecoilValue(modalState);

    return (
        <SliderWrapper>
            <Slider {...slickSettings} initialSlide={targetIndex}>
                {pokemonList.map((pokemon, idx) => {
                    return (
                        <CarouselContent key={idx}>
                            <ImageWrapper>
                                <img
                                    src={pokemon.image}
                                    alt={`${pokemon.name} 이미지`}
                                />
                            </ImageWrapper>
                            <InfoWrapper>
                                <span>
                                    No.{String(pokemon.id).padStart(3, "0")}
                                </span>
                                <h3>{pokemon.name}</h3>
                                <div>
                                    <span>타입 :</span>
                                    {POKEMON_FILTER_LIST.filter((item) =>
                                        pokemon.types.includes(item.name)
                                    ).map(({ name, color }, idx) => {
                                        return (
                                            <FilterTag
                                                key={idx}
                                                color={color}
                                                name={name}
                                                cursor='default'
                                            />
                                        );
                                    })}
                                </div>
                                <div>
                                    <span>종류 :</span>
                                    <span>{pokemon.genus}</span>
                                </div>
                                <div>
                                    <span>키 :</span>
                                    <span>{pokemon.height / 10}m</span>
                                </div>
                                <div>
                                    <span>몸무게 :</span>
                                    <span>{pokemon.weight / 10}kg</span>
                                </div>
                            </InfoWrapper>
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
        right: -30%;
    }
    .slick-prev {
        left: -30%;
    }
    .slick-next,
    .slick-prev {
        width: 100px;
        height: 100px;
    }
    .slick-prev:before,
    .slick-next:before {
        font-size: 100px;
    }
`;
const CarouselContent = styled.div`
    display: flex !important;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;

    img {
        width: 100%;
        max-width: 475px;
    }
`;
const ImageWrapper = styled.div`
    background-color: ${palette.white};
    border-radius: 50%;
    padding: 20px;
`;
const InfoWrapper = styled.div`
    font-size: 30px;
    font-weight: 700;
    color: ${palette.white};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 25px;
    > span,
    > h3,
    > div {
        margin-bottom: 20px;
    }
    > span,
    > h3 {
        font-size: 45px;
    }
    > span {
        color: ${palette.purple1};
    }
    > h3 {
        margin-bottom: 60px;
    }
    > div {
        display: flex;
        align-items: center;
        > span {
            margin-right: 5px;
        }
    }
`;
