import { useState } from "react"
import "./campotexto.css"
const Campotexto =(props)=>{
  
  const{type="text"}=props
  console.log(type)
  const manejarCambio=(e)=>{
   
    props.actualizarvalor(e.target.value)
  }
const placeholdermodificado=`${props.placeholder}...`
   return <div className={`campo campo-${type}`}>
            <label>{props.titulo}</label>
            <input 
            placeholder={placeholdermodificado} 
            required={props.required} 
            value={props.valor} 
            onChange={manejarCambio}
            type={type}
            ></input> 
          </div>
}
export default Campotexto