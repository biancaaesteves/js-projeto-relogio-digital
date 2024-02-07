function updateClock() {
  const clockElement = document.querySelector(".clock");
  const hoursElement = document.querySelector(".hours");
  const minutesElement = document.querySelector(".minutes");
  const secondsElement = document.querySelector(".seconds");

  const now = new Date(); // pegar a data atual
  const hours = now.getHours().toString().padStart(2,"0");  // pega os 2 números da hora
  const minutes = now.getMinutes().toString().padStart(2, "0"); // pega os 2 números dos minutos
  const seconds = now.getSeconds().toString().padStart(2, "0"); // pega os 2 números dos segundos

  hoursElement.textContent = hours;
  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;

}

setInterval(updateClock, 1000);   
// função que roda infinitamente (até o usuário sair da página) a cada segundo, fazendo que a hora seja atualizada no tempo correto (de seg em seg)
// 1000 milissegundos = 1 seg


updateClock();