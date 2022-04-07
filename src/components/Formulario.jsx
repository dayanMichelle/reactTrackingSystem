import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
export const Formulario = ({ pedidos, setPedidos, currentUser, isEdit }) => {

  const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm({
    defaultValues: currentUser
  });
  const [pedido, setPedido] = useState({})

  setValue('id', currentUser.id)
  setValue('name', currentUser.name)
  setValue('adress', currentUser.adress)
  setValue('email', currentUser.email)
  setValue('number', currentUser.number)
  setValue('date', currentUser.date)
  setValue('description', currentUser.description)


  const onSubmit = (data) => {
    setPedido(data)

    if (isEdit) {
      setPedidos([
        ...pedidos.filter(user => user.id !== data.id),
        data
      ])
      setValue('id', '')
      setValue('name', '')
      setValue('adress', '')
      setValue('email', '')
      setValue('number', '')
      setValue('date', '')
      setValue('description', '')

    } else {
      setPedidos([...pedidos, data])
    }

    setValue('name', '')
    setValue('adress', '')
    setValue('email', '')
    setValue('number', '')
    setValue('date', '')
    setValue('description', '')


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
        Package Tracking</p>
      <a href=""
        style={{
          color: 'white',
          fontWeight: '300',
          textDecoration: 'none',
        }}>
        Add Packages and
        <span
          style={{
            color: '#BB8FCE',
            fontWeight: '100',
          }}> Manage them</span>
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
            }} >Id:</label>
          <input
            id="id"
            style={{
              width: '95%',
              padding: '10px',
              borderRadius: '5px',
              marginBottom: '10px',
              border: '1px solid #ccc',
            }}type="text"  holder=""
            {...register("id",{ required: "This is required." })}
          />
          <label
            htmlFor="name"
            style={{
              display: 'block',
              textAlign: 'left',
              marginBottom: '10px',
              fontSize: '1.2em',
            }} >Recipient name:</label>
          <input
            id="name"
            style={{
              width: '95%',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }} type="text"  holder="Nombre del destinatario"
            {...register("name",{ required: "This is required." })}
          />
        </div>

        <div style={{ marginBottom: '10px', }}>
          <label
            htmlFor="adress"
            style={{
              display: 'block',
              textAlign: 'left',
              marginBottom: '10px',
              fontSize: '1.2em',
            }} >Address:</label>
          <input
            id="address"
            {...register("address",{ required: "This is required." })}
            style={{
              width: '95%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }} type="text"  holder="Direccion de envio" />
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
            {...register("email",{ required: "This is required." })}
            style={{
              border: '1px solid #ccc',
              borderRadius: '5px',
              width: '95%',
              padding: '10px',
            }} type="email"  holder="Email" />
        </div>

        <div style={{ marginBottom: '10px', }}>
          <label
            htmlFor="number"
            style={{
              display: 'block',
              textAlign: 'left',
              marginBottom: '10px',
              fontSize: '1.2em',
            }} >Phone number:</label>
          <input
            id="number"
            {...register("number",{ required: "This is required." })}
            style={{
              border: '1px solid #ccc',
              borderRadius: '5px',
              width: '95%',
              padding: '10px',
            }} type="text"  holder="Numero" />
        </div>

        <div style={{ marginBottom: '10px', }}>
          <label
            htmlFor="date"
            style={{
              display: 'block',
              textAlign: 'left',
              marginBottom: '10px',
              fontSize: '1.2em',
            }} >Shipping date:</label>
          <input
            id="date"
            {...register("date",{ required: "This is required." })}
            style={{
              border: '1px solid #ccc',
              borderRadius: '5px',
              width: '95%',
              padding: '10px',
            }} type="date"  holder="Numero" />
        </div>

        <div style={{ marginBottom: '10px', }}>
          <label
            htmlFor="description"
            style={{
              display: 'block',
              textAlign: 'left',
              marginBottom: '10px',
              fontSize: '1.2em',
            }} >Description:</label>
          <textarea
            {...register("description",{ required: "This is required." })}
            style={{
              width: '95%',
              height: '100px',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }} id="description" />
        </div>
        <input
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
          value={isEdit ? 'Edit' : 'Add'} />


      </form>
    </div>
  )
}

