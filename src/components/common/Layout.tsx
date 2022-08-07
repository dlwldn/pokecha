import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'
import palette from '../../style/palette'
import Header from './Header'
import Nav from './Nav'
import ScrollTop from './ScrollTop'

type Props = {}

const Layout = ({ children }: PropsWithChildren<Props>) => {
  return (
    <Wrapper>
        <Content>
            <Header />
            <Nav />
            {children}
        </Content>
        <ScrollTop />
    </Wrapper>
  )
}

export default Layout

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`
const Content = styled.main`
    width: 1200px;
    box-shadow: 0 0 10px ${palette.gray1};
`