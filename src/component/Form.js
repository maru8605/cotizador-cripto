import {useState, useEffect} from 'react'
import styled from '@emotion/styled'
import useMoney from '../hooks/useMoney';
import useCriptomoneda from '../hooks/useCriptomoneda';
import Error from './Error';
import axios from 'axios'

const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66A2FE;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #fff;
    transition: background-color .3s ease;

    &:hover{
        background-color: #326ac0;
        cursor: pointer;
    }
`;
const Form = () => {

// guardar lista cripto
    const [listaCripto, guardarCripto] = useState([]);
    const [error, setError] = useState(false)

    const MONEDAS = [
        { codigo:'USD', nombre:'Dolar de Estados Unidos'},
        { codigo:'ARS', nombre:'Peso Argentino '},
        { codigo:'MXN', nombre:'Peso Mexicano'},
        { codigo:'EUR', nombre:'Euro'},
        { codigo:'GBP', nombre:'Libra Esterlina'}
    ]

    const [money, SelectMoney] = useMoney('Elige tu moneda', '', MONEDAS)

    const [criptomoneda, SelectCripto] = useCriptomoneda('Elige tu criptomoneda', '', listaCripto)

    useEffect(() => {
       const consultarApi = async() => {
           const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'

           const result = await axios.get(url)
           guardarCripto(result.data.Data)
       } 
       consultarApi()
    }, [])

    //evento submit
    const cotizarMoneda = e =>  {
        e.preventDefault()
        if( money === '' || criptomoneda === ''){
            setError(true)
            return
        }
        // datos al comp principal
        setError(false)
    }

    return (
        <form onSubmit={cotizarMoneda}>
            {error ? <Error mensaje='Todos los campos son obligatorios'/> : null}
            <SelectMoney/>
            <SelectCripto/>
            <Boton type='submit' value='Calcular'/>
        </form>
    )
}

export default Form
