import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import EstiloGlobal from './styles'
import { Container } from './styles'
//O Provider faz a conexão entre o react e nosso estado gerenciado pelo redux
import store from './store'
import Cadastro from './pages/Home/Cadastro'
//createBrowserRouter serve para a gente configurar as paginas e todo o roteamento da aplicação ELE É UMA ARRAY DE OBJETOS
const rotas = createBrowserRouter([
  {
    //quando encontrar a barra algum elementos será renderizado
    path: '/',
    //Aqui é onde o elemento será renderizado podemos usar os componentes do jsx tranquilamente
    element: <Home />
  },
  {
    path: '/novo',
    element: <Cadastro />
  }
])
function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        {/* RouterProvider é o componente que ira gerenciar o createBrowserRouter */}
        <RouterProvider router={rotas} />
        {/* <BarraLateral />
        <ListaDeTarefas /> */}
      </Container>
    </Provider>
  )
}

export default App
