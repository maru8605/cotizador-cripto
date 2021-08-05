import { useState } from "react"
import styled from '@emotion/styled'

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #fff;
    text-transform: uppercase;
    font-weight:bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;

const ISelect = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    font-size: 1.2rem;
    border-radius:10px;
    border: none;
    --webkit-appearance: none;
`

const useMoney = (label, stateInicial, opciones) => {
// State del custom hook
    const [state, setState] = useState(stateInicial)

    const Select = () => (
        <>
            <Label>{label}</Label>
            <ISelect 
             onChange={ e => setState(e.target.value)}
             value={state}
            >
                <option value='MXN'>- Seleccione -</option>
                {opciones.map(opcion => (
                    <option key={opcion.codigo} value={opcion.codigo}>-{opcion.nombre}</option>
                ))}
            </ISelect>
        </>
    )

    // retornar state, interfaz y fn que modifica el state 
    return [state, Select, setState]
}

export default useMoney
