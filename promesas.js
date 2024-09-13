const obtenerNumeros = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const num1 = Math.floor(Math.random() * 100); 
            const num2 = Math.floor(Math.random() * 100);
            const num3 = Math.floor(Math.random() * 100);

            if (typeof num1 === 'number' && typeof num2 === 'number' && typeof num3 === 'number') {
                resolve([num1, num2, num3]); 
            } else {
                reject("Error al obtener los números");
            }
        }, 1000); 
    });
};
