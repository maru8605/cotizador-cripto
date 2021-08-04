import styled from '@emotion/styled'
import useMoney from '../hooks/useMoney';

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

    const MONEDAS = [
        { codigo:'USD', nombre:'Dolar de Estados Unidos'},
        { codigo:'ARS', nombre:'Peso Argentino '},
        { codigo:'MXN', nombre:'Peso Mexicano'},
        { codigo:'EUR', nombre:'Euro'},
        { codigo:'GBP', nombre:'Libra Esterlina'}
    ]

    const [money, SelectMoney] = useMoney('Elige tu moneda', '', MONEDAS)
    return (
        <form>
            <SelectMoney/>
            <Boton type='submit' value='Calcular'/>
        </form>
    )
}

export default Form
