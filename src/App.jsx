import { useState,useEffect } from 'react'
import { Formulario } from './components/Formulario'
import { Header } from './components/Header'
import { ListadoPacientes } from './components/ListadoPacientes'


function App() {
  const [pedidos,setPedidos] = useState([])
  const [isEdit,setIsEdit] = useState(false)

  //verificando si existe algo el LocalStorage
  useEffect(() => {
   const obtenerLS = () => {
     const pedidosLS = JSON.parse(localStorage.getItem('pedidos')) ?? []
     setPedidos(pedidosLS)
   }
  obtenerLS()
  },[])

  //LocalStorage
  useEffect(() => {
    localStorage.setItem('pedidos',JSON.stringify(pedidos))
  },[pedidos])

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

  const deliteUser = id => {
    const pedidosActualizados = pedidos.filter(user => user.id !== id);
    setPedidos(pedidosActualizados)
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
        isEdit={isEdit}
        setIsEdit={setIsEdit
        }  />
       
        <ListadoPacientes 
        pedidos={pedidos}
        edit={edit}
        deliteUser={deliteUser}
         />
      </div>
    </div>
  )
}

export default App
