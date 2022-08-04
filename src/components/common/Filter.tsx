import React from "react";
import styled from "styled-components";
import { POKEMON_FILTER_LIST } from "../../lib/constant";
import FilterTag from "./FilterTag";

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