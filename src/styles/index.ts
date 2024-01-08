import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import variaveis from './variaveis'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;

  @media (max-width: 768px) {
    grid-template-columns: 100%;
  }
`
export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`
export const Titulo = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin: 40px 0;
  display: block;
`
export const Campo = styled.input`
  padding: 8px;
  border-radius: 8px;
  background-color: #fff;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
  width: 100%;
`
export const Botao = styled.button`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.cinza};
  border-radius: 8px;
  margin-right: 8px;
  margin-top: 16px;
`
export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`
const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  ${Container} {

  }
`
export default EstiloGlobal
