import React from "react";

const DashboardGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      <div className="bg-gray-400 rounded-md shadow-md p-4 flex items-center justify-center h-48 hover:scale-105 transition-all">
        <span>Inventario</span>
      </div>
      <div className="bg-gray-400 rounded-md shadow-md p-4 flex items-center justify-center h-48 hover:scale-105 transition-all">
        <span>Próximas LLegadas</span>
      </div>
      <div className="bg-gray-400 rounded-md shadow-md p-4 flex items-center justify-center h-48 hover:scale-105 transition-all">
        <span>Ordenes</span>
      </div>
      <div className="bg-gray-400 rounded-md shadow-md p-4 flex items-center justify-center h-48 hover:scale-105 transition-all">
        <span>Próximas Salidas</span>
      </div>
    </div>
  );
};

export default DashboardGrid;
