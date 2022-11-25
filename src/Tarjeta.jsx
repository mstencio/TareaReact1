import React from 'react';
import { useState } from 'react';
import './Tarjeta.css'

export default function Tarjeta({cita, citas,setCitas}) {

  
  


  function elim(e){
    setCitas(citas.slice(0,citas))
    
  }
  
  return (
    <div>
      <div className='tarjeta'>
      <div className="card">
        <div className="card-body">
          <h6>Mascota:  <p>{cita.mascota}</p></h6>
          <h6>Dueño:  <p>{cita.dueño}</p></h6>
          <h6>Fecha de ingreso:  <p>{cita.fecha}</p></h6>
          <h6>Hora:  <p>{cita.hora}</p></h6>
          <h6>Sintomas:  <p>{cita.sintomas}</p></h6>
          <button className='btn btn-danger' onClick={elim}>Eliminar</button>
        </div>
      </div>
      </div>
      
    </div>
  )
}

