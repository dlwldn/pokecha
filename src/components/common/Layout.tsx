import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'
import Header from './Header'

type Props = {}

const Layout = ({ children }: PropsWithChildren<Props>) => {
  return (
    <Wrapper>
        <Content>
            <Header />
            {children}
        </Content>
    </Wrapper>
  )
}

export default Layout

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`
const Content = styled.div`
    width: 60%;
`