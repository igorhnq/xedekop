import { useState } from 'react';
import { Header } from "./components/Header/Header"
import { Home } from "./components/Home/Home";
import './app.css'

function App() {
    const [searchPokemon, setSearchPokemon] = useState('')
    const [selectedType, setSelectedType] = useState(null)
    
    return (
        <div>
            <Header 
                searchPokemon={searchPokemon} 
                setSearchPokemon={setSearchPokemon}
                setSelectedType={setSelectedType}
                />
            <body id='body'>
                <Home 
                    searchPokemon={searchPokemon}
                    selectedType={selectedType}
                />
            </body>
        </div>
    )
}
export default App
