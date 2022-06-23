function setNomeDoUsuario() {
  let nome = document.querySelector("#nomeDoUsuario").value;
  localStorage.setItem("nome", nome);
}

let NomeBemVindo = document.querySelector("#usuario");
NomeBemVindo.innerHTML = localStorage.getItem("nome");

function resultado1() {
  const click = document.querySelector("input[name=Titanic]:checked").value;
  if(click === 'Afundou'){
    alert('Parabéns! Você acertou!');
  }else{
    alert('Erroooooou, resposta correta: Afundou');
  }
}

function resultado2() {
  const click = document.querySelector("input[name=Shrek]:checked").value;
  if(click === 'Burro'){
    alert('Parabéns! Você acertou!');
  }else{
    alert('Erroooooou, resposta correta: Burro');
  }
}

function resultado3() {
  const click = document.querySelector("input[name=Hulk]:checked").value;
  if(click === 'Verde'){
    alert('Parabéns! Você acertou');
  }else{
    alert('Erroooooou, resposta correta: Verde');
  }
}