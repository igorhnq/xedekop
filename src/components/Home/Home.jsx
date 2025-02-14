// Home.jsx
import React, { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import styles from "./Home.module.css";

export function Home({ searchPokemon, selectedTypes, handleTypeClick }) {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

  async function getPokemons() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1303");
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

    setPokemons(detailedPokemons);
  }

  // Filtrando pokémons pelo nome e pelos tipos selecionados
  const filteredPokemons = pokemons.filter((poke) =>
    poke.nome.toLowerCase().includes(searchPokemon.toLowerCase()) &&
    (selectedTypes.length === 0 ||
      selectedTypes.every((type) => poke.types.includes(type)))
  );

  return (
    <div>
      {filteredPokemons.length > 0 ? (
        <div id={styles.cardloc}>
          {filteredPokemons.map((poke) => (
            <Card
              key={poke.id}
              id={poke.id}
              nome={poke.nome}
              types={poke.types}
              sprite={poke.sprite}
              onTypeClick={handleTypeClick} // Botões do Card também usam a mesma função
            />
          ))}
        </div>
      ) : (
        <p>Carregando Xedekop...</p>
      )}
    </div>
  );
}
