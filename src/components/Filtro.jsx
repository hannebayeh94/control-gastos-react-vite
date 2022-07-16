import React, { useEffect, useState } from "react";

const Filtro = ({ filtro, setFiltro }) => {
  return (
    <div className="filtros sombra contendedor">
      <form>
        <div className="campo">
          <label>Filtrar Gasto</label>
          <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
            <option value="">Todos los gastos</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="varios">Gastos Varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Filtro;
