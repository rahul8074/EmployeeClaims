import React from "react";
import {
  Users,
  DeviceMobile,
  House,
  Lifebuoy,
  Buildings,
  Receipt,
} from "phosphor-react";

function Sidebar() {
  return (
    <div className="sidebar w-full text-green-900 md:w-64 p-4 flex flex-col justify-between min-h-screen">
      <div>
        <div className="text-lg font-semibold mb-8 flex items-center">
          <img
            src="https://www.tortoise.pro/images/Horizontal-Logo---Tortoise.svg"
            alt="Tortoise Logo"
            className="mr-2"
          />
        </div>
        <div className="mb-8">
          <div className="flex items-center bg-[#11af8c] text-white p-2 rounded-lg mb-4 border-2 border-[#167e62]">
            <div className="w-1/2">
              <Receipt className="mr-2 w-10 h-10" />
              <div className="flex-grow">Claims</div>
            </div>
            <div className="text-3xl pr-2 font-semi-bold w-1/2 h-full text-right -mt-7">
              17
            </div>
          </div>
          <div className="flex items-center bg-[#f2ece3]  p-2 rounded mb-4">
            <div className="w-1/2">
              <Users className="mr-2 h-10 w-10" />
              <div className="flex-grow">Employees</div>
            </div>
            <div className="text-3xl pr-2 font-semi-bold w-1/2 h-full text-right -mt-7">
              3,456
            </div>
          </div>
          <div className="flex items-center bg-[#f2ece3] p-2 rounded mb-4">
          <div className="w-1/2">
            <DeviceMobile className="mr-2 w-10 h-10" />
            <div className="flex-grow">Devices</div>
            </div>
            <div className="text-3xl pr-2 font-semi-bold w-1/2 h-full text-right -mt-7">128</div>
          </div>
        </div>
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Buildings className="mr-2" />
            <div className="flex-grow">Organization</div>
          </div>
          <div className="flex items-center">
            <Lifebuoy className="mr-2" />
            <div className="flex-grow">Support</div>
          </div>
        </div>
      </div>
      <div className="flex items-center p-4 rounded py-10">
        <div className="text-sm bg-[#167e62] mr-2 p-2 text-white rounded-lg">
          VK
        </div>
        <div>
          <div className="font-semibold text-lg">Vardhan Koshal</div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
