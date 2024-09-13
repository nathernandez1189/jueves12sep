const compararNumeros = (num1, num2, num3) => {
    let menor = (num1 < num2 && num1 < num3) ? num1 : (num2 < num1 && num2 < num3) ? num2 : num3;
    let mensaje = `El número menor es: ${menor}`;
    
    let iguales = (num1 === num2) ? `El número ${num1} y ${num2} son iguales` :
                 (num1 === num3) ? `El número ${num1} y ${num3} son iguales` :
                 (num2 === num3) ? `El número ${num2} y ${num3} son iguales` :
                 "No hay números iguales";
    
    return { mensaje, iguales };
};
