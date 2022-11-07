Procimport React, { useState } from 'react'


let estadoInicial = {
    // Se genera una fecha como estado inicial del componente
    fecha: new Date(),
    edad: 0,
    nombre: "Martín",
    apellidos: "San José"
 };


const Clock = (props) =>  {
   

const [estado, setEstado] = useState(estadoInicial)



const tick = (estado)=>{
     
    let edad = setEstado(estado.edad+1)
    return {
       ...estado,
       fecha: new Date(),
       edad
    
 };
}



      
   
   const componentDidMount =() =>{

      timerID = setInterval (
         () => tick(), 1000
      );
      
   }


 
 const  componentWillUnmount =() => {
      clearInterval (timerID);
   }
   

      return (
         <div>
         <h2>
         Hora Actual:
         {estado.fecha.toLocaleTimeString()}
         </h2>
         <h3>{estado.nombre} {estado.apellidos}</h3>
         <h1>Edad: {estado.edad}</h1>
         </div>
      )
   
      }

export default Clock;