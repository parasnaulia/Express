const button = document.getElementById("btn");
let arr = [
  "sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thrusday",
  "Friday",
  "Saturday",
];

const city = document.getElementById("city");
const ttemp = document.getElementById("ttemp");
const howw = document.getElementById("howw");
const currentDate = new Date();
const day = currentDate.getDate();
const month = currentDate.getMonth() + 1; // Months are zero-based, so we add 1
const year = currentDate.getFullYear();
const date1 = document.getElementById("data");
const getDay = currentDate.getDay();
const weekk = document.getElementById("week");
let date = `${day}/${month}/${year}`;
date1.innerText = date;
weekk.innerText = arr[getDay];

handleClick = async () => {
  //   console.log(city.value);
  try {
    if (city.value === "") {
      ttemp.innerText = "Sorry Enter Valid Place";
      howw.innerText = "";
    } else {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=6c2c8f1f08dba9abb6b5806972d5ebfb`
      );
      const data = await response.json();
      const arrdata = [data];
      let temp = arrdata[0].main.temp;
      let how = arrdata[0].weather[0].main;
      ttemp.innerText = temp;
      howw.innerText = how;
    }
  } catch (err) {
    console.log("There is an error Please write Valid Country Name");
  }
};
button.addEventListener("click", handleClick);

// https://api.openweathermap.org/data/2.5/weather?q=pune&appid=6c2c8f1f08dba9abb6b5806972d5ebfb
