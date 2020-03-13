import React, {useState} from 'react';
import Error from './Error';
import shortid from 'shortid';


const Formulario = ({agregarNuevoGasto})=>{

    //Inicializar state
    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);
    

    //cuando el usuario agrega un gasto
    const agregarGasto = e =>{
        e.preventDefault();

        //validar
        if(cantidad < 1 || isNaN(cantidad) ){
            guardarError(true);
            return;
        }
        guardarError(false);

        //construir el gasto 
        const gasto={
            nombre,
            cantidad,
            //se instala shortid >>npm i shortid
            id: shortid.generate()
        }
        
        //pasar el gasto a componente principal app
        agregarNuevoGasto(gasto);


        //resetear form
        guardarNombre('');
        guardarCantidad(0);
    }

    return (
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aquí</h2>

            {error? <Error mensaje="Los 2 campos son obligatorios o 
            el presupuesto es incorrecto"/> : null}
            
            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej.Transporte"
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Cantidad Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={cantidad}
                    onChange={e=>guardarCantidad(parseInt(e.target.value,10))}
                />
            </div>

            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar"
            />

        </form>
    );
}

export default Formulario;