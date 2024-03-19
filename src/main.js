const input = document.querySelector(".box input");

input.onfocus = (event) => {
   event.target.nextElementSibling.nextElementSibling.
   nextElementSibling.nextElementSibling.innerHTML = "hello focus nela";

  event.target.parentElement.parentElement.style.backgroundColor = "red";
  
};
input.onchange = (event) => {
  event.target.nextElementSibling.nextElementSibling.
  nextElementSibling.nextElementSibling.innerHTML = "hello nela change ";
  event.target.parentElement.parentElement.style.backgroundColor = "green";
};
// input.onblur = (event) => {
//   event.target.nextElementSibling.nextElementSibling.
//   nextElementSibling.nextElementSibling.innerHTML = "hello nela";
//   event.target.parentElement.parentElement.style.backgroundColor = "yellow";

// };
