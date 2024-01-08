import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      descricao: 'estudar JavaScript revendo o exercício do módulo 7',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.CONCLUIDA,
      titulo: 'estudar JavaScript'
    },
    {
      id: 2,
      descricao: 'estudar Material de apoio',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.PENDENTE,
      titulo: 'estudar TypeScript'
    },
    {
      id: 3,
      descricao: 'Praticar a construção de uma landing page',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE,
      titulo: 'estudar Bootstrap'
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    //payloadAction são as informações que estão dentro da action nesse caso queremos uma id do tipo number <number>
    remover: (state, action: PayloadAction<number>) => {
      //atribuiamos no state Atual o metodo filter que irá retornar uma nova array onde não será retornado a tarefa com o id igual a de action.payload
      state.itens = [
        ...(state.itens = state.itens.filter(
          (tarefa) => tarefa.id !== action.payload
        ))
      ]
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      // O metodo filter ira retornar o index que tiver o id igual ao da payload de id( No caso a tarefa que for clicado o botao de salvar )
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      // pq >= 0 pois o metodo findIndex caso não encontrar a condição da busca irá retornar o valor de -1
      if (indexDaTarefa >= 0) {
        //aqui estamos acessando determinado index que for retornado no metodo findIndex
        state.itens[indexDaTarefa] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Tarefa, 'id'>>) => {
      //a gente esta buscando uma tarefa onde o titulo seja igual ao parametro passado
      const tarefaJaExiste = state.itens.find(
        (tarefa) =>
          //verificando se todos os titulos e dando retorno caso o titulo seja igual a payloadAction passada na hora de cadastrar uma nova tarefa
          tarefa.titulo.toLowerCase() === action.payload.titulo.toLowerCase()
      )
      if (tarefaJaExiste) {
        alert('Já existe uma tarefa com esse nome')
      } else {
        const ultimaTarefa = state.itens[state.itens.length - 1]

        const tarefaNova = {
          //Esses '...' signifcam que estamos pegando tudo de determinado array
          ...action.payload,
          id: ultimaTarefa ? ultimaTarefa.id + 1 : 1
        }
        state.itens.push(tarefaNova)
      }
    },
    alteraStatus: (
      state,
      action: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
      //Aqui estamos procurando o index da nossa action que foi acionada
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexDaTarefa >= 0) {
        //Aqui é onde ocorrera a mudança de estado da TAG DE STATUS
        state.itens[indexDaTarefa].status = action.payload.finalizado
          ? enums.Status.CONCLUIDA
          : enums.Status.PENDENTE
      }
    }
  }
})
//AQUI exportamos a action dentro do reducer
export const { remover, editar, cadastrar, alteraStatus } = tarefasSlice.actions
//Aqui exportamos apenas o reducer dentro de slice que sera aplicado dentro da store
export default tarefasSlice.reducer
