import React from 'react';
import { useSelector } from 'react-redux';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';
import LogoBTC from '../assets/btc.png';
import LogoETH from '../assets/eth.png';
import LogoUSDT from '../assets/usdt.png';
import LogoXRP from '../assets/xrp.png';
import LogoSOL from '../assets/sol.png';

const CryptoTable = () => {
  const assets = useSelector((state) => state.crypto.assets);

  const logoMap = {
    BTC: LogoBTC,
    ETH: LogoETH,
    USDT: LogoUSDT,
    XRP: LogoXRP,
    SOL: LogoSOL,
  };

  return (
    <div className="overflow-x-auto px-4 py-6 bg-white shadow-md rounded-2xl">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Top Cryptocurrencies</h2>
      <table className="min-w-full text-sm">
        <thead>
          <tr className="bg-[#F9FAFB] text-gray-600 uppercase text-xs tracking-wider">
            <th className="py-3 px-4 text-center">#</th>
            <th className="py-3 px-4 text-left">Name</th>
            <th className="py-3 px-4 text-center">Price</th>
            <th className="py-3 px-4 text-center">1h %</th>
            <th className="py-3 px-4 text-center">24h %</th>
            <th className="py-3 px-4 text-center">7d %</th>
            <th className="py-3 px-4 text-center">Market Cap</th>
            <th className="py-3 px-4 text-center">24h Volume</th>
            <th className="py-3 px-4 text-center">Circulating Supply</th>
            <th className="py-3 px-4 text-center">Last 7 Days</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {assets.map((asset, index) => {
            const chartColor = asset.change7d >= 0 ? '#22C55E' : '#EF4444';
            const fillColor = asset.change7d >= 0 ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)';

            return (
              <tr
                key={asset.id}
                className="border-b hover:bg-gray-50 transition duration-200 ease-in-out"
              >
                <td className="py-3 px-4 text-center text-gray-500 font-medium">{index + 1}</td>
                <td className="py-3 px-4 text-left">
                  <div className="flex items-center space-x-2">
                    {logoMap[asset.symbol] && (
                      <img
                        src={logoMap[asset.symbol]}
                        alt={`${asset.symbol} logo`}
                        className="w-6 h-6 rounded-full"
                      />
                    )}
                    <div className="flex flex-col">
                      <span className="font-medium text-sm">{asset.name}</span>
                      <span className="text-gray-400 text-xs">({asset.symbol})</span>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4 text-center font-semibold text-gray-800">
                  ${parseFloat(asset.price).toFixed(2)}
                </td>
                <td
                  className={`py-3 px-4 text-center font-medium ${
                    asset.change1h >= 0 ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {asset.change1h.toFixed(2)}%
                </td>
                <td
                  className={`py-3 px-4 text-center font-medium ${
                    asset.change24h >= 0 ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {asset.change24h.toFixed(2)}%
                </td>
                <td
                  className={`py-3 px-4 text-center font-medium ${
                    asset.change7d >= 0 ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {asset.change7d.toFixed(2)}%
                </td>
                <td className="py-3 px-4 text-center text-gray-600">
                  ${parseFloat(asset.marketCap).toLocaleString()}
                </td>
                <td className="py-3 px-4 text-center text-gray-600">
                  ${parseFloat(asset.volume24h).toLocaleString()}
                </td>
                <td className="py-3 px-4 text-center text-gray-600">
                  {parseFloat(asset.circulatingSupply).toLocaleString()} {asset.symbol}
                </td>
                <td className="py-3 px-4 text-center">
                  <Sparklines data={asset.priceHistory7d} width={100} height={30} margin={0}>
                    <SparklinesLine
                      color={chartColor}
                      style={{ strokeWidth: 2, fill: fillColor, fillOpacity: 0.3 }}
                    />
                    <SparklinesSpots
                      size={2}
                      style={{ fill: chartColor, stroke: chartColor, strokeWidth: 1 }}
                    />
                  </Sparklines>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
