export const mediaQuery = (maxWidth: number) => `
    @media (max-width: ${maxWidth}px)
`

const media = {
    xxlarge: mediaQuery(1920),
    xlarge: mediaQuery(1440),
    large: mediaQuery(1280),
    medium: mediaQuery(1024),
    small: mediaQuery(768),
    xsmall: mediaQuery(576),
    xxsmall: mediaQuery(375),
    custom: mediaQuery,
};

export default media;