import styled from 'styled-components'
import { Link } from 'react-router-dom'
import variaveis from '../../styles/variaveis'
export const Circulo = styled(Link)`
  display: block;
  height: 64px;
  width: 64px;
  background-color: ${variaveis.verde};
  color: #fff;
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 40px;
`
