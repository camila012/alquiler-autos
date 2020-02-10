import React from 'react'
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


const Mensaje = styled.p `
background-color:#35495e;
margin-top: 2rem;
padding: 1rem;
text-align: center;
color:#fff;
`;

const ResultadoCotizacion= styled.div `
text-align: center;
padding: 2rem;
background-color:#63b7af;
margin-top: 1rem;
position: relative;




`;

const TextoCotizacion=styled.p `

color:#fff;
padding: 1rem;
text-transform: uppercase;
font-weight: auto;
margin: 0;
background-color:#35495e;
`;








const Resultado = ({cotizacion}) => {
  return ( 
    (cotizacion === 0)
    ? <Mensaje>ELIGE TU DESTINO</Mensaje> : ( 
      
      
      <ResultadoCotizacion> 
      
      <TransitionGroup
      component="span"
      className="resultado"
      
      > 
      
      <CSSTransition
      
      className="resultado"
      key={cotizacion}
      timeout={{enter: 500, exit: 500}}
      
      > 
      
      <TextoCotizacion> El total es : $ <span> {cotizacion} </span> </TextoCotizacion> 
      </CSSTransition>
      </TransitionGroup>
      </ResultadoCotizacion>
      )
      )
    }
    Resultado.prototype ={
      cotizacion: PropTypes.number.isRequired,
    
    }
    export default Resultado;