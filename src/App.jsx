import React from 'react';
import Formulario from './Formulario';
import Tarjeta from './Tarjeta';
import { useState } from 'react';
import Header from './Header';
import './App.css'


function App() {

 const [citas, setCitas] = useState([])
 
  
  

  return (
    <div className='App'>
      <div className='contenedor'>
        <Header/>
        <div className='row'>
          <div className='col'>
            <Formulario citas={citas} setCitas={setCitas}/>
          </div>
          <div className='col'>
            <h2 className='text-center' id='cp'>Citas Programadas</h2>
            {citas.map((cita) => (<Tarjeta cita={cita} citas={citas} setCitas={setCitas}/>))}
          </div>
          
        </div>
      </div>
     
      
      
    </div>
  )
}

export default App