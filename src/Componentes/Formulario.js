import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import {obtenerDiferenciaAno, calculaMarca, obtenerPlan} from '../helper';



const Campo = styled.div `
display: flex;
margin-bottom: 1rem;
align-items: center;
margin-top:2em;
flex: 0 0 100px;
`;



const Select = styled.select `
display: block;
width: 100%;
padding: 1rem;
border: 3px solid	#347474;
-webkit-appearance: none;
margin: 0 2rem;
background-color:#63b7af;
color:#fff;

`;

const InputRadio = styled.input `
margin:0 1rem ;


`;

const Boton = styled.button `margin: 2rem;
background-color:#35495e;
font-size: 16px;
width: 85%;
padding: 1rem;
color:#fff;
text-transform: uppercase;
font-weight: bold;
border: none;
transition: backgroud-color .3s ease;
margin-top: 2rem;

&:hover {
  background-color: #ee8572;
  cursor: pointer;
  
}

`;

const Error = styled.div `
background-color: #ff0000;
color:#ffffff;
padding: 1rem;
width:100%;
text-align: center;
margin-bottom: 2rem;



`;




const Formulario = ({guardarResumen,  guardarCargado}) => {
  
  const [datos, guardarDatos]= useState ({
    
    marca:'',
    ano:'',
    plan:''
  });

  //error
  const [error, guardarError]= useState(false);
  
  //extraer los valores del state
  const {marca, ano, plan} = datos;
  
  //leer los datos del formulario y colocarlos en el state
  const obtenerInformacion = e => {
    guardarDatos({
      ...datos,
      [e.target.name] : e.target.value
      
    })
    
  }

  //cuando el usuario presione submit
  const cotizarAuto= e => {
    e.preventDefault();

    if (marca.trim()===''|| ano.trim()===''|| plan.trim()==='') {
      guardarError(true);
      return;
    }

    guardarError(false);

    //una base de 2000
    let resultado = 900000;

    // obtener la diferencia de años 

    const diferencia = obtenerDiferenciaAno(ano);

    

    // por cada año hay que restar en 3%

    resultado -= ((diferencia * 3 ) * resultado) / 100;

    

    //KIA 75% de mas
    //MAZDA 30%
    //BMW 15%
    resultado= calculaMarca(marca) * resultado;

    //basico aumenta 30%
    //completo 80%
    const incrementoplan = obtenerPlan(plan);

    resultado= parseFloat (incrementoplan * resultado).toFixed(3);
    
    guardarCargado(true);
    
    setTimeout(() => {

      // eliminar el spinner
      guardarCargado(false);


      //pasa la informacion al componente principal
      guardarResumen({
        cotizacion: Number( resultado ),
        datos
      });

    

    }, 3000);


    

  };
  
  return ( 
    <form
    onSubmit={cotizarAuto}
    >
      {error ? <Error>¡TODOS LOS CAMPOS SON OBLIGATORIOS!</Error>: null}

    <Campo>
  
    <Select
    name="marca"
    value={marca}
    onChange={obtenerInformacion}
    >
    <option value="">AUTO</option>
    <option value="kia">KIA</option>
    <option value="mazda">MAZDA</option>
    <option value="bmw">BMW</option>
    
    </Select>
    
    </Campo>
    
    <Campo>
    
    <Select
    name="ano"
    value={ano}
    onChange={obtenerInformacion}
    >
    <option value="">AÑO</option>
    <option value="2021">2021</option>
    <option value="2020">2020</option>
    <option value="2019">2019</option>
    <option value="2018">2018</option>
    <option value="2017">2017</option>
    <option value="2016">2016</option>
    <option value="2015">2015</option>
    <option value="2014">2014</option>
    <option value="2013">2013</option>
    <option value="2012">2012</option>
    </Select>
    </Campo>
    
    <Campo>
    
    
    <InputRadio
    type="radio"
    name="plan"
    value="basico"
    checked={plan=== "basico"}
    onChange={obtenerInformacion}
    /> Basico
    
    <InputRadio
    type="radio"
    name="plan"
    value="completo"
    checked={plan=== "completo"}
    onChange={obtenerInformacion}
    /> Completo
    </Campo>
    
    
    <Boton type="submit">¡ALQUILAR!</Boton>
    
    </form>
    );
  }

  Formulario.prototype ={
    guardarResumen: PropTypes.func.isRequired,
    guardarCargado: PropTypes.func.isRequired
  }

  export default Formulario;