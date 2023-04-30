import {useState} from "react"
import "./mioremg.css"


const Miorg =(props)=>{


const [mostrar, actualizarMostrar] = useState(true)

   /* const mensajeoculto =()=>{
       console.log("Mostrar/ocultar elemento",!mostrar)
       actualizarMostrar(!mostrar)
    }*/

    return <section className="orgSection">
        <h3 className="titulo">Mi Organizacion </h3>
        <img src="/img/Botão add-01 1.png" onClick={props.cambiarformulario}></img>

    </section>
}
export default Miorg