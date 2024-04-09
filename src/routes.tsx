import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import { Home } from './pages/Home'
import { Carrinho } from './pages/Carrinho'
import { Produtos } from './pages/Produtos'
import { Contato } from './pages/Contato'
import { AdminContatos } from './pages/Admin/Contatos'
import { AdminContato } from './pages/Admin/Contato'

export const Rotas = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/carrinho'
          element={<Carrinho />}
        />
        <Route
          path='/produto/:id'
          element={<Produtos />}
        />
        <Route
          path='/contato'
          element={<Contato />}
        />
        <Route
          path='/admin/contatos'
          element={<AdminContatos />}
        />
        <Route
          path='/admin/contato/:id'
          element={<AdminContato />}
        />
      </Routes>
    </BrowserRouter>
  )
}
