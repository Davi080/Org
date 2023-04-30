import "./listataopciones.css"


const Listaopciones =(props)=>{

    const manejarcambio =(e)=>{
        console.log("cambio", e.target.value)
        props.actualizarvalor(e.target.value)
    }
    return <div className="listaopciones">
        <label >Equipo</label>
        <select value={props.valor} onChange={manejarcambio}>
            <option value="" disabled defaultValue="" hidden>Elegir Equipo</option>
            {props.equipos.map((equipo,index )=>{
             return <option key={index} value={equipo}>{equipo}  </option>
            })}
        </select>
    </div>
} 
export default Listaopciones