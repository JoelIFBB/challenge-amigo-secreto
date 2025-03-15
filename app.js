// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const inputAmigo = document.getElementById("amigo")
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos")
const ulResultado = document.getElementById("resultado");
function agregarAmigo(){
    if (!inputAmigo.value){
        alert("Ingresa nombre de amigo")
    }
    listaAmigos.push(amigo.value);
    ulListaAmigos.innerHTML += `<h1>${inputAmigo.value}</h1>`;
}
function sortearAmigo(){
    
    const Aleatorio  = Math.floor((Math.random()  * listaAmigos.length));
    const amigoSecreto = listaAmigos[Aleatorio];
    if(listaAmigos.length === 0){
        ulResultado.innerHTML = `<h1>No ingresastes amigos</h1>`;
    }
    else {
        ulResultado.innerHTML = `<h1>Tu amigo secrero es: ${amigoSecreto}</h1>`;
    }
limpiarInput()
}
function limpiarInput(){
    inputAmigo.value="";
}
