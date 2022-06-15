const elementoDestino = document.querySelector("#destino")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPergunta = document.querySelector("#buttonPergunta")
const respostas = ["Sim!", "Não.", "Talvez.", "Possivelmente.", "Nem fudendo.", "Não tem como saber ainda."]

function fazerPergunta(){
  if(inputPergunta.value == ""){
    alert("Digite sua pergunta!")
    return
  }

buttonPergunta.setAttribute("disabled", true)
const totalRespostas = respostas.length
const numeroAleatorio = Math.floor(Math.random() * totalRespostas)
const pergunta = "<div>" + inputPergunta.value + "</div>"
elementoDestino.innerHTML = pergunta + respostas[numeroAleatorio]
elementoDestino.style.opacity = 1
setTimeout(function() {
  elementoDestino.style.opacity = 0;
  buttonPergunta.removeAttribute("disabled");
}, 3000)
setTimeout(function(){
  inputPergunta.value = "";
}, 0010)
}