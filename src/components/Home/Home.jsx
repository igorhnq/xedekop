import React, { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import styles from "./Home.module.css"

export function Home() {
  const [pokemons, setpokemons] = useState([]);

  useEffect(() => {
      getpokemons();
  }, []);

  async function getpokemons() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1302');
      const data = await response.json();

      const detailedPokemons = await Promise.all(
          data.results.map(async (pokemon) => {
              const detailsResponse = await fetch(pokemon.url);
              const details = await detailsResponse.json();

              const types = details.types.map((typeInfo) => typeInfo.type.name);
              const sprite = details.sprites.front_default;

              return {
                  id: details.id,
                  nome: pokemon.name,
                  types,
                  sprite,
              };
          })
      );

      setpokemons(detailedPokemons);
  }

  return (
      <div>
          {pokemons.length > 0 ? (
              <div id={styles.cardloc} >
                  {pokemons.map((poke) => (
                      <Card 
                          key={poke.id} 
                          id={poke.id} 
                          nome={poke.nome} 
                          types={poke.types} 
                          sprite={poke.sprite} 
                      />
                  ))}
              </div>
          ) : (
              <p>Carregando Xedekop...</p>
          )}
      </div>
  );
}

