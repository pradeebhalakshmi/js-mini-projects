const number = document.querySelectorAll(".item");
const text = document.querySelector("#text");
// Adding eventlistener
number.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target.innerText == "=" || e.target.innerText == "enter")
      calculateFunction();
    else if (e.target.innerText == "clear") clearData();
    else if (e.target.innerText == "del") delData();
    else text.value += e.target.innerText;
  });
});
//  calculate function
function calculateFunction() {
  try {
    if (text.value != "") text.value = eval(text.value);
    else {
      alert("Please enter the input data!");
    }
  } catch (err) {
    alert("Please enter the valid input!");
    clearData();
  }
}
// clear function
function clearData() {
  text.value = "";
}
// delete function
function delData() {
  if (text.value != "") text.value = text.value.slice(0, text.value.length - 1);
  else {
    alert("No data available!");
  }
}
