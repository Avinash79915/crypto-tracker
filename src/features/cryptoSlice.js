import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  assets: [
    {
      id: 1,
      name: 'Bitcoin',
      symbol: 'BTC',
      price: 93759.48,
      change1h: -0.43,
      change24h: -0.93,
      change7d: 11.11,
      marketCap: 1861819020186,
      volume24h: 434679504947,
      circulatingSupply: 19859047,
      maxSupply: null,
      priceHistory7d: [84000, 86000, 88000, 90000, 92000, 94000, 93759.48], // Simulated 7-day prices
    },
    {
      id: 2,
      name: 'Ethereum',
      symbol: 'ETH',
      price: 1802.46,
      change1h: -0.60,
      change24h: 3.21,
      change7d: 13.68,
      marketCap: 217581279327,
      volume24h: 23547669307,
      circulatingSupply: 120710000,
      maxSupply: null,
      priceHistory7d: [1600, 1650, 1700, 1750, 1780, 1800, 1802.46],
    },
    {
      id: 3,
      name: 'Tether',
      symbol: 'USDT',
      price: 100.00,
      change1h: 0.00,
      change24h: 0.00,
      change7d: -0.04,
      marketCap: 14532022085,
      volume24h: 9288800207,
      circulatingSupply: 14527000000,
      maxSupply: null,
      priceHistory7d: [100.04, 100.02, 100.01, 100.00, 100.00, 100.00, 100.00],
    },
    {
      id: 4,
      name: 'XRP',
      symbol: 'XRP',
      price: 2.22,
      change1h: -0.46,
      change24h: 0.54,
      change7d: -6.18,
      marketCap: 130073814966,
      volume24h: 5131481491,
      circulatingSupply: 58398000000,
      maxSupply: 100000000000,
      priceHistory7d: [2.37, 2.35, 2.30, 2.28, 2.25, 2.23, 2.22],
    },
    {
      id: 5,
      name: 'Solana',
      symbol: 'SOL',
      price: 151.51,
      change1h: -0.53,
      change24h: 1.26,
      change7d: 14.74,
      marketCap: 78381558631,
      volume24h: 4881644846,
      circulatingSupply: 573100000,
      maxSupply: null,
      priceHistory7d: [132.00, 135.00, 138.00, 142.00, 145.00, 148.00, 151.51],
    },
  ],
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updatePrice: (state, action) => {
      const { symbol, price } = action.payload;
      const asset = state.assets.find(asset => asset.symbol === symbol);
      if (asset) {
        // Update the price
        asset.price = price;
        // Update the 7-day history: remove the oldest price and add the new one
        asset.priceHistory7d.shift();
        asset.priceHistory7d.push(price);
      }
    },
  },
});

export const { updatePrice } = cryptoSlice.actions;
export default cryptoSlice.reducer;