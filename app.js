// let tab = [];
// localStorage.setItem("key", "test de local storage1");
// tab.push(...localStorage.getItem("key").split(","));
// localStorage.setItem("key", "test de local storage2");
// tab.push(...localStorage.getItem("key").split(","));
// localStorage.setItem("key", "test de local storage3");
// tab.push(...localStorage.getItem("key").split(","));
// /* tab = [...localStorage.getItem("key")]; */
// let keys = localStorage.getItem("key");
// /* localStorage.removeItem("key"); */
// /* localStorage.clear(); */

// console.log(keys);
// console.log(tab);
// localStorage.setItem("key", tab);
let user = [];
let position;
let nbretotal;
let nbrevalide;
// let userobjet = [];
const bouton = document.getElementById("bouton");
const liste = document.querySelector(".tableliste");
const nom = document.getElementById("nom");
const age = document.getElementById("age");

const editer = () => {
  const buttonedit = document.createElement("button");
  buttonedit.classList.add("btnedit");
  buttonedit.innerHTML = `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  viewBox="0 0 58.985 58.985" style="enable-background:new 0 0 58.985 58.985;" xml:space="preserve">
<g>
 <polygon style="fill:#E0A370;" points="1,57.985 13.728,53.743 5.243,45.257 	"/>
 <path style="fill:#CC4B4C;" d="M57.228,1.757c-2.343-2.343-6.142-2.343-8.485,0l-2.121,2.121l8.485,8.485l2.121-2.121
   C59.571,7.899,59.571,4.1,57.228,1.757z"/>
 
   <rect x="22.76" y="2.966" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 27.7247 71.9338)" style="fill:#E39700;" width="12" height="54.518"/>
 
   <rect x="1.512" y="28.25" transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 70.445 31.3207)" style="fill:#FFCB43;" width="54.447" height="4"/>
 <polygon style="fill:#959595;" points="52.278,15.192 52.278,15.192 55.107,12.364 55.107,12.364 54.4,13.071 	"/>
 <polygon style="fill:#F2ECBF;" points="45.914,4.586 43.793,6.707 52.278,15.192 54.4,13.071 55.107,12.364 46.621,3.879 	"/>
 <path style="fill:#949493;" d="M1,58.985c-0.256,0-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414l0.985-0.985
   c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414l-0.985,0.985C1.512,58.888,1.256,58.985,1,58.985z"/>

</svg> Editer`;
  buttonedit.style.cursor = "pointer";
  buttonedit.style.background = "teal";
  buttonedit.addEventListener("click", editercell);
  return buttonedit;
};
const editercell = (e) => {
  const ligne = e.target.closest(".newline");
  ligne.cells[1].setAttribute("contenteditable", true);
  ligne.cells[1].focus();
  const celluleliee = ligne.cells[1];
  position = ligne.cells[0].textContent;
  celluleliee.addEventListener("blur", cellchange);
  //console.log(ligne.cells[1]); blur==lose focus
};
const cellchange = (e) => {
  //console.log(e.target.textContent);
  // return;
  // console.log(position);
  user = [];
  user.push(...JSON.parse(localStorage.getItem("users"))); //convertir en objet
  //console.log(user[position-1].noms);
  // return;
  user[position - 1].noms = e.target.textContent;
  //user.splice(position - 1, 1, e.target.textContent);
  //console.log(user);
  //return;
  localStorage.setItem("users", JSON.stringify(user)); //convertir en string pour local storage
  //ligne.remove();  pas necessaire
  /* const ligne = e.target.closest(".newline");
  ligne.remove();
  ligne.remove();
  console.log(ligne.cells[0].textContent); */
  chargerlocal();
};
const deleteline = () => {
  const buttondel = document.createElement("button");
  buttondel.classList.add("btndel");
  buttondel.innerHTML = `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  width="25px" height="25px" viewBox="0 0 34.386 34.386" style="enable-background:new 0 0 34.386 34.386;"
  xml:space="preserve">
<g>
 <path d="M26.361,4.052h-3.564c0.004-0.039,0.021-0.074,0.021-0.114C22.818,1.767,21.051,0,18.881,0h-4.125
   c-2.171,0-3.938,1.767-3.938,3.938c0,0.041,0.019,0.075,0.023,0.114H8.025c-1.656,0-3,1.344-3,3v1.167h24.333V7.052
   C29.361,5.396,28.018,4.052,26.361,4.052z M12.818,3.938C12.818,2.87,13.688,2,14.756,2h4.125c1.067,0,1.938,0.869,1.938,1.938
   c0,0.041,0.019,0.075,0.022,0.114h-8.046C12.799,4.013,12.818,3.978,12.818,3.938z M5.026,31.386c0,1.656,1.344,3,3,3H26.36
   c1.656,0,3-1.344,3-3V10.219H5.026V31.386z M24.193,13.72c0-0.552,0.449-1,1-1c0.553,0,1,0.448,1,1v17.373c0,0.554-0.447,1-1,1
   c-0.551,0-1-0.446-1-1V13.72z M18.861,13.72c0-0.552,0.447-1,1-1c0.551,0,1,0.448,1,1v17.373c0,0.554-0.449,1-1,1
   c-0.553,0-1-0.446-1-1V13.72z M13.526,13.72c0-0.552,0.448-1,1-1c0.552,0,1,0.448,1,1v17.373c0,0.554-0.448,1-1,1
   c-0.552,0-1-0.446-1-1V13.72z M8.193,13.72c0-0.552,0.448-1,1-1s1,0.448,1,1v17.373c0,0.554-0.448,1-1,1s-1-0.446-1-1V13.72z"/>

</svg> Supprimer`;
  buttondel.style.cursor = "pointer";
  buttondel.style.background = "red";
  buttondel.addEventListener("click", deleteoneline);
  return buttondel;
};
const deleteoneline = (e) => {
  const ligne = e.target.closest(".newline");
  // console.log(ligne.cells[0].textContent);
  user = [];
  user.push(...JSON.parse(localStorage.getItem("users"))); //convertir en objet
  user.splice(ligne.cells[0].textContent - 1, 1);
  localStorage.setItem("users", JSON.stringify(user)); //convertir en string pour local storage
  //ligne.remove();  pas necessaire
  /* const ligne = e.target.closest(".newline");
  ligne.remove();
  ligne.remove();
  console.log(ligne.cells[0].textContent); */
  chargerlocal();
};
const valider = (validation) => {
  const buttoncheck = document.createElement("input");
  buttoncheck.classList.add("btncheck");
  buttoncheck.style.cursor = "pointer";
  buttoncheck.type = "checkbox";
  //buttoncheck.style.background = "yellow";
  // user = [];
  // //console.log(user); quel est le contenu de user à cet instant
  // const __users = localStorage.getItem("users");
  // if (__users == null) return;
  // user.push(...JSON.parse(__users)); //convertir en objet
  //nbrevalide=0
  validation == true
    ? (buttoncheck.checked = true)
    : (buttoncheck.checked = false);
  buttoncheck.addEventListener("click", checkinput);
  //console.log(validation);
  return buttoncheck;
};
const checkinput = (e) => {
  const ligne = e.target.closest(".newline ").querySelector(".btncheck"); //input").eq("index"); //.find("td").find("input");
  //console.log(ligne);
  //const celluleliee = ligne.cells[5];
  position = e.target.closest(".newline ").cells[0].textContent;
  // celluleliee.addEventListener("blur", cellchange);
  //console.log(celluleliee);

  // //console.log(e.target.textContent);
  // // return;
  // console.log(position);
  user = [];
  user.push(...JSON.parse(localStorage.getItem("users"))); //convertir en objet
  //console.log(user[position-1].noms);
  // return;
  ligne.checked == true
    ? (user[position - 1].done = true)
    : (user[position - 1].done = false);
  //user.splice(position - 1, 1, e.target.textContent);
  //console.log(user);
  //return;
  localStorage.setItem("users", JSON.stringify(user));
  chargerlocal();
};
const savelocal = () => {
  if (nom.value.toString().trim() == "") {
    alert("Merci de renseigner la tâche");
    nom.focus();
    return;
  }

  if (age.value.toString().trim() == "") {
    alert("Merci de renseigner le nombre de jours'");
    age.focus();
    return;
  }

  user.push({ noms: nom.value, age: age.value, done: false });
  console.log(user);
  localStorage.setItem("users", JSON.stringify(user)); //convertir en string pour local storage
  nom.value = "";
  age.value = "";
  chargerlocal();
  // } else {
  //   alert("Merci de renseigner les champs");
  // }
};

const chargerlocal = () => {
  user = [];
  nbretotal = 0;
  nbrevalide = 0;
  //nbrevalide = 0;
  //console.log(user); quel est le contenu de user à cet instant
  const __users = localStorage.getItem("users");
  if (__users == null) return;

  user.push(...JSON.parse(__users)); //convertir en objet
  //console.log(user);
  liste.innerHTML = `<thead>
  <tr><th>#</th>
  <th>Tâches</th>
  <th >Nombres de jours</th>
  <th>Editer</th>
  <th>Supprimer</th>
  <th>Valider</th></tr>
</thead>
`;
  const tbody = document.createElement("tbody");
  user.forEach((point, index) => {
    const result = document.createElement("tr");
    result.classList.add("newline");
    const celluleedit = document.createElement("td");
    celluleedit.appendChild(editer());
    const celluledel = document.createElement("td");
    celluledel.appendChild(deleteline());
    const cellulecheck = document.createElement("td");
    cellulecheck.appendChild(valider(point.done));
    //console.log(point.done);
    result.innerHTML = `<td>${
      index + 1
    } </td><td> ${point.noms.toUpperCase()}</td><td> vous avez ${
      point.age
    } jours d'excécution</td>
     `;
    if (point.done == true) nbrevalide++;
    result.appendChild(celluleedit);
    result.appendChild(celluledel);
    result.appendChild(cellulecheck);
    tbody.appendChild(result);
    nbretotal++;
  });
  liste.appendChild(tbody);
  const bilan = document.querySelector(".bilan");
  bilan.innerHTML = `<span> total des tâches: ${nbretotal}</span> <span> total des tâches réalisées: ${nbrevalide}</span> <span> total des tâches encours: ${
    nbretotal - nbrevalide
  }</span> `;
};
window.onload = () => {
  chargerlocal();
};

bouton.addEventListener("click", savelocal);
