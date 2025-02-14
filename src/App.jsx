// App.jsx
import React, { useState } from "react";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";

function App() {
  const [searchPokemon, setSearchPokemon] = useState("");
  const [selectedTypes, setSelectedTypes] = useState([]);

  // Função para adicionar um tipo (ou alternar se quiser também remover com o mesmo clique)
  const handleTypeClick = (type) => {
    // Aqui, a lógica é: se o tipo ainda não estiver selecionado, adiciona-o.
    if (!selectedTypes.includes(type)) {
      setSelectedTypes((prevTypes) => [...prevTypes, type]);
    }
  };

  // Função para remover um tipo (usada, por exemplo, no botão "✖" dos filtros)
  const removeType = (type) => {
    setSelectedTypes((prevTypes) => prevTypes.filter((t) => t !== type));
  };

  return (
    <div>
      <Header
        searchPokemon={searchPokemon}
        setSearchPokemon={setSearchPokemon}
        selectedTypes={selectedTypes}
        handleTypeClick={handleTypeClick}
        removeType={removeType}
      />
      <Home
        searchPokemon={searchPokemon}
        selectedTypes={selectedTypes}
        handleTypeClick={handleTypeClick}
      />
    </div>
  );
}

export default App;
