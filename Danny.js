

//Mew stats

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
