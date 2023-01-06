function afficher(){
  let zoneText = document.getElementById("zoneText");
  let contain = document.createElement("div");
  let user = document.createElement("div");
  let line = document.createElement("hr")
  let text = document.createElement("p");
  let input = document.getElementById('saisie').value;

  contain.setAttribute("class", "containstyle");
  user.setAttribute("class", "userstyle");

  text.innerHTML = input;
  zoneText.appendChild(contain);
  contain.append(user, line, text);
}

// let fixed = document.querySelector("#garde");

// window.addEventListener("scroll", () =>{

//   if (window.screenY > 50){
//     fixed.setAttribute("class", "scrol");
//   } else {
//     fixed.classList.remove;("scrol");
//   }

// });

