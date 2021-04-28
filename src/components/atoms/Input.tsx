import styled from 'styled-components'

const StyledLabel = styled.label`
  width: 100%;
  margin: 1rem 2rem;
  padding: 16px;
  color: var(--purple-dark);
  text-transform: uppercase;
  border-bottom: 2px solid var(--purple);
  
  &:visited {
    color: var(--purple-dark);
    font-size: 0.8rem;
  }
  
  input {
    background: transparent;
    font-size: 16px;
    border: 0;
    width: 100%;
  }
`



export const Input = (params: any) => {
  return (
    <StyledLabel>
      <h3>{params.label}</h3>
      <input {...params} />
    </StyledLabel>
  )
}
