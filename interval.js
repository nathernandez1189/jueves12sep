const repetirComparacion = () => {
    obtenerNumeros().then(numeros => {
        const [num1, num2, num3] = numeros;
        const resultado = compararNumeros(num1, num2, num3);
        document.getElementById('resultado').innerHTML = `Números: ${num1}, ${num2}, ${num3} <br> ${resultado.mensaje} <br> ${resultado.iguales}`;
    });
};

setInterval(repetirComparacion, 5000);
