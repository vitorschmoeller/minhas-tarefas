import BarraLateral from '../../../containers/BarraLateral'
import Formulario from '../../../containers/Formulario'
const Cadastro = () => {
  return (
    <>
      {/* barra laderal */}
      <BarraLateral mostrarFiltros={false} />
      <Formulario />
    </>
  )
}

export default Cadastro
