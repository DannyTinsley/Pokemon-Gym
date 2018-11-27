
let img1;
let pokeinfo;
class Pokemon{
  constructor(name,hp,attack,defense,abilities,img){
    this.hp = hp;
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.ability = abilities;
    this.image = img;
    this.container = document.getElementById('allpoke');
    this.element = document.createElement('div');
    this.element.className = 'product';
  }

  display(){
    pokeinfo = document.createElement("ol");
    pokeinfo.innerHTML = [this.name,"</br> " + "HP: " + this.hp,"</br> " + "Attack: " + this.attack,"</br> " + "Defense: " + this.defense,"</br> " + "Abilities:" + this.ability];
    img1 = document.createElement('img');
    this.element.appendChild(img1);
    img1.src = this.image;
    this.element.appendChild(pokeinfo);
    this.container.appendChild(this.element);
  }
}

class Trainer{
  constructor(){
    this.pokeData = [];
  }
  all(){
    return this.pokeData;
  }
  add(info){
    this.pokeData.push(info);
  }

  get(name){
    let counter = [];
    for(let i=0;i<this.pokeData.length;i++){
      if(name === this.pokeData[i].name){
        counter.push(this.pokeData[i]);
        return counter;
      }
    }
  }
}
let starRider = new Trainer();

let pikk;
function pika(){
  let pika ="https://fizal.me/pokeapi/api/v2/name/pikachu.json";
  axios.get(pika)
    .then(function(response){

      let img = response.data.sprites.front_default;

      let abi = response.data.abilities;
      let all1 = [];
      for(let i=0;i<abi.length;i++){
        all1.push(abi[i].ability.name);
      }

      let concatenate = "";
      for(let i=0;i<abi.length;i++){
        concatenate +=all1[i] + " ";
      }

      let name = response.data.name;

      let hp = response.data.stats[5].base_stat;

      let attack = response.data.stats[4].base_stat;

      let defense = response.data.stats[3].base_stat;

      pikk = new Pokemon(name,hp,attack,defense,concatenate,img);

      pikk.display();
      starRider.add(pikk);
   })
}

let mewt;
function mew(){
  let mew ="https://fizal.me/pokeapi/api/v2/name/mewtwo.json";
    axios.get(mew)
    .then(function mew(response){

      let img = response.data.sprites.front_default;

      let abi2 = response.data.abilities;
      let all2 = [];
      for(let i=0;i<abi2.length;i++){
        all2.push(abi2[i].ability.name);
      }

      let concatenate = "";
      for(let i=0;i<abi2.length;i++){
        concatenate +=all2[i] + " ";
      }

      let name = response.data.name;

      let hp = response.data.stats[5].base_stat;

      let attack = response.data.stats[4].base_stat;

      let defense = response.data.stats[3].base_stat;

      mewt = new Pokemon(name,hp,attack,defense,concatenate,img);
      mewt.display();
      starRider.add(mewt);
    })
}

let snorl;
function snor(){
  let snorlax ="https://fizal.me/pokeapi/api/v2/name/snorlax.json";
  axios.get(snorlax)

    .then(function snor(response){

      let img = response.data.sprites.front_default;

      let abi3 = response.data.abilities;
      let all3 = [];
      for(let i=0;i<abi3.length;i++){
        all3.push(abi3[i].ability.name);
      }

      let concatenate = "";
      for(let i=0;i<abi3.length;i++){
        concatenate +=all3[i] + " ";
      }


      let name =response.data.name;

      let hp = response.data.stats[5].base_stat;

      let attack= response.data.stats[4].base_stat;

      let defense= response.data.stats[3].base_stat;

      snorl = new Pokemon(name,hp,attack,defense,concatenate,img);
      snorl.display();
      starRider.add(snorl);
    })
}

let open1 = document.getElementsByName('pokeBall');
function changing1(){
  if(open1.src === "https://ubisafe.org/images250_/pokeball-transparent-8-bit.png"){
    open1.src ='https://ubisafe.org/images250_/pokeball-transparent-8-bit-6.png';
    }
  }

  let open2 = document.getElementById("sb");
  function changing2(){
    if(open2.src === "https://ubisafe.org/images250_/pokeball-transparent-8-bit.png"){
      open2.src ='https://ubisafe.org/images250_/pokeball-transparent-8-bit-6.png';
      }
    }

let open = document.getElementById("mb");
function changing(){
  if(open.src === "https://ubisafe.org/images250_/pokeball-transparent-8-bit.png"){
    open.src ='https://ubisafe.org/images250_/pokeball-transparent-8-bit-6.png';
    }
  }

  mb.addEventListener('click', mew);
  sb.addEventListener('click', snor);
  pb.addEventListener('click', pika);
