import React, { ChangeEvent } from "react";
import styled from "styled-components";
import palette from "../../style/palette";

type Props = {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    onClear?: () => void;
};

function SearchInput({ value, onClear, ...etc }: Props) {
    return (
        <InputWrapper>
            <input type="text" value={value} {...etc} />
            {onClear && value && <button onClick={onClear}>&times;</button>}
        </InputWrapper>
    );
}

export default SearchInput;

const InputWrapper = styled.div`
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    border: 3px solid ${palette.orange};
    width: 220px;
    > input {
        outline: none;
        padding: 0 5px;
        height: 35px;
        border: none;
    }
    > button {
        background-color: unset;
        border: none;
        outline: none;
        font-size: 20px;
        cursor: pointer;
    }
`;
