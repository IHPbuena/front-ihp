
import { createRoot } from 'react-dom/client'
import { CajaUsuario} from './components/CajaUsuario'

const root = createRoot(document.getElementById('root'))

root.render(
  <>
    <CajaUsuario nombre='Roberto Gaviño' correo='rober@ihp.com'/>
  </>,
)
