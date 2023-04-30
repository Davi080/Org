import "./formulario.css"
import Campotexto from "../campotexto/campotexto.js"
import Listaopciones from "../listaobciones/listasopciones.js"
import Boton from "../buton"
import { useState } from "react"



const Formulario = (props) =>{
    const [nombre,actualizarnombre]=useState("")
    const [puesto,actualizarpuesto]=useState("")
    const [foto,actualizarfoto]=useState("")
    const [equipos,actualizarequipos]=useState("")
    const[titulo,actualizarTitulo]=useState("")
    const[color,actualizarColor]=useState("")

    const {registrarColaborador,crearequipo}=props

    const manejarEnvio =(evento)=>{
        evento.preventDefault()
        console.log("mensaje enviado")
        let datosenviados ={
            nombre,
            puesto,
            foto,
            equipos,
            
        }
        registrarColaborador(datosenviados)
    }
    const manejarNuevoEquipo =(e)=>{
        e.preventDefault()
       crearequipo({titulo:titulo,colorPrimario: color})
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>
                Rellena el formulario para crear colavorador
            </h2>
            <Campotexto 
                titulo="Nombre" 
                placeholder="Ingrese el nombre" 
                required
                valor={nombre}
                actualizarvalor={actualizarnombre}
                ></Campotexto>
            <Campotexto 
                titulo="Puesto" 
                placeholder="Ingrese el puesto" 
                required
                valor={puesto}
                actualizarvalor={actualizarpuesto}
            ></Campotexto>
            <Campotexto 
                titulo="Foto" 
                placeholder="Ingrese enlase de la Foto" 
                required
                valor={foto}
                actualizarvalor={actualizarfoto}
            ></Campotexto>
            <Listaopciones
                valor={equipos}
                actualizarvalor={actualizarequipos}
                equipos={props.equipos}
            ></Listaopciones>
            <Boton texto="Crear"></Boton>
        </form>

        <form onSubmit={manejarNuevoEquipo}>
            <h2>
                Rellena el formulario para crear colavorador
            </h2>
            <Campotexto 
                titulo="Titulo" 
                placeholder="Ingrese Titulo" 
                required
                valor={titulo}
                actualizarvalor={actualizarTitulo}
                ></Campotexto>
            <Campotexto 
                titulo="Color" 
                placeholder="Ingrese el Color en Hex" 
                required
                valor={color}
                actualizarvalor={actualizarColor}
                type="color"
            ></Campotexto>
            <Boton texto="Registrar Equipo">     
            </Boton>
        </form>
    </section>
}

export default Formulario