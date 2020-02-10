import React from 'react'
import styled from '@emotion/styled';
import PropTypes from 'prop-types';



const ContenedorHeader = styled.header`
background-color:#35495e;
padding: 50px ;
padding-left:70px;
padding-right:70px;
font-family: 'Raleway', sans-serif;
font-weight:700;
color:#FFFFFF;

`;

const TextoHeader = styled.h1 `
font-size: 2rem ;
margin: 0;
font-weight:800;
font-family: 'Raleway', sans-serif;
text-align:center ;




`

const Header = ({titulo}) => {
  return ( 
    <ContenedorHeader> 
    <TextoHeader>{titulo}</TextoHeader>
    </ContenedorHeader>
    
  );
}
Header.prototype ={
  titulo: PropTypes.string.isRequired,
}
export default Header;