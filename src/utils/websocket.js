import { useEffect } from 'react'; // Import useEffect from React
import { useDispatch } from 'react-redux';
import { updatePrice } from '../features/cryptoSlice';

const ws = new WebSocket('wss://stream.binance.com:9443/ws/!ticker@arr');

export const useWebSocket = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      data.forEach((item) => {
        // Map Binance symbol (e.g., "BTCUSDT") to our symbol (e.g., "BTC")
        const symbol = item.s.replace('USDT', ''); // Remove 'USDT' to match our symbols
        const price = parseFloat(item.c);
        dispatch(updatePrice({ symbol, price }));
      });
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    ws.onclose = () => {
      console.log('WebSocket connection closed');
    };

    return () => {
      ws.close();
    };
  }, [dispatch]);
};