import { useState } from 'react';
import { Header } from "./components/Header/Header"
import { Home } from "./components/Home/Home";
import './app.css'

function App() {
    const [searchPokemon, setSearchPokemon] = useState('')
    
    return (
        <div>
            <Header searchPokemon={searchPokemon} setSearchPokemon={setSearchPokemon} />
            <body id='body'>
                <Home searchPokemon={searchPokemon} />
            </body>
        </div>
    )
}
export default App
