import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import * as enums from '../../utils/enums/Tarefa'
import { Botao } from '../../styles/index'
type TagProps = {
  prioridade?: enums.Prioridade
  status?: enums.Status
  //o parametro sera passado dentro de const tarefa
  parametro: 'status' | 'prioridade'
}

function retornaCorDeFundo(props: TagProps): string {
  //esse props.parametro esta sendo passado dentro da S.Tag em Tarefa.ts, então la dizemos em qual if nossa função deve entrar
  if (props.parametro === 'prioridade') {
    if (props.prioridade === enums.Prioridade.URGENTE) return variaveis.vermelho
    if (props.prioridade === enums.Prioridade.IMPORTANTE)
      return variaveis.amarelo2
  } else {
    if (props.status === enums.Status.PENDENTE) return variaveis.amarelo
    if (props.status === enums.Status.CONCLUIDA) return variaveis.verde
  }
  return '#ccc'
}
export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 32px;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-wieght: bold;
  margin-left: 8px;
`
//Podemos passar tipagem do typeScript dentro do styled componente com o sinal de maior e menor que
export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  font-size: 10px;
  font-weight: bold;
  color: #fff;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`

export const Descricao = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const BarraAcoes = styled.div`
  border-top: 2px solid rgba(0, 0, 0, 0.15);
`

//Podemos passar tags customizadas para dentro de outra tag customizada utilizando styled como função: "styled()". e passando dentro da função a tag que queremos passar os atributos css
// export const BotaoSalvar = styled(Botao)`
//   background-color: ${variaveis.verde};
// `

export const BotaoRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
