import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { MainContainer, Titulo, Campo, BotaoSalvar } from '../../styles/index'
import * as S from './styles'
import * as enums from '../../utils/enums/Tarefa'
import { cadastrar } from '../../store/reducers/tarefas'
const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  //campos controlaveis
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  //Armazenamos os enums no campo de 'RADIO' nesse useState
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)

  //Função que irá acionar a action de tarefas dentro da Store
  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()
    dispatch(
      cadastrar({
        titulo,
        prioridade,
        descricao,
        status: enums.Status.PENDENTE
      })
    )
    //quando o submit for acionado o navigate ira alterar a url de voltar para nossa pagina de home
    navigate('/')
  }
  return (
    <MainContainer>
      <Titulo>Nova Tarefa</Titulo>
      <S.Form onSubmit={cadastrarTarefa}>
        <Campo
          value={titulo}
          onChange={(evento) => setTitulo(evento.target.value)}
          type="text"
          placeholder="Título"
        />
        <Campo
          value={descricao}
          onChange={({ target }) => setDescricao(target.value)}
          as="textarea"
          placeholder="Descrição da Tarefa"
        />
        <S.Opcoes>
          <p>Prioridade</p>
          {/* O metodo Object.value Retorna um array com os valores das propriedades de um objeto passado dentro da função e partir do metodo map fazemos uma interação dessa nova array do enum prioridade */}
          {/* e em seguida, o método map é usado para criar elementos JSX para cada valor. */}
          {/* prioridade representa cada valor do objeto enums.Prioridade. */}
          {Object.values(enums.Prioridade).map((prioridade) => (
            <S.Opcao key={prioridade}>
              <input
                value={prioridade}
                name="prioridade"
                type="radio"
                onChange={(evento) =>
                  setPrioridade(evento.target.value as enums.Prioridade)
                }
                id={prioridade}
                //Quando esse expressão for verdadeira o determinado campo será chegado
                defaultChecked={prioridade === enums.Prioridade.NORMAL}
              />{' '}
              <label htmlFor={prioridade}>{prioridade}</label>
            </S.Opcao>
          ))}
        </S.Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </S.Form>
    </MainContainer>
  )
}

export default Formulario
