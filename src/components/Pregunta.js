import React, {Fragment} from 'react';



const Pregunta= ()=>{
    //Retorna formulario en fragment
    return(
        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            
            <form>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    
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