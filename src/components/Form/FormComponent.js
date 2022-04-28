import React from 'react';

const Form = () => {
    return(
        <>
            <form className="form-contact">
                <label> Nombre y Apellido
                    <input type="text" />
                </label>
                <label> Correo Electronico
                    <input type="text" />
                </label>
                <label>Mensaje:
                    <textarea></textarea>
                </label>
                <button>Enviar Formulario</button>
            </form>
        </>
    )
}

export default Form;