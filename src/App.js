import { useState, useEffect } from 'react';
import styled from '@emotion/styled'
import axios from 'axios'
import img from './cryptomonedas.png'
import Form from './component/Form';
import Cotizacion from './component/Cotizacion';
import Spinner from './component/Spinner'

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px){
    display: grid;
    grid-template-columns: repeat( 2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: 'bebas neue', cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after{
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
  }
`;

function App() {

  const [moneda, guardarMoneda] = useState('')
  const [criptomoneda, guardarCriptomoneda] = useState('')
  const [resultado, guardarResultado] = useState({})
  const [cargando, guardarCargando] = useState(false)

  useEffect(() => {
    const cotizarCriptomoneda = async() => {
      if(moneda === '') return;
// consulta a la api para cotizacion
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
      const resultado = await axios.get(url)
    // mostrar spinner
      guardarCargando(true)

      setTimeout(() => {
        guardarCargando(false)
        guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda])
      }, 3000);
      

    }
    cotizarCriptomoneda()
  }, [moneda, criptomoneda])

  const componente = (cargando) ? <Spinner/> : <Cotizacion resultado={resultado}/>
  return (
    <Container>
      <div>
        <Imagen src={img} alt='imagen cripto'/>
      </div>
      <div>
        <Heading>
          Cotiza criptomonedas al instante
        </Heading>
        
        <Form
          guardarMoneda={guardarMoneda}
          guardarCriptomoneda={guardarCriptomoneda}
        />
        {componente}
      </div>
    </Container>
  );
}

export default App;
