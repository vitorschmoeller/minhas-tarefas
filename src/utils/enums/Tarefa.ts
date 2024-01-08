export enum Prioridade {
  URGENTE = 'urgente',
  IMPORTANTE = 'importante',
  NORMAL = 'normal'
}
//enum é um tipo de dados que consiste em um conjunto de constantes nomeadas
export enum Status {
  PENDENTE = 'pendente',
  CONCLUIDA = 'concluída'
}
//com o enum podemos tipar variáveis assim dando acesso as propriedades do determinado enum passado com tipagem
// const cabeca: Status = Status.PENDENTE (aqui sera atribuido o valor dentro da propriedade PENDENTE )
