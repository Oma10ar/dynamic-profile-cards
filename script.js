let container = document.createElement("div");
document.body.appendChild(container);

container.style.cssText = `
    display: flex;
    width: 100%;
    min-height: 100vh;
    gap: 10px;
    flex-wrap : wrap;
    padding : 10px`;
function elementCard(name, age, gender) {
  let card = document.createElement("div");

  let img = document.createElement("img");

  if (gender == "female") {
    img.src = "img/woman.jpg";
  } else if (gender == "male") {
    img.src = "img/man.jpg";
  } else {
    img.src = "img/default.jpg";
  }
  let title = document.createElement("h1");
  title.innerText = name;
  let agePerson = document.createElement("h3");
  agePerson.innerText = `${age} years old`;
  card.appendChild(title);
  card.appendChild(agePerson);
  card.appendChild(img);

  card.style.cssText = `
    width :  30%;
    height: 400px;
    display: flex;
    flex-direction: column;
    padding: 5px;
    background: white;
    justify-content: center;
    align-items: center;
    border : solid black 2px;
    
`;

  img.style.cssText = ` 
    width: 180px;
`;
  return card;
}

container.appendChild(elementCard("omar", 21, "male"));
container.appendChild(elementCard("Marwa", 25, "female"));
container.appendChild(elementCard("Fatima", 29, "female"));
container.appendChild(elementCard("Hasan", 31, "male"));
container.appendChild(elementCard("Rami", 9, "male"));
container.appendChild(elementCard("Sami" , 22 , "male"))
