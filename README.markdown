# Real-Time Crypto Price Tracker

🎯 **Objective**:  
Build a responsive React + Redux Toolkit app that tracks real-time cryptocurrency prices, similar to CoinMarketCap, using WebSocket updates and managing all state via Redux.

🚀 **Live Demo**:  
[View the deployed app on Vercel](https://your-vercel-app-url.vercel.app)  


## 📘 Assignment Overview
This project fulfills the requirements of the **Real-Time Crypto Price Tracker**. It displays real-time prices for 5 cryptocurrencies, styled to match the provided design, with enhanced charts, downloaded logo images, a minimalist UI, and WebSocket integration for live updates.

---

## 📊 Features
- **UI Table**: Displays 5 assets (BTC, ETH, USDT, XRP, SOL) with columns for #, Logo, Name, Symbol, Price, 1h %, 24h %, 7d %, Market Cap, 24h Volume, Circulating Supply, and a 7D Chart.
- **Responsive Design**: Table adjusts for mobile and desktop views using Tailwind CSS.
- **Color-Coded % Changes**: Green for positive, red for negative changes.
- **7D Chart**: Dynamic chart using `react-chartjs-2`, with smooth lines, gradient fill, and an end dot, updating in real-time.
- **Real-Time Updates**: Integrated Binance WebSocket API for live price updates, with reconnection logic.
- **Redux State Management**: All state managed via Redux Toolkit, with selectors for optimized rendering.
- **Logos**: Downloaded cryptocurrency logos displayed next to each asset name.
- **Minimalist UI**: Clean layout with a modern design, using Tailwind CSS and a minimalist font stack.

### 🌟 Bonus Features
- **Real WebSocket**: Integrated Binance WebSocket API for real-time price updates.
- **Potential Additions** (if implemented):
  - Sorting: Clickable headers to sort by price, 24h change, etc.
  - Filters: Filter for top gainers/losers.
  - localStorage: Persist state on page refresh.
  - Unit Tests: Tests for Redux reducers/selectors.
  - TypeScript: Type-safe code.

---

## 📁 Setup Instructions
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/crypto-price-tracker.git
   cd crypto-price-tracker
   ```
   *Replace `your-username` with your GitHub username.*

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the App**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser to see the app in action with Hot Module Replacement (HMR) enabled.

4. **Build for Production** (optional):
   ```bash
   npm run build
   ```

---

## 🛠️ Tech Stack
- **React**: Frontend library for building the UI.
- **Vite**: Fast build tool with HMR, powering the development environment.
- **Redux Toolkit**: State management for crypto data, using `createSlice` and `configureStore`.
- **Tailwind CSS**: Responsive and minimalist styling, customized to match the provided table design.
- **react-chartjs-2 & chart.js**: Enhanced 7-day price trend charts with smooth lines, gradient fill, and end dot.
- **Binance WebSocket API**: Real-time price updates for BTC, ETH, USDT, XRP, and SOL.
- **ESLint**: Ensures code quality with pre-configured rules for React.

---

## 🧠 Architecture
- **State Management** (`cryptoSlice.js`):
  - Manages crypto asset data (price, % changes, 7-day history) in a single Redux slice.
  - Uses `createSlice` for reducer logic and actions (e.g., `updatePrice`).
  - Selectors optimize re-renders by accessing state efficiently.
- **WebSocket** (`websocket.js`):
  - Connects to Binance WebSocket API to fetch live price updates.
  - Subscribes to ticker streams for BTCUSDT, ETHUSDT, USDTUSDT, XRPUSDT, and SOLUSDT.
  - Dispatches price updates to Redux with reconnection logic on failure.
- **Components** (`CryptoTable.jsx`):
  - Renders the table with crypto data, logos, and 7-day charts.
  - Uses `react-chartjs-2` for dynamic, smooth line charts.
  - Styled with Tailwind CSS to match the provided design.
- **Styling** (`App.jsx`):
  - Minimalist UI with a light gray background, card-like table container, and clean typography.
  - Tailwind CSS ensures responsive design and a modern look.

---

## ⚙️ React + Vite Configuration
This project uses a minimal React + Vite setup with Hot Module Replacement (HMR) and ESLint rules for code quality.

### Available Plugins
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh.

### Expanding the ESLint Configuration
For production applications, consider enabling type-aware lint rules with TypeScript:
- Check out the [React + Vite TypeScript template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for integrating TypeScript.
- Add [`typescript-eslint`](https://typescript-eslint.io) for enhanced linting with type safety.

---
## 📝 Demo video

https://www.loom.com/share/e8e986d78ab44c31a1774a04a5d21844?sid=6fd3cf21-274d-49f1-a3a8-08a081bd8e2f

## 📝 Thought Process
1. **Project Setup**:
   - Initialized a React app with Vite for faster development and HMR support.
   - Set up Redux Toolkit for state management and Tailwind CSS for styling.
   - Configured ESLint with React rules for code quality.
2. **State Management**:
   - Created a `cryptoSlice` to store asset data and handle price updates.
   - Used selectors to optimize rendering performance.
3. **UI Development**:
   - Built a responsive table with Tailwind CSS, matching the provided design.
   - Added downloaded logos for each cryptocurrency.
   - Implemented a minimalist UI in `App.jsx` with clean typography and spacing.
4. **Real-Time Updates**:
   - Integrated the Binance WebSocket API to fetch live prices.
   - Added reconnection logic to handle connection failures.
5. **7D Chart**:
   - Initially used `react-sparklines` for simplicity.
   - Switched to `react-chartjs-2` for smoother lines, gradient fills, and better customization.
6. **Deployment**:
   - Deployed the app on Vercel for easy access and sharing.
   - Ensured the WebSocket connection works in a production environment.

---
