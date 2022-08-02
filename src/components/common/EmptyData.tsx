import React from "react";
import styled from "styled-components";
import picachu from '../../static/images/picachu.png';

type Props = {};

const EmptyData = (props: Props) => {
    return <Empty>
        <img src={picachu} alt="슬픈 피카츄" />
        <span>포켓몬이 없어요..</span>
    </Empty>;
};

export default EmptyData;

const Empty = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 500px;

    > img {
        width: 300px;
    }
`