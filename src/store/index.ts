import { configureStore } from '@reduxjs/toolkit'
import tarefasReducer from './reducers/tarefas'
import filtroReducer from './reducers/filtro'
const store = configureStore({
  //rootReducer logo abaixo
  reducer: {
    tarefas: tarefasReducer,
    filtro: filtroReducer
  }
})
//returnType ele vai inferir o tipo da variável
export type RootReducer = ReturnType<typeof store.getState>
export default store
