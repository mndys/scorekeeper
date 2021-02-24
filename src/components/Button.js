import styled from 'styled-components/macro'

export default styled.button`
  ${props => props.isActive && 'background: #fb1;'}
  border: 1px solid black;
  width: 100%;
`
