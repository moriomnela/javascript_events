// const input = document.querySelector(".box input");

// input.onfocus = (event) => {
//    event.target.nextElementSibling.nextElementSibling.
//    nextElementSibling.nextElementSibling.innerHTML = "hello focus nela";

//   event.target.parentElement.parentElement.style.backgroundColor = "red";
  
// };
// input.onchange = (event) => {
//   event.target.nextElementSibling.nextElementSibling.
//   nextElementSibling.nextElementSibling.innerHTML = "hello nela change ";
//   event.target.parentElement.parentElement.style.backgroundColor = "green";
// };
// input.onblur = (event) => {
//   event.target.nextElementSibling.nextElementSibling.
//   nextElementSibling.nextElementSibling.innerHTML = "hello nela";
//   event.target.parentElement.parentElement.style.backgroundColor = "yellow";

// };
 
//=======2no=====
const range = document.querySelector('.box input[type="range"]');
const color = document.querySelector('.box input[type="color"]');
const family = document.querySelector(".box select");
const p = document.querySelector(".box p");

range.oninput = (event) => {
  //console.log(event.target.value);
  p.style.fontSize = `${event.target.value}px`;
};

color.oninput = (event) => {
  p.style.color = `${event.target.value}`;
};
family.oninput = (event) => {
  p.style.fontFamily = `${event.target.value}`;
};