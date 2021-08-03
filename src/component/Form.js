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

    const [money, SelectMoney, setState] = useMoney()
    return (
        <form>
            <SelectMoney/>
            <Boton type='submit' value='Calcular'/>
        </form>
    )
}

export default Form
