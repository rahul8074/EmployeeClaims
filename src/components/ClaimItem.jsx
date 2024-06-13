import React from 'react';
import { CheckCircle, CaretDown ,CaretRight} from 'phosphor-react';

function ClaimItem({ claim }) {
  return (
    <tr className="border-b">
      <td className="p-2 flex items-center">
        <img src={claim.employeeImage} alt={claim.name} className="w-10 h-10 rounded-full mr-2" />
        <div>
          <div className="font-semibold">{claim.name}</div>
          <div className="text-sm text-gray-500">{claim.role}</div>
        </div>
      </td>
      <td className="p-2">
        <div className='flex'>
        <img src={claim.deviceImage} alt={claim.device} className="w-10 h-10 mr-2" />
        <div>
          <div className="font-semibold">{claim.device}</div>
          <div className="text-sm text-gray-500">{claim.addons}</div>
        </div>
        </div>
       
      </td>
      <td className="p-2">
        <div>{claim.requested}</div>
        <div className="text-sm text-gray-500">{claim.date}</div>
      </td>
      <td className="p-2">
        <div>{claim.amount}</div>
        <div className="text-sm text-gray-500">{claim.duration}</div>
      </td>
      <td className="p-2 flex items-center">
      <button className="text-black px-4 py-2 rounded flex items-center border border-gray-300 bg-white shadow">
        <CheckCircle size={20} weight="fill" className="mr-2 text-[#167e62]" />
        Approve
        <CaretDown size={20} weight="fill" className="ml-2 border-l-2 pl-2" />
      </button>
      <CaretRight size={32} className='pl-4'/>
    </td>
    </tr>
  );
}

export default ClaimItem;
