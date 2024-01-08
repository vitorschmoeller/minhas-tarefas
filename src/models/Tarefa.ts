import * as enums from '../utils/enums/Tarefa'
//Criamos um classe de um objeto que será usada para a criação de Tarefas dentro do nosso inicialState
class Tarefa {
  titulo: string
  prioridade: enums.Prioridade
  status: enums.Status
  descricao: string
  id: number

  //Aqui no constructor serão os valores que deveram ser passados na hora de criarmos uma nova instância da classe
  constructor(
    titulo: string,
    prioridade: enums.Prioridade,
    status: enums.Status,
    descricao: string,
    id: number
  ) {
    //o this faz referência a nossa classe Tarefa dando acesso as suas propriedades
    this.titulo = titulo //em cada um desses this atribuimos o argumento que sera passado em ordem em nossa nova instância por exemplo ' New Tarefa('teste', enums.Prioridade.Importante ...)  '
    this.prioridade = prioridade
    this.status = status
    this.descricao = descricao
    this.id = id
  }
}
// criando nova instância a partir da class Tarefa
// new Tarefa(
//   'cebola',
//   enums.Prioridade.NORMAL,
//   enums.Status.CONCLUIDA,
//   'ceborinha',
//   10
// )

export default Tarefa
