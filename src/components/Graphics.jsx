import React from "react";

const DashboardGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      <div className="bg-gray-400 rounded-md shadow-md p-4 flex items-center justify-center h-48">
        <span>Info 1</span>
      </div>
      <div className="bg-gray-400 rounded-md shadow-md p-4 flex items-center justify-center h-48">
        <span>Info 2</span>
      </div>
      <div className="bg-gray-400 rounded-md shadow-md p-4 flex items-center justify-center h-48">
        <span>Info 3</span>
      </div>
      <div className="bg-gray-400 rounded-md shadow-md p-4 flex items-center justify-center h-48">
        <span>Info 4</span>
      </div>
    </div>
  );
};

export default DashboardGrid;
