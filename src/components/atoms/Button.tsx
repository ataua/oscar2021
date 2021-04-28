import styled from 'styled-components'
import { ArrowRight } from '@styled-icons/bootstrap/ArrowRight'
const StyledButton = styled.button`
  display: flex;
  justify-content: space-between;
  * {
    flex: 0 1 2rem;
  }
  margin: 2rem auto;
  padding: 1rem;
  width: 266px;
  line-height: 2rem;
  
  text-transform: uppercase;
  font-weight: bold;
  background: var(--purple-light);
  border: 0;
  border-radius: 8px 8px 6px 6px;

`

export const Button = ({ children, type }) => (
  <StyledButton {...type}>
    {children}
    <span>
      <ArrowRight />
    </span>
  </StyledButton>
)