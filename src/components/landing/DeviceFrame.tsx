import React from 'react';

const DeviceFrame = () => {
  return (
    <div className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-2 rounded-[30px] animated-border p-2 md:p-6 bg-[#222222] shadow-2xl">
      <div className="h-full w-full rounded-2xl bg-[#1D1C20] overflow-hidden">
        <div className="flex items-start space-x-4 mb-6 p-4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>
        <div className="space-y-4 p-6">
          {[1, 2, 3, 4, 5].map((item) => (
            <div 
              key={item} 
              className="flex items-center space-x-4 p-3 rounded-lg bg-gray-900/50 border border-gray-800"
            >
              <div className="w-4 h-4 rounded-full bg-blue-500/20"></div>
              <div className="flex-1">
                <div className="h-2.5 w-24 bg-gray-700 rounded"></div>
              </div>
              <div className="w-12 h-2.5 bg-gray-700 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeviceFrame;