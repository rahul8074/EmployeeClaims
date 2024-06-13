import React from "react";
import ClaimItem from "./ClaimItem";
import claims from "../data/claims";
import { Receipt, MagnifyingGlass ,Funnel,ListChecks} from "phosphor-react";

function Claims() {
  return (
    <div className="flex-1 p-4 m-4 md:p-8 bg-white rounded-lg">
      <div className="flex  flex-col md:flex-row justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold flex items-center mb-4 md:mb-0">
          <Receipt size={35} weight="fill" className="mr-2 text-[#167e62]" />
          Claims
        </h1>
        <div className="flex space-x-2">
          <button className="px-4 py-2 rounded-lg bg-gray-300">Open</button>
          <button className="px-4 py-2 rounded-lg bg-gray-100">Approved</button>
          <button className="px-4 py-2 rounded-lg bg-gray-100">Rejected</button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row bg-[#f9faf9] p-4 items-center rounded shadow mb-4">
        <img
        src="https://w7.pngwing.com/pngs/60/414/png-transparent-iphone-14-thumbnail.png"
          alt="Device"
          className="w-32 h-20 md:w-24 md:h-24 rounded mb-4 md:mb-0 md:mr-4 bg-transparent"
        />
        <div>
          <h2 className="text-xl font-semibold">
            17 employees want to claim their device allowance
          </h2>
          <p className="text-gray-500">
            Review their requests at the earliest to ensure a great benefit
            claim experience
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <div className="relative w-full md:w-1/3 mb-4 md:mb-0">
          <MagnifyingGlass
            size={25}
            className="absolute left-3 top-2.5 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search by name"
            className="p-2 pl-10 border border-gray-300 rounded-lg w-full bg-[#f9faf9]"
          />
        </div>
        <div className="flex space-x-2">
          <button className="px-4 py-2 rounded-lg border border-gray-300 flex items-center">
          <Funnel
            size={20}
            className=""
          />
            Filters
          </button>
          <button className="px-4 py-2 rounded-lg border border-gray-300 flex items-center">
          <ListChecks
            size={20}
            className=""
          />
            Bulk actions
          </button>
        </div>
      </div>
      <div className="rounded shadow overflow-x-auto ">
        <div className="p-4">
          <table className="min-w-full">
            <thead className="">
              <tr className="border-b ">
                <th className="p-2 text-left">Employee</th>
                <th className="p-2 text-left">Device</th>
                <th className="p-2 text-left">Requested on</th>
                <th className="p-2 text-left">Amount payable</th>
                <th className="p-2 text-left"></th>
              </tr>
            </thead>
            <tbody>
              {claims.map((claim) => (
                <ClaimItem key={claim.id} claim={claim} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Claims;
