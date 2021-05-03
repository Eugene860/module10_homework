const wsUri = "wss://echo.websocket.org/";
function pageLoaded() {
  const chat = document.querySelector(".chat");
  const chatInput = document.querySelector(".chat_input");
  const chatOutput = document.querySelector(".chat_output");
  const input = document.querySelector("input");
  const btnSend = document.querySelector(".send");
  
  let socket = new WebSocket(wsUri);
  
  socket.onmessage = (event) => {
    writeToChat(event.data, true);
  }
  
btnSend.addEventListener("click", sendMessage);

  function sendMessage() {
    if (!input.value) return;
    socket.send(input.value);
    writeToChat(input.value, false);
    input.value === "";
  }
   function writeToChat(message, isRecieved) {
    let messageHTML = `<div class="${isRecieved? "recieved" : "sent"}">${message}</div>`;
    chatOutput.innerHTML += messageHTML;
  }
}
document.addEventListener("DOMContentLoaded", pageLoaded);

 
window.onload = function () {
const chatOutput = document.querySelector('.chat_output');
const btnGeo = document.querySelector('.geolocation');


const error = () => {
  chatOutput.innerHTML = `<div class="sent">Невозможно получить ваше местоположение</div>`;

}

const success = (position) => {
  const latitude  = position.coords.latitude;
  const longitude = position.coords.longitude;

  chatOutput.innerHTML = `<div class="sent"><a href="https://www.openstreetmap.org/#map=18/${latitude}/${longitude}" target="_blank">Геолокация</a></div>`;
 }

btnGeo.addEventListener('click', () => {
  
  if (!navigator.geolocation) {
    chatOutput.innerHTML = 'Geolocation не поддерживается вашим браузером';
  } else {
    
    navigator.geolocation.getCurrentPosition(success, error);
  }
});
}












