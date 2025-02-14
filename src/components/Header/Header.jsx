// Header.jsx
import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { MagnifyingGlass } from "@phosphor-icons/react";
import PokeBall from "../../assets/img/icon.png";

export function Header({
  searchPokemon,
  setSearchPokemon,
  selectedTypes,
  handleTypeClick,
  removeType,
}) {
  const [pokemonTypes, setPokemonTypes] = useState([]);

  const handleSearchChange = (event) => {
    setSearchPokemon(event.target.value);
  };

  useEffect(() => {
    async function fetchPokemonType() {
      const response = await fetch("https://pokeapi.co/api/v2/type");
      const result = await response.json();
      setPokemonTypes(result.results);
    }
    fetchPokemonType();
  }, []);

  return (
    <div>
      <header className={styles.header}>
        <img src={PokeBall} alt="Pokebola" />
        <h1>Xedekop</h1>
      </header>

      <div className={styles.searchBar}>
        <MagnifyingGlass />
        <input
          type="text"
          placeholder="Pesquisar..."
          value={searchPokemon}
          onChange={handleSearchChange}
        />
      </div>

      {/* Botões para selecionar os tipos */}
      <div className={styles.typeCardContainer}>
        {pokemonTypes.map((type) => (
          <div
            key={type.name}
            className={`${styles.typeCard} ${styles[type.name] || ""} ${
              selectedTypes.includes(type.name) ? styles.active : ""
            }`}
            onClick={() => handleTypeClick(type.name)}
          >
            <h2>{type.name}</h2>
          </div>
        ))}
      </div>

      {/* Exibir os tipos selecionados como botões para remoção */}
      {selectedTypes.length > 0 && (
        <div className={styles.selectedTypes}>
          {selectedTypes.map((type) => (
            <button
              key={type}
              onClick={() => removeType(type)}
              className={`${styles.typeButton} ${styles[type]}`}
            >
              {type} ✖
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
