
// obtiene la  diferencia de años
export function obtenerDiferenciaAno(ano) {
  return new Date().getFullYear() - ano;
}

// calcula el total a pagar segun la marca 

export function calculaMarca(marca) {
  let incremento;
  
  switch(marca) {
    
    case 'kia':
    incremento= 1.75;
    break;
    
    case 'mazda':
    incremento= 1.30;
    break;
    
    case 'bmw':
    incremento= 1.15;
    break
    default:
    break;
  }
  
  return incremento;
  
}

//calcular el tipo de seguro
export function obtenerPlan(plan) {
  return( plan === 'basico') ? 1.30 : 1.80;
}