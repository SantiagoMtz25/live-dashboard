import React, { useState } from "react";
import Inventory from "./Inventory";
import truckFast from "/truck-fast.svg";
import box from "/box.svg";
import truck from "/truck.svg";

function Dashboard() {
  // State to track the selected data source for Inventory
  const [selectedComponent, setSelectedComponent] = useState("Graphics");

  // Render Inventory with the appropriate data source based on selectedComponent
  const renderComponent = () => {
    if (selectedComponent === "Graphics") {
      return <div>Welcome to the Bimbo Dashboard</div>;
    }
    return <Inventory dataSource={selectedComponent} />;
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <div className="flex items-center justify-between bg-[#1c1d21] text-white px-6 py-4 border-b-2 border-slate-300">
        <div className="text-4xl font-thin">Bimbo Dashboard</div>
        <div className="relative">
          <svg
            className="h-8 w-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="#f5f5f5"
              d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416l384 0c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8l0-18.8c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"
            />
          </svg>
        </div>
      </div>

      <div className="flex flex-row h-full">
        {/* Sidebar */}
        <div className="w-1/5 bg-[#1c1d21] text-white flex flex-col gap-4 p-6">
          <h1 className="text-2xl font-normal mb-2">Seguimientos en vivo</h1>
          <div
            onClick={() => setSelectedComponent("Graphics")}
            className="flex items-center gap-3 px-3 py-2 rounded-xl bg-[#293038] hover:bg-slate-600 cursor-pointer"
          >
            <p className="text-white text-sm font-medium leading-normal">General</p>
          </div>
          <div
            onClick={() => setSelectedComponent("inventory")}
            className="flex items-center gap-3 px-3 py-2 rounded-xl bg-[#293038] hover:bg-slate-600 cursor-pointer"
          >
            <img src={box} alt="Inventory" className="h-6 w-6" />
            <p className="text-white text-sm font-medium leading-normal">Inventario</p>
          </div>
          <div
            onClick={() => setSelectedComponent("nextArrivals")}
            className="flex items-center gap-3 px-3 py-2 rounded-xl bg-[#293038] hover:bg-slate-600 cursor-pointer"
          >
            <img src={truck} alt="Next Arrivals" className="h-6 w-6" />
            <p className="text-white text-sm font-medium leading-normal">Próximas llegadas</p>
          </div>
          <div
            onClick={() => setSelectedComponent("orders")}
            className="flex items-center gap-3 px-3 py-2 rounded-xl bg-[#293038] hover:bg-slate-600 cursor-pointer"
          >
            <img src={box} alt="Orders" className="h-6 w-6" />
            <p className="text-white text-sm font-medium leading-normal">Ordenes</p>
          </div>
          <div
            onClick={() => setSelectedComponent("nextDepartures")}
            className="flex items-center gap-3 px-3 py-2 rounded-xl bg-[#293038] hover:bg-slate-600 cursor-pointer"
          >
            <img src={truckFast} alt="Send Orders" className="h-6 w-6" />
            <p className="text-white text-sm font-medium leading-normal">Próximas Salidas</p>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="w-3/5 flex flex-col">
          <div className="flex-1 p-8 bg-[#1c1d21]">
            {renderComponent()}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-1/5 bg-[#1c1d21] text-white flex flex-col gap-4 p-6 ">
          <h1 className="text-2xl font-normal mb-2">Camiones en Patio</h1>
          <div className="flex flex-col gap-4">
            <table className="min-w-full bg-[#293038] text-white rounded-xl">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b border-gray-700">Camion</th>
                  <th className="py-2 px-4 border-b border-gray-700">No. Placa</th>
                  <th className="py-2 px-4 border-b border-gray-700">Llegada</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-slate-600">
                  <td className="py-2 px-4 border-b border-gray-700">Truck 1</td>
                  <td className="py-2 px-4 border-b border-gray-700">ABC123</td>
                  <td className="py-2 px-4 border-b border-gray-700">10:00 AM</td>
                </tr>
                <tr className="hover:bg-slate-600">
                  <td className="py-2 px-4 border-b border-gray-700">Truck 2</td>
                  <td className="py-2 px-4 border-b border-gray-700">XYZ789</td>
                  <td className="py-2 px-4 border-b border-gray-700">11:30 AM</td>
                </tr>
                <tr className="hover:bg-slate-600">
                  <td className="py-2 px-4 border-b border-gray-700">Truck 3</td>
                  <td className="py-2 px-4 border-b border-gray-700">LMN456</td>
                  <td className="py-2 px-4 border-b border-gray-700">1:15 PM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
