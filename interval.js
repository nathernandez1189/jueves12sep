const saludo = () => {
    const lista = document.getElementById("lista");
    const item = document.createElement("li");
    item.innerHTML = "Hola UAO";
    lista.appendChild(item);
};

setInterval(saludo, 3000); 
