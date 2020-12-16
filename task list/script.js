const newtask = document.querySelector(".text");
const addbtn = document.querySelector("#add");
const ul = document.querySelector("ul");
const icon = document.querySelectorAll("i");
let arraylist = [];
addbtn.addEventListener("click", addnewtask);
function addnewtask() {
  let task = newtask.value.trim();
  newtask.value = "";
  if (task != "") {
    arraylist.push(task);
    let indexvalue = arraylist.indexOf(task);
    console.log(indexvalue);
    let listitem = document.createElement("li");
    listitem.innerHTML = `${task} <span class="icon"><i class="fa fa-window-close"></i></span>
    `;
    listitem.setAttribute("id", indexvalue);
    ul.appendChild(listitem);
    let icon = listitem.querySelector("i");
    icon.addEventListener("click", (e) => {
      icon.parentElement.parentElement.remove();
    });
  }
}
document.querySelector("#clearbtn").addEventListener("click", () => {
  let t = ul.children;
  for (let i = 0; i < t.length; t[i].remove()) {}
});
