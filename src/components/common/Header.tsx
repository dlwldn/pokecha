import React from 'react'
import styled from 'styled-components'

type Props = {}

const Header = (props: Props) => {
  return (
    <HeaderWrapper>Header</HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.header`
    height: 120px;
    padding: 10px;
`