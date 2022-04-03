const Form = () => {
    return(
        <>
            <form>
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