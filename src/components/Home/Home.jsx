import React, { useEffect, useState } from "react";
import { Card } from "../Card/Card";

export function Home() {

const [pokemons, setpokemons] = useState([]);
const [teste, setteste] = useState([])
useEffect(() => {
  getpokemons();
}, []);

async function getpokemons() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=9');
  const data = await response.json();
  setpokemons(data);
}

async function g(){

};

  async function algo() {
    const nomespokemon= await pokemons.results

    for (let i = 0; i < await nomespokemon.length; i++) {
        const pokenames = await pokemons.results[i].name;
        console.log(i);
        console.log(await pokenames);
        
        const urlpokemon = await pokemons.results[i].url
        const checktype = await fetch(urlpokemon)
        const datacheck = await checktype.json()
      
        for (let i = 0; i < datacheck.types.length; i++) {
            const filteredtype = datacheck.types[i];
            console.log(await filteredtype.type.name);
          }
        }
  }
  
  algo()
  console.log(pokemons.results);
  
  return(
    <div>
        <Card
        values={pokemons.results}
        ></Card>
    </div>
  )
}
