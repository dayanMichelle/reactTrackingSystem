import { useState } from "react"
import { Error } from "./error"

export const Formulario = ({ pedidos, setPedidos, pedidoEdit }) => {
  
  const generarId = () => crypto.randomUUID()

  const [pedido, setPedido] = useState({
    name: "",
    address: "",
    email: "",
    number: "",
    date: "",
    description: "",
    id: generarId()
  })
  const [error, setError] = useState(false)
  const hanldeSubmit = (e) => {
    e.preventDefault()

    setPedido((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (pedido.name == '' || pedido.address == '' || pedido.email == '' || pedido.number == '' || pedido.date == '' || pedido.description == '') {
      setError(true)
      return
    }
    setError(false)
    setPedidos([...pedidos, pedido])

    setPedido({
      name: "",
      address: "",
      email: "",
      number: "",
      date: "",
      description: "",
    })


  }

  return (
    <div style={{
      textAlign: 'center',
      margin: '0 auto',
    }}
      className="media2">
      <p
        style={{
          fontSize: '1.8em',
          textAlign: 'center',
        }}>
        Seguimiento del paquete</p>
      <a href=""
        style={{
          color: 'white',
          fontWeight: '300',
          textDecoration: 'none',
        }}>
        Añade Paquetes y
        <span
          style={{
            color: '#BB8FCE',
            fontWeight: '100',
          }}> Administralos</span>
      </a>

      <form onSubmit={hanldeSubmit}
        style={{
          marginBottom: '20px',
          backgroundColor: 'rgb(255, 255, 255, 0.2)',
          color: 'black',
          webkitBoxShadow: '5px 5px 15px 5px rgba(0,0,0,0.32)',
          boxShadow: '5px 5px 15px 5px rgba(0,0,0,0.32)',
          padding: '30px 20px',
          borderRadius: '5px',
          marginTop: '20px',
        }}>
        {error && <Error message='Todos los campos son obligatorios' />}
        <div style={{ marginBottom: '10px', }}>
          <label
            htmlFor="name"
            style={{
              display: 'block',
              textAlign: 'left',
              marginBottom: '10px',
              fontSize: '1.2em',
            }} >Nombre destinatario:</label>
          <input
            id="name"
            value={pedido.name}
            onChange={(e) => setPedido({ ...pedido, name: e.target.value })}
            style={{
              width: '95%',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }} type="text" placeholder="Nombre del destinatario" />
        </div>

        <div style={{ marginBottom: '10px', }}>
          <label
            htmlFor="address"
            style={{
              display: 'block',
              textAlign: 'left',
              marginBottom: '10px',
              fontSize: '1.2em',
            }} >Direccion:</label>
          <input
            id="address"
            onChange={(e) => setPedido({ ...pedido, address: e.target.value })}
            style={{
              width: '95%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }} type="text" placeholder="Direccion de envio" />
        </div>

        <div style={{ marginBottom: '10px', }}>
          <label
            htmlFor="email"
            style={{
              display: 'block',
              textAlign: 'left',
              marginBottom: '10px',
              fontSize: '1.2em',
            }} >Email:</label>
          <input
            id="email"
            onChange={(e) => setPedido({ ...pedido, email: e.target.value })}
            style={{
              border: '1px solid #ccc',
              borderRadius: '5px',
              width: '95%',
              padding: '10px',
            }} type="email" placeholder="Email" />
        </div>

        <div style={{ marginBottom: '10px', }}>
          <label
            htmlFor="number"
            style={{
              display: 'block',
              textAlign: 'left',
              marginBottom: '10px',
              fontSize: '1.2em',
            }} >Numero de telefono:</label>
          <input
            id="number"
            onChange={(e) => setPedido({ ...pedido, number: e.target.value })}
            style={{
              border: '1px solid #ccc',
              borderRadius: '5px',
              width: '95%',
              padding: '10px',
            }} type="text" placeholder="Numero" />
        </div>

        <div style={{ marginBottom: '10px', }}>
          <label
            htmlFor="date"
            style={{
              display: 'block',
              textAlign: 'left',
              marginBottom: '10px',
              fontSize: '1.2em',
            }} >Fecha de envio:</label>
          <input
            id="date"
            onChange={(e) => setPedido({ ...pedido, date: e.target.value })}
            style={{
              border: '1px solid #ccc',
              borderRadius: '5px',
              width: '95%',
              padding: '10px',
            }} type="date" placeholder="Numero" />
        </div>

        <div style={{ marginBottom: '10px', }}>
          <label
            htmlFor="description"
            style={{
              display: 'block',
              textAlign: 'left',
              marginBottom: '10px',
              fontSize: '1.2em',
            }} >Descripcion:</label>
          <textarea
            onChange={(e) => setPedido({ ...pedido, description: e.target.value })}
            style={{
              width: '95%',
              height: '100px',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }} id="description" />
        </div>
        <button
          type="submit"
          className="btn"
          style={{
            width: '100%',
            padding: '15px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: '5px',
            transition: 'all 0.3s ease',
          }}
          value="Agregar envio"
        >Agregar envio
        </button>

      </form>
    </div>
  )
}

