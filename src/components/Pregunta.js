import React, {Fragment, useState} from 'react';
import Error from './Error';


const Pregunta= ({guardarPresupuesto, guardarRestante, actualizarPregunta})=>{

    //Definir el state y se inicializa con numero 0
    const [cantidad, guardarCantidad]=useState(0);
    //State definido e inicializado en false
    const [error,guardarError]=useState(false);

    //Función que lee el presupuesto
    const definirPresupuesto = e=>{
        guardarCantidad(parseInt(e.target.value, 10))
    }

    //submit para definir el presupuesto
    const agregarPresupuesto = e =>{
        e.preventDefault();

        //validar
        if(cantidad < 1 || isNaN(cantidad)){
            guardarError(true);
            return;
        }
        //si se pasa la validación
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);
    }

    //Retorna formulario en un fragment
    return(
        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            {error ? <Error mensaje="El presupuesto es incorrecto"/> : null}

            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />

                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </Fragment>
    );
}

export default Pregunta;