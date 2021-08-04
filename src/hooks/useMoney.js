import { useState } from "react"

const useMoney = (label, stateInicial, opciones) => {
// State del custom hook
    const [state, setState] = useState(stateInicial)

    const Select = () => (
        <>
            <label>{label}</label>
            <select 
             onChange={ e => setState(e.target.value)}
             value={state}
            >
                <option value='MXN'>- Seleccione -</option>
                {opciones.map(opcion => (
                    <option key={opcion.codigo} value={opcion.codigo}>-{opcion.nombre}</option>
                ))}
            </select>
        </>
    )

    // retornar state, interfaz y fn que modifica el state 
    return [state, Select, setState]
}

export default useMoney
