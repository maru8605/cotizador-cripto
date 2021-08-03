import { useState } from "react"

const useMoney = () => {
// State del custom hook
    const [state, setState] = useState('')

    const Select = () => (
        <>
            <label>Moneda:</label>
            <select>
                <option value='MXN'>Peso Mexicano</option>
            </select>
        </>
    )

    // retornar state, interfaz y fn que modifica el state 
    return [state, Select, setState]
}

export default useMoney
