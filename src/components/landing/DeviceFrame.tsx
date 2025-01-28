import React from 'react';

const DeviceFrame = () => {
  return (
    <div className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-2 rounded-[30px] animated-border p-2 md:p-6 bg-[#222222] shadow-2xl">
      <div className="h-full w-full rounded-2xl bg-[#1D1C20] overflow-hidden">
        {/* Browser Controls */}
        <div className="flex items-start space-x-4 mb-6 p-4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6 grid grid-cols-3 gap-4">
          {/* Top Stats */}
          <div className="col-span-1 bg-gray-800/50 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full border-2 border-purple-500"></div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">$11,000</div>
                <div className="text-sm text-gray-400">Revenue</div>
              </div>
            </div>
          </div>

          <div className="col-span-1 bg-gray-800/50 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full border-2 border-purple-500"></div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">$750</div>
                <div className="text-sm text-gray-400">Daily Avg</div>
              </div>
            </div>
          </div>

          <div className="col-span-1 bg-gray-800/50 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full border-2 border-purple-500"></div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">240</div>
                <div className="text-sm text-gray-400">Users</div>
              </div>
            </div>
          </div>

          {/* Main Chart */}
          <div className="col-span-3 bg-gray-800/50 rounded-lg p-4 h-48">
            <div className="w-full h-full flex items-end space-x-2">
              {[...Array(20)].map((_, i) => (
                <div 
                  key={i}
                  className="w-full bg-purple-500/50 rounded-t"
                  style={{ 
                    height: `${Math.random() * 100}%`,
                  }}
                ></div>
              ))}
            </div>
          </div>

          {/* Bottom Charts */}
          <div className="col-span-3 grid grid-cols-2 gap-4">
            <div className="bg-gray-800/50 rounded-lg p-4 h-32">
              <div className="w-full h-full flex items-center">
                <div className="w-full h-1 bg-purple-500/20 rounded relative">
                  <div className="absolute inset-0 bg-purple-500 rounded" style={{ width: '65%' }}></div>
                </div>
              </div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4 h-32">
              <div className="w-full h-full flex items-end space-x-1">
                {[...Array(12)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-full bg-purple-500/50 rounded-t"
                    style={{ 
                      height: `${Math.random() * 100}%`,
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceFrame;