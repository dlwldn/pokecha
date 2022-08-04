import React from "react";
import styled from "styled-components";
import { changeTypeName } from "../../lib/util";
import palette from "../../style/palette";
import transitions from "../../style/transition";

type Props = {
    color: string;
    name: string;
    onClick?: (name: string) => void;
    cursor?: CursorType;
};
type CursorType = "pointer" | "default";

const FilterTag = ({ color, name, cursor = "pointer", onClick = () => {} }: Props) => {
    return (
        <Tag
            cursor={cursor}
            color={color}
            onClick={() => onClick(name)}
        >
            {changeTypeName(name)}
        </Tag>
    );
};

export default FilterTag;

const Tag = styled.div<{ color: string; cursor: CursorType }>`
    color: ${palette.white};
    background-color: ${({ color }) => color};
    padding: 8px 12px;
    margin: 5px;
    border-radius: 10px;
    font-weight: 700;
    transition: ${transitions.defaultTransition};
    cursor: ${({ cursor }) => cursor};
    :hover {
        opacity: ${({ cursor }) => cursor === "pointer" && 0.6};
    }
`;
