class Trainer{
  pokemon(name, hometown){
    this.name= name;
    this.hometown = hometown;}

    all(){
      return pokemon;}
    get(name){
      return pokemon[0];}
    }

axios.get("https://fizal.me/pokeapi/api/v2/name/tangrowth.json")
    .then(insert)
      function insert(response){
        let pokename = response.data.species.name;
        let hp = response.data.stats[5].base_stat;
        let attack= response.data.stats[4].base_stat;
        let defense = response.data.stats[3].base_stat;
        let abilities = response.data.abilities[0].ability.name;
        console.log(response.data);
        console.log(pokename);

        let listPokeName = document.getElementById('name');
        listPokeName.innerHTML ="Poke Name: " + pokename;

        let listHp = document.getElementById('hp');
        listHp.innerHTML ="HP: " + hp;

        let listAttack = document.getElementById('attack');
        listAttack.innerHTML = "Attack: " + attack;

        let listDefense = document.getElementById('defense');
        listDefense.innerHTML = "Defense: " + defense;

        let listAbilities = document.getElementById('abilities');
        listAbilities.innerHTML = "Abilities: " + abilities;

      }

      axios.get("https://fizal.me/pokeapi/api/v2/name/roselia.json")
          .then(insertTwo)
            function insertTwo(response){
              let pokename = response.data.species.name;
              let hp = response.data.stats[5].base_stat;
              let attack= response.data.stats[4].base_stat;
              let defense = response.data.stats[3].base_stat;
              let abilities = response.data.abilities[0].ability.name;
              console.log(response.data);
              console.log(pokename);

              let listPokeName = document.getElementById('name2');
              listPokeName.innerHTML ="Poke Name: " + pokename;

              let listHp = document.getElementById('hp2');
              listHp.innerHTML ="HP: " + hp;

              let listAttack = document.getElementById('attack2');
              listAttack.innerHTML = "Attack: " + attack;

              let listDefense = document.getElementById('defense2');
              listDefense.innerHTML = "Defense: " + defense;

              let listAbilities = document.getElementById('abilities2');
              listAbilities.innerHTML = "Abilities: " + abilities;

            }

    axios.get("https://fizal.me/pokeapi/api/v2/name/vileplume.json")
                .then(insertThree)
                  function insertThree(response){
                    let pokename = response.data.species.name;
                    let hp = response.data.stats[5].base_stat;
                    let attack= response.data.stats[4].base_stat;
                    let defense = response.data.stats[3].base_stat;
                    let abilities = response.data.abilities[0].ability.name;
                    console.log(response.data);
                    console.log(pokename);

                    let listPokeName = document.getElementById('name3');
                    listPokeName.innerHTML ="Poke Name: " + pokename;

                    let listHp = document.getElementById('hp3');
                    listHp.innerHTML ="HP: " + hp;

                    let listAttack = document.getElementById('attack3');
                    listAttack.innerHTML = "Attack: " + attack;

                    let listDefense = document.getElementById('defense3');
                    listDefense.innerHTML = "Defense: " + defense;

                    let listAbilities = document.getElementById('abilities3');
                    listAbilities.innerHTML = "Abilities: " + abilities;

                  }




class Pokemon{
  constructor(pokename, hp, attack, defense, abilities){
        this.pokename = pokename;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.abilities = abilities;}
      }
