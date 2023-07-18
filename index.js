const elementoResposta = document.querySelector
("#resposta")
const inputPergunta = document.querySelector
("#inputPergunta")
const respostas = [
"Agora é a hora de surpreender aqueles que duvidaram de você.",
"Valorize as pequenas conquistas.",
"Você nunca será velho demais para sonhar um novo sonho.",
"Avante! Para começar, você só precisa dar o primeiro passo.",
"Para certas coisas, não basta querer, é preciso batalhar.",
"Abandone suas dores e não a esperança em dias melhores.",
"Lutar sempre, vencer às vezes, desistir nunca. 🍀", 
"Que os dias bons se tornem rotina e os ruins se tornem raros.",
"Cada dificuldade ultrapassada te faz mais forte.",
"Seus medos morrerão de fome se você alimentar a sua motivação.", 
]

// clicar em fazer pergunta
function fazerPergunta() {

  if(inputPergunta.value == "") {
    alert("Digite sua pergunta")
    return
  }

  const pergunta = "<div>" + inputPergunta.value + "</div>" 

  // gerar numero aleatorio
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random
  () * totalRespostas)

  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

  // sumir a resposta depois de 3 segundos
  setTimeout(function() {
    elementoResposta.style.opacity = 0;
  }, 3000) 
} 