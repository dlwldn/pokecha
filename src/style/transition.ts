import { keyframes } from 'styled-components';

const loadingShimmer = keyframes`
    0% {
        background-position: calc(100% * 5) 100%;
    }
    100% {
        background-position: calc(100% * 100) 100%;
    }
`;

const shake = keyframes`
    0% {
        transform: rotate(-10deg)
    }
    35% {
        transform: rotate(5deg)
    }
    65% {
        transform: rotate(-10deg)
    }
    100% {
        transform: rotate(5deg)
    }
`;

const time = {
    default: '0.3s',
};

const defaultTransition = `transition: ${time.default}`;

const transitions = {
    time,
    defaultTransition,
    loadingShimmer,
    shake,
};

export default transitions;
