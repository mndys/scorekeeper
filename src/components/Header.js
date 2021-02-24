import React from 'react'
import styled from 'styled-components/macro'

export default function Header({ title }) {
  return (
    <HeaderStyled>
      <Title>{title}</Title>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  padding: 12px;
  background-color: #fb1;
`
const Title = styled.h2`
  text-align: center;
`
