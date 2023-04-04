import "./styles.css";
const userName = prompt("Lütfen isminizi giriniz!"); //
function showTime() {
  const name = document.querySelector("#name");
  const myClock = document.querySelector("#myClock");
  name.textContent = userName;

  //tarih
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let day = date.getDay();

  let hour = hours < 10 ? "0" + hours : hours;
  let minute = minutes < 10 ? "0" + minutes : minutes;
  let second = seconds < 10 ? "0" + seconds : seconds;

  let days = [
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
    "Pazar"
  ];
  let dayName = days[day];

  myClock.textContent = `${hour}:${minute}:${second}  ${dayName}`;
}

setInterval(() => {
  showTime();
}, 1000);
