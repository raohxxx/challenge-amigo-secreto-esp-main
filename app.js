// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[]
let amigo = (document.getElementById('amigo'));
let lista=document.getElementById('listaAmigos')
let resultado=document.getElementById('resultado')
// funcion para agregar amigos al sistema, valida que no este vacio y que no sea solo 1
function agregarAmigo() { if (amigo.value=='') {alert('por favor ingrese un nombre');  
}
else{ amigos.push(amigo.value);
  //console.log(amigos)  para revisar la lista antes de entrar en produccion 
  actualizarLista(amigos)
  document.getElementById('amigo').value = '';
}
    
}
//funcion para sortear cual sera el amigo secreto, escoge un amigo al azar y luego vacia la lista nuevamente 

function sortearAmigo() {
  if (amigos.length==0 || amigos.length==1){alert('ingrese participantes, minimo 2 para jugar');}
else { limpiarLista();
  let amigoSecreto=amigos[(Math.floor(Math.random()*amigos.length))].toUpperCase();
   //resultado.innerHTML=(amigos[(Math.floor(Math.random()*amigos.length))]);
   resultado.innerHTML=(`el amigo secreto es ${amigoSecreto}`)
  }
   amigos=[]
}
function actualizarLista(amigosLista){
   
  lista.innerHTML="";
  for(let i = 0; i <amigosLista.length;i++){
      lista.innerHTML += `<li>${amigosLista[i]}</li>`;
  }}
  function limpiarLista() {
    lista.innerHTML=''
  }