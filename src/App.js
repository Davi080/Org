import {useState} from "react"
import {v4 as uuid} from "uuid"
import './App.css';
import Headers from './conponentes/heders/heders.js';
import Formulario from './conponentes/formulario/formulario.js';
import Miorg from './conponentes/mioremg/mioremg.js';
import Equipo from "./conponentes/equipo/equipo.js";
import Footer from "./conponentes/footer/footer.js";

//{Headers()}
function App() {
  const[mostrarformulario, actualizarMostrar]=useState(false)
  const [colaboradores, actualizarColaboradodres]=useState([{
    id:uuid(),
    equipos: "Fromt-End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav:true
    
  },
  {
    id:uuid(),
    equipos: "Programacion",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    fav:false
  },
  {
    id:uuid(),
    equipos: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav:false
  },
  {
    id:uuid(),
    equipos: "Programacion",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav:false
  },
  {
    id:uuid(),
    equipos: "Innovación y  Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav:false
  }])
  
  const [equipos, actualizarEquipos]=useState([
    {
      id:uuid(),
      titulo:"Programacion",
      colorPrimario:"#57C278",
      colorSecundario:"#D9F7E9"
    },
    {
      id:uuid(),
      titulo:"Fromt-End",
      colorPrimario:"#82CFFA",
      colorSecundario:"#E8F8FF"
    },
    {
      id:uuid(),
      titulo:"Data Science",
      colorPrimario:"#A6D157",
      colorSecundario:"#F0F8E2"
    },
    
    {
      id:uuid(),
      titulo:"Devops",
      colorPrimario:"#E06B69",
      colorSecundario:"#FDE7E8"
    },
    {
      id:uuid(),
      titulo:"UX y Diseño",
      colorPrimario:"#DB6EBF",
      colorSecundario:"#FAE9F5"
    },
    {
      id:uuid(),
      titulo:"Móvil",
      colorPrimario:"#FFBA05",
      colorSecundario:"#FFF5D9"
    },
    {
      id:uuid(),
      titulo:"Innovación y  Gestión",
      colorPrimario:"#FF8A29",
      colorSecundario:"#FFEEDF"
    },
])

  

  const cambiarformulario =()=>{
    actualizarMostrar(!mostrarformulario)
  }
  const eliminarColaborador =(id)=>{
    console.log("eliminando",id )
    const nuevoColavorador = colaboradores.filter((colaboradores)=>colaboradores.id !==id)
    actualizarColaboradodres(nuevoColavorador)
  }


  const registrarColaborador = (colaborador)=>{
    console.log("mostrar", colaborador)
    actualizarColaboradodres([...colaboradores, colaborador])
  }
  const actualizarColor=(color,id)=>{
    console.log("actualiza:",color,id)
    const equiposActualizados=equipos.map((equipo)=>{
      if(equipo.id===id){
        equipo.colorPrimario=color
      }
     return equipo
    })
    actualizarEquipos(equiposActualizados)
  }
  const crearequipo =(nuevoEquipo)=>{
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos,{...nuevoEquipo, id: uuid()}])
  }

  const like =(id)=>{
    console.log(id)
    const colavoradoresActualizados = colaboradores.map((colaboradores)=>{
      if(colaboradores.id===id){
        colaboradores.fav = !colaboradores.fav
      }
     return colaboradores
    })
    
   actualizarColaboradodres(colavoradoresActualizados)
  }

  return (
    
      <div>
      <Headers></Headers> 
      {mostrarformulario===true?<Formulario equipos={equipos.map((equipo)=>equipo.titulo)}
        registrarColaborador={registrarColaborador}
        crearequipo={crearequipo}
      ></Formulario>:<></>}
      
      <Miorg cambiarformulario={cambiarformulario}></Miorg>
      { equipos.map((equipo)=><Equipo datos={equipo} key={equipo.titulo}
       colaboradores={colaboradores.filter(colaborador=>colaborador.equipos===equipo.titulo)}
       eliminarColaborador={eliminarColaborador}
       actualizarColor={actualizarColor}
       like={like}
       
      ></Equipo> ) }
      
      <Footer></Footer>
      
      </div>
      
  );
}

export default App;
