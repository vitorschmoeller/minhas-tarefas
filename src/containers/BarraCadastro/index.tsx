import { Aside1 } from './styles'
import { Botao } from '../../styles'
import { useNavigate } from 'react-router-dom'
const BarraCadastro = () => {
  const navigate = useNavigate()
  return (
    <>
      <Aside1>
        <Botao onClick={() => navigate('/')} type="button">
          Voltar a lista de tarefas
        </Botao>
      </Aside1>
    </>
  )
}
export default BarraCadastro
