import { css } from "styled-components";
import transitions from "./transition";

const loadingShimmer = css`
    background-color: #f6f7f9;
    background-image: linear-gradient(
        90deg,
        #f6f7f9 0,
        #f1f1f1 20%,
        #f6f7f9 40%,
        #f6f7f9
    );
    background-size: 99% 100%;
    background-repeat: no-repeat;
    animation-name: ${transitions.loadingShimmer};
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-delay: 1ms;
    animation-iteration-count: infinite;
    animation-fill-mode: backwards;
`;

const loading = {
    default: css`
        ${loadingShimmer}
    `,
};

const tagShadow = css`
    display: inline-block;
    box-shadow: 1px 1px 3px #bfbfbf;
    border-radius: 15px;
`;

const theme = {
    loading,
    tagShadow,
};

export default theme;
