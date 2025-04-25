import React from 'react';
import CryptoTable from './components/CryptoTable';
import { useWebSocket } from './utils/websocket';

function App() {
  useWebSocket();

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 border-b border-gray-200 pb-2">
          Crypto Price Tracker
        </h1>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <CryptoTable />
        </div>
      </div>
    </div>
  );
}

export default App;