const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", () => {
  const inputField = document.getElementById("inputField");
  if (inputField.value == "") {
    alert("Please Enter Valid text");
    return;
  }
  const listContainer = document.getElementById("list-container");
  const ul = document.createElement("ul");
  ul.innerHTML = `
  <li id="checkList" class="text-base text-gray-600 flex items-center  cursor-pointer justify-between">
  <p class="flex items-center gap-2"><img id="checkImg" class='w-4' src="./images/unchecked.png" />
  <span id='inputValue'>${inputField.value}</span></p>
  <button id="close-btn" class="hover:bg-gray-200 px-2 p-1 text-xs rounded-md"><i class="ri-close-line"></i></button>
  </li>
  `;
  listContainer.appendChild(ul);
  inputField.value = "";

  document.getElementById("checkList").addEventListener("click", () => {
    const checkImg = document.getElementById("checkImg");
    checkImg.src = "./images/checked.png";
    document
      .getElementById("inputValue")
      .classList.add("line-through", "text-gray-400");
  });

  document.getElementById("close-btn").addEventListener("click", (e) => {
    e.target.parentElement.parentElement.remove();
  });
});
