const evaluar = () => {
    const edad = prompt("¿Cuál es tu edad?");
    edad > 21 ? alert("Mayor de edad!") : alert("Menor de edad!");
};

setTimeout(evaluar, 5000); 