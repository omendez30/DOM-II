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
