import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types';


const ContenedorResumen = styled.div `
padding: 1rem;
text-align: center;
background-color:#63b7af;
color:#fff;
margin-top: 1rem;


`;

const Resumen = ({datos}) => {
  
  //extraer de datos 
  const {marca, ano, plan}= datos;
  
  if (marca ===''|| ano ===''|| plan ==='' ) return null;
  
  return (  

    <ContenedorResumen> 
      <h2>Resumen Alquiler</h2>
      <ul>
        <li>Marca: {marca} </li>
        <li>Plan:{plan} </li>
        <li>año del auto:{ano} </li>
      </ul>
      </ContenedorResumen>



    );
  }
  Resumen.prototype ={
    datos: PropTypes.object.isRequired,
    
  }
  export default Resumen;