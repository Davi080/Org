import "./colaborador.css"
import {AiFillCloseCircle,AiOutlineHeart,AiFillHeart} from "react-icons/ai"

const Colaborador =(props)=>{
    const {nombre,puesto,foto,equipos,id,fav}=props.datos
    const {colorPrimario,eliminarColaborador,like}=props
    return <div className="colaborador">
        <AiFillCloseCircle className="eliminar" onClick={()=>eliminarColaborador(id)}></AiFillCloseCircle>
        <div className="encavezado" style={{backgroundColor:colorPrimario}}>
            <img src={foto}/>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav?<AiFillHeart color="red" onClick={()=>like(id)}></AiFillHeart>:<AiOutlineHeart onClick={()=>like(id)}></AiOutlineHeart>}
            
            
        </div>
    </div>
}
export default Colaborador
