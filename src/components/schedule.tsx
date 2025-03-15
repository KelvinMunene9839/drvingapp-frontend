import React from 'react';

const Schedule = () => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow text-center">
      <h2 className="text-2xl font-bold mb-4">Schedule to Learn Traffic Rules</h2>
      <div className="flex ">
      <div className="mb-4 ml-72">
        <h3 className="text-xl font-semibold">Morning:</h3>
        <ul className="list-disc list-inside text-lg">
          <li>06h00 - 07h50</li>
          <li>08h00 - 09h50</li>
          <li>10h00 - 11h50</li>
        </ul>
      </div>
      <div className="mb-4 ">
        <h3 className="text-xl font-semibold ml-24">Afternoon:</h3>
        <ul className="list-disc list-inside text-lg ml-24">
          <li>14h00 - 15h50</li>
          <li>16h00 - 17h50</li>
          <li>18h00 - 20h00</li>
        </ul>
      </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold">Weekend Schedule:</h3>
        <ul className="list-disc list-inside text-lg">
          <li>Saturday & Sunday: 08h00 - 13h00</li>
        </ul>
      
      </div>
    </div>
  );
};

export default Schedule;