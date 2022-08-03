import React from "react";
import styled from "styled-components";
import picachu from "../../static/images/picachu-sad.png";
import media from "../../style/media";

type Props = {};

const EmptyData = (props: Props) => {
    return (
        <Empty>
            <img
                src={picachu}
                alt="슬픈 피카츄"
                title="포켓몬이 없어 슬픈 피카츄"
            />
        </Empty>
    );
};

export default EmptyData;

const Empty = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 500px;

    > img {
        width: 100%;
        max-width: 400px;
    }

    ${media.custom(660)} {
        min-height: 400px;
    }
`;
