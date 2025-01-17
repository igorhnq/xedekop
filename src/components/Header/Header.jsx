import { useEffect, useState } from 'react'
import { MagnifyingGlass } from '@phosphor-icons/react'
import styles from './Header.module.css'
import PokeBall from '../../assets/img/icon.png'

export function Header({ searchPokemon, setSearchPokemon, setSelectedType, selectedType }) {
    const [pokemonTypes, setPokemonTypes] = useState([])

    const handleSearchChange = (event) => {
        setSearchPokemon(event.target.value)
    }

    const handleTypeClick = (type) => {
        setSelectedType(type)
    }

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
                <input 
                    type="text" 
                    placeholder='Pesquisar...' 
                    value={searchPokemon}
                    onChange={handleSearchChange}
                    />
            </div>
            
            <div className={styles.typeCardContainer}>
                {pokemonTypes.map((type) => (
                    <div key={type.name} 
                        className={`${styles.typeCard} ${styles[type.name] || ""}`}
                        onClick={() => handleTypeClick(type.name)}
                    >
                        <h2>{type.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}