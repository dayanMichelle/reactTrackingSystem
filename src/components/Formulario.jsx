import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
export const Formulario = ({ pedidos, setPedidos,currentUser }) => {

  console.log(currentUser)
  const { register, handleSubmit, watch, formState: { errors },setValue } = useForm({
    defaultValues:currentUser
  });
  const [pedido, setPedido] = useState({})

  setValue('name',currentUser.name)
  setValue('adress',currentUser.adress)
  setValue('email',currentUser.email)
  setValue('number',currentUser.number)
  setValue('date',currentUser.date)
  setValue('description',currentUser.description)


  const generarId = () => crypto.randomUUID()


  const onSubmit = (data) => {
    setPedido(data)
    setPedidos([...pedidos,data])
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

      <form onSubmit={handleSubmit(onSubmit)}
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
            style={{
              width: '95%',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }} type="text" placeholder="Nombre del destinatario"
             {...register("name")}
             />
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
            {...register("address")}
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
            value="fwefw@d.cl"
            {...register("email")}
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
            {...register("number")}
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
            {...register("date")}
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
             {...register("description")}
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

