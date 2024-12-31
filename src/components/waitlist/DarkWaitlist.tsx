import React from 'react';

const DarkWaitlist = () => {
  return (
    <div className="bg-gray-900 text-white p-8 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Join the Waitlist</h2>
      <p className="mb-4">Be the first to know when we launch!</p>
      <form className="flex flex-col">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-2 mb-4 rounded-lg bg-gray-800 border border-gray-700"
        />
        <button className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
          Sign Up
        </button>
      </form>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default DarkWaitlist;
