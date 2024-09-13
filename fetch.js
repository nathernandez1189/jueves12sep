const obtenerNumerosFetch = () => {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(() => {
            return [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)];
        });
};
