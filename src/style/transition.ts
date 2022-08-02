import { keyframes } from 'styled-components';

const loadingShimmer = keyframes`
    0% {
        background-position: calc(100% * 5) 100%;
    }
    100% {
        background-position: calc(100% * 100) 100%;
    }
`;

const time = {
    default: '0.2s',
};

const defaultTransition = `transition: ${time.default}`;

const transitions = {
    loadingShimmer,
    time,
    defaultTransition,
};

export default transitions;
