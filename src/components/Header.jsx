import { Avatar } from "@mui/material"

export const Header = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap:"20px",
      with:'500px',
      margin:'0 auto',
    }}>
    <Avatar 
    style={{
      width:'80px',
      height:'80px',
    }}
     alt="Icon"  src="https://cdn-icons-png.flaticon.com/512/6530/6530079.png" /> 
    <h2 style={
        {
        color:'white',
        textAlign:'center'
        }
    }
      >Track your <span style={{color:'#BB8FCE'}}>ORDERS</span></h2>
    </div>
    
  )
}
