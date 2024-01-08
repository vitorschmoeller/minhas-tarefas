import styled from 'styled-components'
import { Aside } from '../BarraLateral/styles'
export const Aside1 = styled(Aside)`
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10vh;
  }

  button {
    margin-bottom: 10px;
  }
`
