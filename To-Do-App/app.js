let inputbox = document.getElementById("inputbox");
let listcont = document.getElementById("list-cont");
let mybtn = document.querySelector(".add");
let clearall = document.getElementById("clear");


// Function to toggle visibility of "Delete All Tasks" button
function toggleDeleteAllButtonVisibility() {
  if (listcont.children.length > 0) {
    clearall.style.display = "block";
  } else {
    clearall.style.display = "none";
  }
}

mybtn.onclick = function () {
  addtask();
};
function addtask() {
  if (inputbox.value === "") {
    alert("you must write something");
    return;
  } else {
    let li = document.createElement("li");

    li.innerHTML = inputbox.value;

    listcont.appendChild(li);

    let span = document.createElement("span");
    // span.innerHTML = "\u00d7";
    span.innerHTML = '<i class="far fa-trash-can"></i>';

    li.appendChild(span);
  }
  inputbox.value = "";
  savedata();
  toggleDeleteAllButtonVisibility(); // Toggle visibility of "Delete All Tasks" button
}


listcont.addEventListener("click", (e) => {
  let targetElement =
    e.target.tagName === "SPAN" ? e.target : e.target.parentElement;
  if (targetElement.tagName === "SPAN") {
    targetElement.parentElement.remove();
    savedata();
    toggleDeleteAllButtonVisibility(); // Toggle visibility of "Delete All Tasks" button
  }
});



// Event listener for deleting all tasks
clearall.addEventListener("click", () => {
  listcont.innerHTML = ""; // Clear all tasks
  savedata();
  toggleDeleteAllButtonVisibility(); // Toggle visibility of "Delete All Tasks" button
});

function savedata() {
  localStorage.setItem("data", listcont.innerHTML);
}

function showdata() {
  listcont.innerHTML = localStorage.getItem("data");
  toggleDeleteAllButtonVisibility(); // Toggle visibility of "Delete All Tasks" button on page load
}
showdata();


// function deleteSavedData() {
//     localStorage.removeItem('data'); // Assuming 'todoList' is the key used to save the to-do list data
// }

// deleteSavedData();
