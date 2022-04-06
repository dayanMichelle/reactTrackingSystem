import { useState } from 'react'
import { Formulario } from './components/Formulario'
import { Header } from './components/Header'
import { ListadoPacientes } from './components/ListadoPacientes'


function App() {
  const [pedidos,setPedidos] = useState([])
  const [currentUser, setCurrentUser] = useState({
    name: '',
    adress: '',
    email: '',
    number:'',
    date: '',
    description:'',
  })

  const edit=(user) => {
   setCurrentUser({
    name: user.name,
    adress: user.adress,
    email: user.email,
    number:user.number,
    date: user.date,
    description:user.description,
   })
  }

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
        currentUser={currentUser}        />
       
        <ListadoPacientes 
        pedidos={pedidos}
        edit={edit}
         />
      </div>
    </div>
  )
}

export default App
