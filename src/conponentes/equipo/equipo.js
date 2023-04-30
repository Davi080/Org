import "./equippo.css"
import Colaborador from "../colaboradores/colaborador.js"
import hexToRgba from "hex-to-rgba"
const Equipo =(props)=>{
    const {colorPrimario,colorSecundario,titulo,id}= props.datos
    const {colaboradores,eliminarColaborador,actualizarColor,like}=props

    const bronun={
        backgroundColor: hexToRgba (colorPrimario ,0.6)
    }
    

    return <> {  colaboradores.length> 0 &&
        <section className="equipos" style={bronun}>
            <input type="color" className="Coplorinput" value={hexToRgba (colorPrimario ,0.6)}
                onChange={(evento)=>{
                    actualizarColor(evento.target.value,id)
                }}
            />


        <h3 style={{borderColor:colorPrimario}} >{titulo}</h3>
        <div className="colavoradores">
            
            {
                colaboradores.map((colaborador,index)=><Colaborador 
                datos={colaborador} key={index} colorPrimario={colorPrimario} 
                eliminarColaborador={eliminarColaborador}
                like={like}
                ></Colaborador>)
            }

        </div>
    </section>
}</>}

export default Equipo