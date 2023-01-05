let horas = document.querySelector("#horas");
let minutos = document.querySelector("#minutos");
let segundos = document.querySelector("#segundos");

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
