// Oppgave 1
let btnRemove = document.querySelector('#remove-btn');
let removeText = document.getElementById("remove");


btnRemove.addEventListener('click', (event) => {
  console.log('Knapp trykket');
  removeText.remove()
});

// Oppgave 2
let changeBtn = document.querySelector('#change-btn');
let changeText = document.getElementById("change");

changeBtn.addEventListener('click', (event) => {
  console.log('Knappen trykket');
  changeText.textContent = "Hello beautiful ;)";
  changeText.style.color = "blue";
  changeText.style.fontSize = "50px";
  
});

// Oppgave 3
let inputBox = document.querySelector('#input');
let inputText = document.getElementById("input-text");
//inputBox er form feltet man skriver inn
inputBox.addEventListener('input', (event) => {
  inputText.textContent = inputBox.value;

}); 


// Oppgave 4
let getList = document.getElementById("ul");
let listBtn = document.querySelector("#write-list")



const myList = ["item one", "item two", "item three"];

listBtn.addEventListener('click', () => {
  myList.forEach((index) => {
    console.log(index);
    //lager HTML elementet
    let li = document.createElement("li");
    //knytter tekst til elementet
    li.innerText = index;
    getList.appendChild(li);
  });
});


// Oppgave 5
let createBtn = document.querySelector("#create");
let select = document.getElementById("select");
let writeBox = document.getElementById('text');
let placeHolder = document.getElementById('placeholder');

let newElement = () => {
  let htmlElement = select.value;
  let text = writeBox.value;
  placeHolder.innerHTML += `<${htmlElement}>${text}</${htmlElement}>`;
};

createBtn.addEventListener('click', newElement);

// Oppgave 6

//Lag lytteren til knappen med id #remove-li og funksjonen 
//som gjør at du ved hvert klikk sletter et og et li element 
//fra ul med id #list
let removeLi = document.getElementById("remove-li");
let list = document.getElementById("list")



function removeLiE(){
  const lastElement =  list.lastElementChild;
  if (lastElement) {
    list.removeChild(lastElement);
  }
}

removeLi.addEventListener("click", removeLiE);


// Oppgave 7
//Lytt til tastaturklikk på inputboks med id #name. 
//Lag funksjonen som sjekker om ordet er maksimum 4 bokstaver langt. 
//Hvis du krysser 4 bokstaver gjør knappen med id #order 
//disablet eller gi knappen en rød border

let inputName = document.getElementById("name");
let orderBtn = document.getElementById("order");


inputName.addEventListener('input', () => {
  let lengthName = inputName.value.length;
  if (lengthName > 4 ) {
    console.log("Heihei")
    orderBtn.style.borderColor = "red";
  }

}); 



//Hent ut alle barna av ul med klasse .children. 
//Gi oddetall-barna grønn border mens partall skal ha pink. 
//Bruk knappen med id #color for å gjøre endringen.
// Oppgave 8

let childrenE = document.querySelector(".children");
let changeColorBtn = document.getElementById("color");




changeColorBtn.addEventListener("click", () => {
  for (let i = 0; i < childrenE.children.length; i++) {
    
    if (i % 2 === 0){
      childrenE.children[i].style.border = "3px solid red";
    }
    else {
    childrenE.children[i].style.border = "3px solid black";
    }

  }
  
  

});
