const btn = document.querySelector("#btn");
const notesContainer = document.querySelector(".notesContainer");
const notes = document.querySelector(".inputbox");
const deleteBtn = document.querySelector("#deleteBtn");

function addNotes() {
  let inputbox = document.createElement("p");
  let img = document.createElement("img");
  inputbox.className = "inputbox";
  inputbox.setAttribute("contenteditable", "true");
  img.src = "images/delete.png";
  notesContainer.appendChild(inputbox).appendChild(img);
  savedata();
}
notesContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    savedata();
  }
});

function savedata() {
  localStorage.setItem("data", notesContainer.innerHTML);
}

function showdata() {
  notesContainer.innerHTML = localStorage.getItem("data");
}
showdata();
// function deleteSavedData() {
//     localStorage.removeItem('data'); // Assuming 'todoList' is the key used to save the to-do list data
// }

// deleteSavedData();
