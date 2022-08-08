import React, { ChangeEvent } from "react";
import styled from "styled-components";
import palette from "../../style/palette";

type Props = {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    onClear?: () => void;
};

const SearchInput = ({ value, onClear, ...etc }: Props) => {
    return (
        <SearchWrapper>
            <InputWrapper>
                <input type="text" value={value} {...etc} />
                {onClear && value && <button onClick={onClear}>&times;</button>}
            </InputWrapper>
        </SearchWrapper>
    );
};

export default SearchInput;

const SearchWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px 0;
    background-color: ${palette.gray1};
    border-radius: 15px;
`;
const InputWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-right: 3px solid ${palette.red};
    border-left: 3px solid ${palette.red};
    border-radius: 5px;
    width: 100%;
    > input {
        outline: none;
        padding: 0 10px;
        height: 50px;
        border: none;
        width: 100%;
        background: ${palette.white};
        color: ${palette.black1};
        font-size: 20px;
        font-weight: 700;
    }
    > button {
        background-color: ${palette.white};
        color: ${palette.black1};
        height: 100%;
        font-size: 30px;
    }
`;
