import React, { Fragment, useState } from 'react';

const Formulario = () => {

    // Creamos state para el formulario.

    const [ cita, setCita ] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });
    const [ error, setError ] = useState(false);


    // Función que se ejecuta cuando escribes/cambias en un input.

    const handleChange = e => {
        setCita({
            ...cita,
            [e.target.name]: e.target.value
        });
    }

    // Extraer los valores. 

    const { mascota, propietario, fecha, hora, sintomas } = cita;

    
    // Enviar valores del formulario.

    const handleSubmit = e => {

        e.preventDefault();

        // Validar.

        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
            setError(true);
            return;
        }

        // Asignar ID.

        // Crear la cita.

        // Reiniciar formulario.

    }

    return (
        <Fragment>
            <h2>Registrar cita</h2>

            { error ? <p className="alerta-error">Todos los campos son obligatorios.</p> : null }

            <form onSubmit={handleSubmit}>

                <label htmlFor="">Nombre de la mascota:</label>
                <input 
                    type="text"
                    className="u-full-width" 
                    name="mascota"
                    placeholder="Ingrese el nombre de la mascota..."
                    onChange={ handleChange }
                    value={mascota}
                />

                <label htmlFor="">Nombre del dueño:</label>
                <input 
                    type="text"
                    className="u-full-width" 
                    name="propietario"
                    placeholder="Ingrese el nombre del dueño..."
                    onChange={ handleChange }
                    value={propietario}
                />

                <label htmlFor="">Fecha:</label>
                <input 
                    type="date"
                    className="u-full-width" 
                    name="fecha"
                    onChange={ handleChange }
                    value={fecha}
                />

                <label htmlFor="">Hora:</label>
                <input 
                    type="time"
                    className="u-full-width" 
                    name="hora"
                    onChange={ handleChange }
                    value={hora}
                />

                <label htmlFor="">Describa los síntomas:</label>
                <textarea 
                    className="u-full-width"
                    name="sintomas"
                    onChange={ handleChange }
                    value={sintomas}
                ></textarea>
                
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Registrar cita</button>
            </form>
        </Fragment>
    );
}
 
export default Formulario;