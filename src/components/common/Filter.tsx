import React from "react";
import styled from "styled-components";
import { POKEMON_FILTER_LIST } from "../../lib/constant";
import palette from "../../style/palette";
import FilterTag from "./FilterTag";

type Prop = {
    value: string[];
    onClick: (filterName: string) => void;
};

const Filter = ({ value, onClick }: Prop) => {
    return (
        <FilterWrapper>
            <FilterList>
                <span>타입 :</span>
                {POKEMON_FILTER_LIST.map(({ name, color }, idx) => {
                    return (
                        <FilterTag
                            key={idx}
                            color={color}
                            onClick={onClick}
                            name={name}
                        />
                    );
                })}
            </FilterList>
            {value.length > 0 && (
                <FilterList>
                    <span>선택된 타입 :</span>
                    {POKEMON_FILTER_LIST.filter((item) =>
                        value.includes(item.name)
                    ).map(({ name, color }, idx) => {
                        return (
                            <FilterTag
                                key={idx}
                                color={color}
                                onClick={onClick}
                                name={name}
                            />
                        );
                    })}
                </FilterList>
            )}
        </FilterWrapper>
    );
};

export default Filter;

const FilterWrapper = styled.div`
    background-color: ${palette.white};
    padding: 10px 20px;
    border-bottom: 1px solid ${palette.gray1};
`
const FilterList = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    background-color: ${palette.white};
`;