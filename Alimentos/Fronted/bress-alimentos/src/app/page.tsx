import React from "react";
import Dashboard from "../app/componentes/InsumosBress"; // Importa el módulo Dashboard

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Bress Alimentos</h1>
      <h1 className="text-2xl font-bold mb-2">Hospital General Tipo I de Tecpán Guatemala</h1>
      <hr></hr>
      <Dashboard /> {/* Renderiza el módulo aquí */}
    </div>
  );
};

export default Home;
