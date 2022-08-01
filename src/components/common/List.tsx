import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import media from "../../style/media";

type Props = {};

const List = ({ children }: PropsWithChildren<Props>) => {
    return <ListWrapper>{children}</ListWrapper>;
};

export default List;

const ListWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    margin: 20px 0;

    ${media.xlarge} {
        grid-template-columns: repeat(2, 1fr);
    }

    ${media.small} {
        grid-template-columns: repeat(1, 1fr);
    }
`;
