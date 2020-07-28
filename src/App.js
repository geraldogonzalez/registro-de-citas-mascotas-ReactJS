import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

  // Citas en el localStorage.

  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales){
    citasIniciales = [];
  }

  // State de arreglo de citas.
  const [ citas, setCitas ] = useState(citasIniciales);

  // useEffect para realizar ciertas operaciones cuando el state es actualizado.
  useEffect( () => {
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));
    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas));
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }

  }, [citas]);

  // Función para almacenar las citas en el state principal.
  const guardarCita = cita => {
    setCitas([ ...citas, cita ]);
  }

  // Función que elimina su cita usando como referencia su ID.
  const eliminarCita = id => {
    const nuevasCitas = citas.filter( cita => cita.id !== id );
    setCitas(nuevasCitas);
  }

  // Título condicional para el componente de citas.
  const titulo = citas.length > 0 ? 'Administra tus citas' : 'No hay citas';

  return (
    <Fragment>

      <h1>Administrador de pacientes</h1>

      <div className="container">

        <div className="row">

          <div className="one-half column">
            <Formulario
              guardarCita={guardarCita}
            />
          </div>

          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map( cita => (
              <Cita 
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>

        </div>

      </div>

    </Fragment>
  );
}

export default App;
