import React, { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import styles from "./Home.module.css";

export function Home({ searchPokemon }) {
    const [pokemons, setpokemons] = useState([]);
    const [selectedTypes, setSelectedTypes] = useState([]); // Lista de tipos selecionados

    useEffect(() => {
        getpokemons();
    }, []);

    async function getpokemons() {
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

        setpokemons(detailedPokemons);
    }

    // Adicionar tipos ao filtro, apenas se não estiverem selecionados
    const handleTypeClick = (type) => {
        if (!selectedTypes.includes(type)) {
            setSelectedTypes((prevTypes) => [...prevTypes, type]);
        }
    };

    // Remover tipos ao clicar no "✖" do filtro
    const removeType = (type) => {
        setSelectedTypes((prevTypes) => prevTypes.filter((t) => t !== type));
    };

    // Filtrar pokémons pelo tipo selecionado e busca
    const filteredPokemons = pokemons.filter((poke) =>
        poke.nome.toLowerCase().includes(searchPokemon.toLowerCase()) &&
        (selectedTypes.length > 0
            ? selectedTypes.every((type) => poke.types.includes(type))
            : true)
    );

    return (
        <div>
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

            {/* Exibir os cards */}
            {filteredPokemons.length > 0 ? (
                <div id={styles.cardloc}>
                    {filteredPokemons.map((poke) => (
                        <Card
                            key={poke.id}
                            id={poke.id}
                            nome={poke.nome}
                            types={poke.types}
                            sprite={poke.sprite}
                            onTypeClick={handleTypeClick} // Permite adicionar tipos via botão no card
                        />
                    ))}
                </div>
            ) : (
                <p>Carregando Xedekop...</p>
            )}
        </div>
    );
}
