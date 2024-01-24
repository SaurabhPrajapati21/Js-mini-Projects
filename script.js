let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");

const gencompchoice = () => {
  const options = ["rock", "paper", "scissor"];
  let randind = Math.floor(Math.random() * 3);
  return options[randind];
};

let userscorepara = document.querySelector("#userscore");
let compscorepara = document.querySelector("#compscore");

let showmsg = document.querySelector("#msg");

let gamedraw = () => {
  console.log("game was draw");
  msg.innerHTML = "game was draw";
  showmsg.style.backgroundColor = "black";
};
const mycompchoice = gencompchoice();
console.log(mycompchoice);

const printimg = document.getElementById("setcompimg");

let showimg = (compchoice) => {
  if (compchoice === "rock") {
    printimg.src = "rock.png";
  } else if (compchoice === "paper") {
    printimg.src = "paper.png";
  } else {
    printimg.src = "scissor.jpg";
  }
};

let showwiner = (userwin) => {
  let compchoice;
  if (userwin) {
    userscore++;
    userscorepara.innerText = userscore;
    showmsg.innerHTML = "you won";
    console.log("you won");
    showmsg.style.backgroundColor = "green";
  } else {
    compscore++;
    compscorepara.innerText = compscore;
    showmsg.innerHTML = "you lost";
    console.log("you lost");
    showmsg.style.backgroundColor = "red";
  }
};

let playgame = (userchoice) => {
  console.log("user choice is", userchoice);

  const compchoice = gencompchoice();
  console.log("comp choice is", compchoice);

  showimg(compchoice);

  if (userchoice === compchoice) {
    // draw
    gamedraw();
  } else {
    let userwin = true;

    if (userchoice === "rock") {
      // scisosor paper
      userwin = compchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      // rock scissor
      userwin = compchoice === "scissor" ? false : true;
    } else {
      // rock paper
      userwin = compchoice === "rock" ? false : true;
    }
    showwiner(userwin);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
  });
});
