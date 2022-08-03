import React from "react";
import styled from "styled-components";
import { POKEMON_TYPE } from "../../lib/constant";
import { changeTypeName } from "../../lib/util";
import palette from "../../style/palette";
import transitions from "../../style/transition";

const POKEMON_FILTER_LIST = Object.keys(POKEMON_TYPE).map((item, idx) => {
    return { name: item, color: Object.values(POKEMON_TYPE)[idx] };
});

type Prop = {
    value: string[];
    onClick: (filterName: string) => void;
};

const Filter = ({ value, onClick }: Prop) => {
    return (
        <div>
            <FilterList>
                <span>타입 :</span>
                {POKEMON_FILTER_LIST.map(({ name, color }, idx) => {
                    return (
                        <FilterListItem
                            key={idx}
                            color={color}
                            onClick={() => onClick(name)}
                        >
                            {changeTypeName(name)}
                        </FilterListItem>
                    );
                })}
            </FilterList>
            {value.length > 0 && <FilterList>
                <span>선택된 타입 :</span>
                {POKEMON_FILTER_LIST.filter(item => value.includes(item.name)).map(({ name, color }, idx) => {
                    return (
                        <FilterListItem
                            key={idx}
                            color={color}
                            onClick={() => onClick(name)}
                        >
                            {changeTypeName(name)}
                        </FilterListItem>
                    );
                })}
            </FilterList>}
        </div>
    );
};

export default Filter;

const FilterList = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 10px 0;
`;
const FilterListItem = styled.div<{ color: string }>`
    color: ${palette.white};
    background-color: ${({ color }) => color};
    padding: 8px 12px;
    margin: 5px;
    border-radius: 10px;
    font-weight: 700;
    transition: ${transitions.defaultTransition};
    cursor: pointer;
    :hover {
        opacity: 0.6;
    }
`;
