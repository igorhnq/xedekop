import { useEffect, useState } from 'react'
import { MagnifyingGlass } from '@phosphor-icons/react'
import styles from './Header.module.css'
import PokeBall from '../../assets/img/icon.png'

const typeColors = {
    normal: '#A8A77A',
    fire: '#F08030',
    water: '#6890F0',
    electric: '#F8D030',
    grass: '#78C850',
    ice: '#98D8D8',
    fighting: '#C03028',
    poison: '#A040A0',
    ground: '#E0C068',
    flying: '#A890F0',
    psychic: '#F85888',
    bug: '#A8B820',
    rock: '#B8A038',
    ghost: '#705898',
    dragon: '#7038F8',
    dark: '#705848',
    steel: '#B8B8D0',
    fairy: '#EE99AC',
};

export function Header() {
    const [pokemonTypes, setPokemonTypes] = useState([])

    useEffect(() => {
        async function fetchPokemonType() {
            const response = await fetch('https://pokeapi.co/api/v2/type')
            const result = await response.json()
            setPokemonTypes(result.results)
        }
        fetchPokemonType()
    }, [])

    return (
        <div>
            <header className={styles.header}  >
                <img src={PokeBall} />
                <h1>Xedekop</h1>
            </header>

            <div className={styles.searchBar}>
                <MagnifyingGlass/>
                <input type="text" placeholder='Pesquisar...' />
            </div>
            
            <div className={styles.typeCardContainer}>
                {pokemonTypes.map((type) => (
                    <div key={type.name} 
                        className={styles.typeCard}
                        style={{
                            backgroundColor: typeColors[type.name]
                        }}
                        >
                        <h2>{type.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}