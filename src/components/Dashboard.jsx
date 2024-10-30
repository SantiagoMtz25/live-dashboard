import React from "react";
import Graphics from "./Graphics";

function Dashboard() {
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <div className="flex items-center justify-between bg-[#1c1d21] text-white px-6 py-4 border-b-2 border-slate-300">
        <div className="text-4xl font-thin">Bimbo Dashboard</div>
        <div className="relative">
          {/* <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-1">
            3
          </span> */}
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
        <div className="w-[450px] bg-[#1c1d21] text-white flex flex-col gap-4 p-6">
          <h1 className="text-2xl font-normal mb-2">Seguimientos en vivo</h1>
          <div class="flex items-center gap-3 px-3 py-2 rounded-xl bg-[#293038] hover:bg-slate-600">
            <div
              class="text-white"
              data-icon="House"
              data-size="24px"
              data-weight="fill"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"></path>
              </svg>
            </div>
            <p class="text-white text-sm font-medium leading-normal">General</p>
          </div>
          <div class="flex items-center gap-3 px-3 py-2 rounded-xl bg-[#293038] hover:bg-slate-600">
            <div
              class="text-white"
              data-icon="File"
              data-size="24px"
              data-weight="regular"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z"></path>
              </svg>
            </div>
            <p class="text-white text-sm font-medium leading-normal">Inventario</p>
          </div>
          <div class="flex items-center gap-3 px-3 py-2 rounded-xl bg-[#293038] hover:bg-slate-600">
            <div
              class="text-white"
              data-icon="Bell"
              data-size="24px"
              data-weight="regular"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
              </svg>
            </div>
            <p class="text-white text-sm font-medium leading-normal">Proximas llegadas</p>
          </div>
          <div class="flex items-center gap-3 px-3 py-2 rounded-xl bg-[#293038] hover:bg-slate-600">
            <div
              class="text-white"
              data-icon="Users"
              data-size="24px"
              data-weight="regular"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
              </svg>
            </div>
            <p class="text-white text-sm font-medium leading-normal">Ordenes</p>
          </div>
          <div class="flex items-center gap-3 px-3 py-2 rounded-xl bg-[#293038] hover:bg-slate-600">
            <div
              class="text-white"
              data-icon="UsersThree"
              data-size="24px"
              data-weight="regular"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z"></path>
              </svg>
            </div>
            <p class="text-white text-sm font-medium leading-normal">
              Proximas Salidas
            </p>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="w-full flex flex-col">
          {/* Dashboard Content */}
          <div className="flex-1 p-8 bg-[#1c1d21]">
            <Graphics />
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-[550px] bg-[#1c1d21] text-white flex flex-col gap-4 p-6 ">
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
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-700">Truck 1</td>
                    <td className="py-2 px-4 border-b border-gray-700">ABC123</td>
                    <td className="py-2 px-4 border-b border-gray-700">10:00 AM</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-700">Truck 2</td>
                    <td className="py-2 px-4 border-b border-gray-700">XYZ789</td>
                    <td className="py-2 px-4 border-b border-gray-700">11:30 AM</td>
                  </tr>
                  <tr>
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
