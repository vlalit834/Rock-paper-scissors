let user_score = 0;
let comp_score = 0;
let turn = 0;

const choices = document.querySelectorAll(".choice");
let s1 = document.querySelector("#s1");
let s2 = document.querySelector("#s2");

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    turn++;
    let user_choice = choice.getAttribute("id");
    play_game(user_choice);
  });
});

const computer_choice = () => {
  let option = ["rock", "paper", "scissors"];
  let idx = Math.floor(Math.random() * 3) + 0;
  return option[idx];
};

const play_game = (user_choice) => {
  let cmp_choice = computer_choice();
  if (cmp_choice !== user_choice) {
    let userwin = true;
    if (cmp_choice === "rock" && user_choice === "scissors") {
      userwin = false;
    } else if (cmp_choice === "paper" && user_choice === "rock") {
      userwin = false;
    } else if (cmp_choice === "scissors" && user_choice === "paper") {
      userwin = false;
    }
    if (userwin === true) {
      user_score++;
    } else {
      comp_score++;
    }
  } 
  else
  {
    user_score++;
    comp_score++;
  }

  if (turn >= 3 && user_score !== comp_score) {
    showinner();
  }
  else if(turn >= 3)
  {
    draw();
  }
  s1.textContent=`CPU  : ${comp_score}`;
  s2.textContent=`USER : ${user_score}`;
};

let result_text = document.querySelector("#result-text");


const showinner = () => {
  if (user_score > comp_score) {
    result_text.textContent = "USER";
    result_text.style.background = "lightgreen";
  } else {
    result_text.textContent = "CPU";
    result_text.style.background = "red";
  }
};
const draw = () => {
  result_text.textContent = "DRAW";
  result_text.style.background = "orange";
};
