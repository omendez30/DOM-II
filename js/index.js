// Your code goes here
let bgColor = document.querySelectorAll(
  ".main-navigation .nav-container .nav .nav-link"
);

for (let i = 0; i < bgColor.length; i++) {
  bgColor[i].addEventListener(
    "mouseover",
    e => {
      e.target.style.backgroundColor = "mistyrose";
      e.target.style.color = "white";

      setTimeout(() => {
        e.target.style.color = "";
        e.target.style.backgroundColor = "sand";
      }, 500);
    },
    false
  );
}

let pressDown = document.querySelector("body");

pressDown.addEventListener("keydown", e => {
  if (e.keyCode === 40) {
    alert("You're on your way to Fun!");
  } else if (e.keyCode === 38) {
    alert("Where are you goin? The fun is down here!");
  }
});

// let upAndDown = document.querySelector("img");

// upAndDown.addEventListener("wheel", e => {});

// console.log(upAndDown);
