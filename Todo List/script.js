const inputField = document.getElementById("inputField");
const listContainer = document.getElementById("list-container");

const addTask = () => {
  if (inputField.value == "") {
    alert("Please Provide Valid Text");
  } else {
    const li = document.createElement("li");
    li.innerHTML = inputField.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputField.value = "";
  saveData();
};

listContainer.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

const saveData = () => {
  localStorage.setItem("data", listContainer.innerHTML);
};
const displayData = () => {
  listContainer.innerHTML = localStorage.getItem("data");
};
displayData();
