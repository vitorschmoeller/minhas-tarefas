import { useDispatch } from 'react-redux'
import { ChangeEvent } from 'react'
import { useEffect, useState } from 'react'
import * as S from './styles'
import { remover, editar, alteraStatus } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefa'
import { BotaoSalvar } from '../../styles'
import * as enums from '../../utils/enums/Tarefa'
import { Botao } from '../../styles'
type Props = TarefaClass

const Tarefa = ({
  titulo,
  prioridade,
  status,
  //aqui a partir desses 2 pontos estamos atribuindo um novo nome para descricao dentro desse codigo
  descricao: descricaoOriginal,
  id
}: Props) => {
  //o dispatch serve para enviar uma ação para nosso Store
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricao, setDescricao] = useState('')

  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDescricao(descricaoOriginal)
    }
  }, [descricaoOriginal])
  function cancelarEdicao() {
    setEstaEditando(false)
    setDescricao(descricaoOriginal)
  }
  //ChangeEvent aparece quando colocamos o mouse sobre o onChange de input. Devemos avisar também com esses sinais <> passando dentro dele o determinado component ex: <HTMLInputElement>

  function alteraStatusTarefa(evento: ChangeEvent<HTMLInputElement>) {
    //O dispatch ta enviando para a store a action para determinado reducer nesse caso para dentro do reducer de tarefas na action de alteraStatus esta passando os determinados dados requisitados do PayloadAction
    dispatch(
      alteraStatus({
        id,
        //Atribuindo o valor do evento.target.checked para a propriedade finalizado
        finalizado: evento.target.checked
      })
    )
  }

  return (
    <S.Card>
      <label htmlFor={titulo}>
        <input
          type="checkbox"
          id={titulo}
          checked={status === enums.Status.CONCLUIDA}
          onChange={alteraStatusTarefa}
        />
        <S.Titulo>
          {estaEditando ? <em>Editando: </em> : ''}
          {titulo}
        </S.Titulo>
      </label>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Descricao
        disabled={!estaEditando}
        value={descricao}
        //Nesse onChange estamos passando o que for digitado a partir do argumento chamado evento para dentro da função e lá dentro da arrowFunction chamamos a função do useState para alterar o valor dentro de descricao com o que for digitado
        onChange={(evento) => setDescricao(evento.target.value)}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    titulo,
                    prioridade,
                    status,
                    descricao,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoRemover
              onClick={() => {
                cancelarEdicao()
              }}
            >
              Cancelar
            </S.BotaoRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}
export default Tarefa
