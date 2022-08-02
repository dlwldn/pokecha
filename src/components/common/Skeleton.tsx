import React from "react";
import styled from "styled-components";
import theme from "../../style/theme";

type Props = {};

const Skeleton = (props: Props) => {
    return <SkeletonCard />;
};

export default Skeleton;

const SkeletonCard = styled.div`
    border: 1px solid #eee;
    border-radius: 5px;
    height: 240px;
    ${theme.loading.default};
`;
