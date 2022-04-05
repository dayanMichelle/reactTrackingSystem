import { useState } from 'react'
import { Formulario } from './components/Formulario'
import { Header } from './components/Header'
import { ListadoPacientes } from './components/ListadoPacientes'


function App() {
  const [pedidos,setPedidos] = useState([])
  const [pedidoEdit,setPedidoEdit] = useState([])

  return (
    <div
      style={{
        maxWidth: '80%',
        margin: '0 auto'
      }}
    >
      <Header />
      <div style={{
        marginTop: '12px',
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
      }}>
        <Formulario
        pedidos={pedidos}
        setPedidos = {setPedidos}
        pedidoEdit={pedidoEdit}
        />
       
        <ListadoPacientes 
        pedidos={pedidos}
        setPedidoEdit={setPedidoEdit}
         />
      </div>
    </div>
  )
}

export default App
