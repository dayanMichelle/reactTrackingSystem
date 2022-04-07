import { useState } from 'react'
import { Formulario } from './components/Formulario'
import { Header } from './components/Header'
import { ListadoPacientes } from './components/ListadoPacientes'


function App() {
  const [pedidos,setPedidos] = useState([])
  const [isEdit,setIsEdit] = useState(false)
  const [currentUser, setCurrentUser] = useState({
    id: '',
    name: '',
    adress: '',
    email: '',
    number:'',
    date: '',
    description:'',
  })

  const edit=(user) => {
   setCurrentUser({
     id: user.id,
    name: user.name,
    adress: user.adress,
    email: user.email,
    number:user.number,
    date: user.date,
    description:user.description,
   })
   setIsEdit(true)
  }

  const updateUser = (id,updatedUser) => {
    setPedidos(pedidos.map(user=>{
      (updatedUser.id === id ? updatedUser : user )
    }))
    console.log(user.id)
    setIsEdit(false)
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
        currentUser={currentUser}  
        updateUser={updateUser}  
        isEdit={isEdit}  />
       
        <ListadoPacientes 
        pedidos={pedidos}
        edit={edit}
        
         />
      </div>
    </div>
  )
}

export default App
