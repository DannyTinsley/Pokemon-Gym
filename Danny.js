
let mewBox= document.getElementById("mewBox");
let mew1= document.getElementById("attack1");

let bulby= document.getElementById("attack3");
let bulbBox= document.getElementById("bulbBox")
bulby.addEventListener("click", bulbStats);
bulby.addEventListener("click", appear2);

let sq= document.getElementById("attack2");
let squirtBox= document.getElementById("squirtBox");
sq.addEventListener("click", squirtStats);
sq.addEventListener("click", appear3);



function appear1() {

  if (mewBox.style.visibility== "hidden") {
      mewBox.style.visibility = "visible";
  } else {
      mewBox.style.visibility = "hidden";
  }
}


mew1.addEventListener("click", mewStats);
mew1.addEventListener("click", appear1);



class Pokemon {
  constructor(name, hp, attack, defense, ability) {
    this.name= name;
    this.hp= hp;
    this.attack= attack;
    this.defense= defense;
    this.ability= ability;
  }
  // stats for each pokemon


  stats() {
    let mewPara= document.createElement("li");
    let box1= document.getElementById("listStat");
    //innerHTML order matters; must be above appendChild
    box1.innerHTML=""
    box1.appendChild(mewPara);

    //create a lot of breaks to seperate lines

    let br= document.createElement("br");
    let br2= document.createElement("br");
    let br3= document.createElement("br");
    let br4= document.createElement("br");




    let mewsName= document.createTextNode("Name: "+ this.name);
    let mewsHP= document.createTextNode("HP: " + this.hp);
    let mewsAttack = document.createTextNode ("Attack: "+
    this.attack);
    let mewsDefense= document.createTextNode ("Defense: "+ this.defense);
    let mewsAbility= document.createTextNode ("Ability: "+ this.ability);
    mewPara.appendChild(mewsName);
    mewPara.appendChild(br);
    mewPara.appendChild(mewsHP);
    mewPara.appendChild(br2);
    mewPara.appendChild(mewsAttack);
    mewPara.appendChild(br3);
    mewPara.appendChild(mewsDefense);
    mewPara.appendChild(br4);
    mewPara.appendChild(mewsAbility);

  }
}

class Trainer {
  constructor (){
  this.pokemon= []
}
  all (){

  }
  get(name){

  }
}


// get stats for mew







function mewStats (){
  axios.get ("https://fizal.me/pokeapi/api/v2/name/mew.json")
  .then(function (response) {
    console.log(response.data);
    console.log(response.data.abilities[0].ability.name);

    let mewFinally= new Pokemon (response.data.name, response.data.stats[5].base_stat, response.data.stats[4].base_stat, response.data.stats[3].base_stat, response.data.abilities[0].ability.name);

    mewFinally.stats();
} )
}




//get stats for bulbasaur



function bulbStats (){
  axios.get ("https://fizal.me/pokeapi/api/v2/name/bulbasaur.json")
  .then(function (response) {
    console.log(response.data);
    console.log(response.data.abilities[0].ability.name);

    let bulbFinally= new Pokemon (response.data.name, response.data.stats[5].base_stat, response.data.stats[4].base_stat, response.data.stats[3].base_stat, response.data.abilities[0].ability.name);

    bulbFinally.stats();
} )
}

function appear2() {

  if (mewBox.style.visibility== "hidden") {
      mewBox.style.visibility = "visible";
  } else {
      mewBox.style.visibility = "hidden";
  }
}




// get stats for squirtle


function squirtStats (){
  axios.get ("https://fizal.me/pokeapi/api/v2/name/squirtle.json")
  .then(function (response) {
    console.log(response.data);
    console.log(response.data.abilities[0].ability.name);

    let bulbFinally= new Pokemon (response.data.name, response.data.stats[5].base_stat, response.data.stats[4].base_stat, response.data.stats[3].base_stat, response.data.abilities[0].ability.name);

    bulbFinally.stats();
} )
}

function appear3() {

  if (mewBox.style.visibility== "hidden") {
      mewBox.style.visibility = "visible";
  } else {
      mewBox.style.visibility = "hidden";
  }
}
