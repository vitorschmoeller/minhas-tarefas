import * as S from './styles'
import { alterarFiltro } from '../../store/reducers/filtro'
import { useDispatch, useSelector } from 'react-redux'
import * as enums from '../../utils/enums/Tarefa'
import { RootReducer } from '../../store'
export type Props = {
  legenda: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.Prioridade | enums.Status
}
const FiltroCard = ({ legenda, criterio, valor }: Props) => {
  //fazemos atualização do estado através do dispatch
  const dispatch = useDispatch()

  const { filtro, tarefas } = useSelector((state: RootReducer) => state)
  //essa função abaixo server para atribuirmos as cores do card selecionado, passamos ele como resposta no atributo ativo que esta dentro de styles.ts
  const verificaEstaAtivo = () => {
    //essas variaveis irão se comportar como um booleano de true or false
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor
    //Aqui esses dois criterios devem ser verdadeiros para ter o retorno
    return mesmoCriterio && mesmoValor
  }

  const contarTarefas = () => {
    if (criterio === 'todas') return tarefas.itens.length
    if (criterio === 'prioridade') {
      return tarefas.itens.filter((item) => item.prioridade === valor).length
    }
    if (criterio === 'status') {
      return tarefas.itens.filter((item) => item.status === valor).length
    }
  }

  const filtrar = () => {
    //chamamos a action que altera o estado pelo dispatch
    dispatch(
      alterarFiltro({
        criterio,
        valor
      })
    )
  }

  const contador = contarTarefas()
  const ativo = verificaEstaAtivo()
  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
