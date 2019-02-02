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

//keydown
let pressDown = document.querySelector("body");

pressDown.addEventListener("keydown", e => {
  if (e.keyCode === 40) {
    alert("You're on your way to Fun!");
  } else if (e.keyCode === 38) {
    alert("Where are you goin? The fun is down here!");
  }
});

//wheel
let upAndDown = document.querySelector(
  ".main-navigation .nav-container .logo-heading"
);

upAndDown.addEventListener("wheel", e => {
  e.target.deltaX;
});

//drag / drop;

let dragAndDrop = document.querySelector("img");

dragAndDrop.addEventListener("drag", event => {}, false);

dragAndDrop.addEventListener("dragstart", e => {
  dragged = e.target;
  e.target.style.opacity = 0.7;
});

dragAndDrop.addEventListener(
  "dragover",
  e => {
    e.preventDefault();
  },
  false
);
dragAndDrop.addEventListener("dragenter", e => {
  if (e.target === "img") {
    e.target.style.background = "";
  }
});
dragAndDrop.addEventListener(
  "drop",
  function(event) {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    // move dragged elem to the selected drop target
    if (event.target.className == "img") {
      event.target.style.background = "";
      dragged.parentNode.removeChild(dragged);
      event.target.appendChild(dragged);
    }
  },
  false
);

let script = document.createElement("script");

script.addEventListener("load", event => {
  alert("Welcome to the Fun Bus!");
});
script.src = "js/index.js";
script.async = true;
document.getElementsByTagName("script")[0].parentNode.appendChild(script);
