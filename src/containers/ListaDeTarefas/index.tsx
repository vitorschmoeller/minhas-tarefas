import { useSelector } from 'react-redux'
import Tarefa from '../../components/Tarefa'
import { RootReducer } from '../../store'
import * as S from '../../styles/index'
const ListaDeTarefas = () => {
  //use selector da acesso a nossa store, ele deve ser tipado com o rootReducer
  const { itens } = useSelector((state: RootReducer) => state.tarefas) //nessa arrows function passamos como argumento o state pois o useSelector nos da acesso ao state da store
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  ) //o state nos da acesso a store apos tiparpos o rootReducer
  //Essa função serve para filtrarmos nossa array de itens dentro do reducer de tarefas, ela dara acesso ao titulo e a partir dele utilizamos os metodos/functions filter e search para fazermos o retorno e a busca respectivamente do termo
  function filtraTarefas() {
    let tarefasFiltradas = itens
    if (termo !== undefined) {
      //precisamos especificar pois ele considera uma string vazia como false
      tarefasFiltradas = tarefasFiltradas.filter(
        (itemIndiceAtual) =>
          //caso a busca for satisfeita sera retornado apenas os elementos com os critérios atendidos
          itemIndiceAtual.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.prioridade === valor
        )
      } else if (criterio === 'status') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.status === valor
        )
      }
      return tarefasFiltradas
    } else {
      return itens
    }
  }
  //essa função recebe tarefas.length como argumento
  const exibeResultadoFiltragem = (quantidade: number) => {
    // Inicializa a variável complementacao com uma string vazia
    let mensagem = ''
    const s = quantidade > 1 || quantidade === 0 ? 's' : ''
    const complementacao =
      termo !== undefined && termo.length > 0 ? `e "${termo}"` : ''
    // Verifica o critério e constrói a mensagem correspondente
    if (criterio === 'todas') {
      mensagem = `${quantidade} tarefa${s} encontrada${s} como: todas ${complementacao} `
    } else {
      mensagem = `${quantidade} tarefa${s} encontrada${s} como: "${`${criterio}=${valor}`}"${complementacao}`
    }

    // Retorna a mensagem resultante
    return mensagem
  }

  const tarefas = filtraTarefas()
  const mensagem = exibeResultadoFiltragem(tarefas.length)
  return (
    <S.MainContainer>
      <S.Titulo as="p">{mensagem}</S.Titulo>

      <ul>
        {tarefas.map((t) => (
          //adicionamos o key na primeira tag da repetição, ele deve ser colocado para nosso código saber diferenciar cada repetição
          <li key={t.titulo}>
            <Tarefa
              id={t.id}
              descricao={t.descricao}
              titulo={t.titulo}
              prioridade={t.prioridade}
              status={t.status}
            />
          </li>
        ))}
      </ul>
    </S.MainContainer>
  )
}
export default ListaDeTarefas
