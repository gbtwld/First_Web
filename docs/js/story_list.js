const prev_button = document.querySelector(".prev_post");
const next_button = document.querySelector(".next_post");
const currentPath = path_Identifier();
let current_arr_index = 0;

const html_arr = [
  "/index.html",
  "/seattle_1st.html",
  "/seattle_2nd.html",
  "/seattle_3rd.html",

  "/portland.html",

  "/sanfrancisco_1st.html",

  "/vegas.html",
  "/vegas_1st.html",

  "/la.html",
];

function btn_selector() {
  if (current_arr_index === 0) {
    prev_button.classList.add("not_exist");
  } else if (current_arr_index === 7) {
    next_button.classList.add("not_exist");
  }
}

function handleCurrentArrAdress() {
  for (let i = 0; i < html_arr.length; i++) {
    if (currentPath == html_arr[i]) {
      current_arr_index = i;
      break;
    }
  }
}

if (next_button) {
  next_button.addEventListener("click", (event) => {
    if (current_arr_index < 7) {
      window.location.href = `https://dooravel.cf${
        html_arr[current_arr_index + 1]
      }`;
    } else {
      console.log("There's no post.");
    }
  });
}

if (prev_button) {
  prev_button.addEventListener("click", (event) => {
    if (current_arr_index > 0) {
      window.location.href = `https://dooravel.cf${
        html_arr[current_arr_index - 1]
      }`;
    } else {
      console.log("There's no post.");
    }
  });
}

function path_Identifier() {
  const currentpath = window.location.pathname;
  return currentpath;
}

function init() {
  handleCurrentArrAdress();
  btn_selector();
}

init();
