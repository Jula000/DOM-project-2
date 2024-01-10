const btns = document.querySelectorAll(".btn");
const body = document.body;
console.log(btns);

for (const btn of btns) {
  btn.addEventListener("click", () => {
    number = btn.value;
    changeBackground(number);
  });
}

function changeBackground(number) {
  console.log(number);
  body.className = "";

  switch (number) {
    case "fuchsia":
      body.classList.add("fuchsia");
      break;
    case "hotpink":
      body.classList.add("hotpink");
      break;
    case "aquamarine":
      body.classList.add("aquamarine");
      break;
    case "chocolate":
      body.classList.add("chocolate");
      break;
    case "darkblue":
      body.classList.add("darkblue");
      break;
    case "green":
      body.classList.add("green");
      break;
    default:
      break;
  }
}
