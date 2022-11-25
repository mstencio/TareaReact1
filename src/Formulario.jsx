import React,{useState} from 'react';


import './Formulario.css'

export default function Formulario({citas, setCitas }) {

  const[mascota,setMascota]=useState("");
  const[dueño,setDueño]=useState("");
  const[fecha,setFecha]=useState();
  const[hora,setHora]=useState();
  const[sintomas,setSintomas]=useState("");

    function cambiarMascota(e){
        setMascota(e.target.value)
    }

    function cambiarDueño(e){
        setDueño(e.target.value)
    }
    
    function cambiarFecha(e){
        setFecha(e.target.value)
    }    

    function cambiarHora(e){
        setHora(e.target.value)
    }    

    function cambiarSintomas(e){
        setSintomas(e.target.value)
    }   
    
   
    function agregarCita(e){
      e.preventDefault()
      let cita={mascota, dueño, fecha, hora, sintomas}
      setCitas([...citas,cita])
      setMascota("")
      setDueño("")
      setFecha("")
      setHora("")
      setSintomas("")
      {indice}
     
    }

  return (
    <div>
         <div className="container-fluid">
        <div className="row"id='contenedor'>
            <div className='col bg-'>
              <h2 className='text-center' id='rc'>Registrar Cita</h2>
              <div className="col-lg-6 m-5 ">
                  <form id='form' className='bg- ' onSubmit={agregarCita} >
                      <div className="mb-3 mt-3">
                        <label className="form-label">Nombre Mascota:</label>
                        <input value={mascota} onChange={cambiarMascota} type="text" className="form-control" id="mascota"/>
                      </div>
                      <div className="mb-3">
                        <label  className="form-label">Nombre Dueño:</label>
                        <input value={dueño} onChange={cambiarDueño} type="text" className="form-control" id="dueño"/>
                      </div>
                      <div className="mb-3 mt-3">
                          <label className="form-label">Fecha de Ingreso:</label>
                          <input value={fecha} onChange={cambiarFecha} type="date" className="form-control" id="fecha"/>
                        </div>
                        <div className="mb-3">
                          <label  className="form-label">Hora:</label>
                          <input value={hora} onChange={cambiarHora} type="time" class="form-control" id="hora"/>
                        </div>
                        <div className="mb-3">
                          <label  className="form-label">Sintomas:</label>
                          <textarea value={sintomas} onChange={cambiarSintomas} className="form-control" id="sintomas" rows="3"></textarea>
                        </div>   
                        <input id='btn' className='mb-3 btn' type="submit" value={"Agregar Cita"} />
                    </form>
                    
                    <hr/>
              </div>
            </div>
            
        </div>  
      </div> 
    </div>
  )
}

