let horas = document.querySelector("#horas");
let minutos = document.querySelector("#minutos");
let segundos = document.querySelector("#segundos");
let frase = document.querySelector("#frase");
let day = document.querySelector("#diaDaSemana");

function time() {
  const data = new Date();

  const hours = data.getHours();
  const minutes = data.getMinutes();
  const seconds = data.getSeconds();

  horas.textContent = `${hours}`;

  minutos.textContent = `${minutes}`;

  segundos.textContent = `${seconds}`;

  if (hours > 0 && hours <= 12) {
    document.body.style.backgroundImage = "url('img/dia.jpg')";
  } else if (hours >= 13 && hours < 18) {
    document.body.style.backgroundImage = "url('img/tarde.jpg')";
  } else {
    document.body.style.backgroundImage = "url('img/noite.jpg')";
  }
}

setInterval(time, 1000);

let data = new Date();
let dia = data.getDay();

const diaDaSemana = [
  "Domingo",
  "Segunda-Feira",
  "Terça-Feira",
  "Quarta-Feira",
  "Quinta-Feira",
  "Sexta-Feira",
  "Sabado",
];

let diaDaSemanaEscrito = diaDaSemana[dia];

switch (dia) {
  case 0:
    day.innerHTML = diaDaSemanaEscrito;
    frase.innerHTML =
      "Que a nossa semana tenha: sentimentos coloridos, vontades inteiras, gentilezas sem fim e aquele friozinho na barriga de uma vida vivida intensamente!";
    break;

  case 1:
    day.innerHTML = diaDaSemanaEscrito;
    frase.innerHTML =
      "Feliz com mais esse dia que está se iniciando, junto com uma semana prometendo glórias e muitas conquistas! Levante a cabeça, respire fundo e sinta como é maravilhoso viver.";
    break;

  case 2:
    day.innerHTML = diaDaSemanaEscrito;
    frase.innerHTML =
      "Pense sempre positivo, pois muitas vezes é nosso humor que determina se um dia será bom ou ruim.";
    break;

  case 3:
    day.innerHTML = diaDaSemanaEscrito;
    frase.innerHTML =
      "Que a gente sempre carregue fé, amor e pensamentos positivos em nossos dias.";
    break;

  case 4:
    day.innerHTML = diaDaSemanaEscrito;
    frase.innerHTML =
      "Se concentre e foque no presente. Viva uma vida que te faça feliz.";
    break;

  case 5:
    day.innerHTML = diaDaSemanaEscrito;
    frase.innerHTML =
      "Coloque amor e vontade em tudo o que fizer e tenha a certeza de que o retorno que receberá será maravilhoso";
    break;

  case 6:
    day.innerHTML = diaDaSemanaEscrito;
    frase.innerHTML =
      "Que esse dia venha carregada de notícias boas, alegrias inteiras, gente de bem, sorrisos verdadeiros e bênçãos sem fim.";
    break;
}
