"use client"
import { useState } from 'react';

interface StockInfo {
  price: number;
}

interface StockData {
  [key: string]: StockInfo;
}

interface TradeRequest {
  action: 'buy' | 'sell';
  type: 'limit' | 'market';
  stock: string | number;
  price: number;
  amount: number;
  currency: string;
}

const STOCK_DATA: StockData = {
  RELIANCE: { price: 2547.35 },
  TCS: { price: 3456.20 },
  HDFCBANK: { price: 1678.90 },
  INFY: { price: 1432.55 },
  ICICIBANK: { price: 987.65 },
  HINDUNILVR: { price: 2765.40 },
  SBIN: { price: 567.80 },
  BAJFINANCE: { price: 6789.25 },
  BHARTIARTL: { price: 876.45 },
  WIPRO: { price: 432.15 }
};

const StockTradingForm = () => {
  const [selectedStock, setSelectedStock] = useState<keyof typeof STOCK_DATA>('RELIANCE');
  const [amount, setAmount] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [tradeType, setTradeType] = useState<'buy' | 'sell'>('buy');

  const availableBalance = 100000;
  const currentPrice = STOCK_DATA[selectedStock].price;
  const estimatedShares = amount ? Math.floor(Number(amount) / currentPrice) : 0;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const requestData: TradeRequest = {
        action: tradeType,
        type: 'limit',
        stock: selectedStock,
        price: currentPrice,
        amount: Number(amount),
        currency: 'INR'
      };
      // 'http://159.89.173.118/api'
      
      const response = await fetch('https://159.89.173.118/api/trade/', { // Update the endpoint URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit order');
      }

      setAmount('');
      alert('Order submitted successfully!');
    } catch (error) {
      if (error instanceof Error) {
        alert('Failed to submit order: ' + error.message);
      } else {
        alert('Failed to submit order: An unknown error occurred');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-xl p-6">
        {/* Trading Type Tabs */}
        <div className="flex gap-4 mb-6 border-b border-gray-700 pb-2">
          <button 
            type="button"
            className="text-white font-semibold border-b-2 border-yellow-500 pb-2"
          >
            Spot
          </button>
        </div>

        {/* Buy/Sell Toggle */}
        <div className="flex mb-6 rounded overflow-hidden">
          <button 
            type="button"
            className={`flex-1 py-2 transition-colors duration-200 focus:outline-none
              ${tradeType === 'buy' 
                ? 'bg-gray-700 text-white font-semibold' 
                : 'bg-gray-900 text-gray-400'}`}
            onClick={() => setTradeType('buy')}
          >
            Buy
          </button>
          <button 
            type="button"
            className={`flex-1 py-2 transition-colors duration-200 focus:outline-none
              ${tradeType === 'sell' 
                ? 'bg-gray-700 text-white font-semibold' 
                : 'bg-gray-900 text-gray-400'}`}
            onClick={() => setTradeType('sell')}
          >
            Sell
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Order Type */}
          <div className="mb-4">
            <div className="flex gap-4">
              <button 
                type="button"
                className="text-white font-semibold border-b border-yellow-500 focus:outline-none"
              >
                Limit
              </button>
            </div>
          </div>

          {/* Stock Selection */}
          <div className="mb-4">
            <label className="block text-sm text-gray-400 mb-1">Stock</label>
            <select
              value={selectedStock}
              onChange={(e) => setSelectedStock(e.target.value as keyof typeof STOCK_DATA)}
              className="w-full bg-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {Object.entries(STOCK_DATA).map(([ticker, data]) => (
                <option key={ticker} value={ticker}>
                  {ticker} - ₹{data.price}
                </option>
              ))}
            </select>
          </div>

          {/* Amount Input */}
          <div className="mb-4">
            <label className="block text-sm text-gray-400 mb-1">Amount (INR)</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              min="0"
              step="0.01"
              className="w-full bg-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter amount"
            />
          </div>

          {/* Trading Information */}
          <div className="space-y-2 mb-6">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Available Balance</span>
              <span className="text-white">₹{availableBalance.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Current Price</span>
              <span className="text-white">₹{currentPrice.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Estimated Shares</span>
              <span className="text-white">{estimatedShares}</span>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting || !amount || Number(amount) <= 0}
            className={`w-full py-3 rounded font-semibold transition-colors duration-200 focus:outline-none
              ${isSubmitting || !amount || Number(amount) <= 0
                ? tradeType === 'buy' ? 'bg-green-800' : 'bg-red-800'
                : tradeType === 'buy'
                  ? 'bg-green-500 hover:bg-green-600'
                  : 'bg-red-500 hover:bg-red-600'
              } ${isSubmitting || !amount || Number(amount) <= 0 ? 'cursor-not-allowed text-gray-300' : 'text-white'}`}
          >
            {isSubmitting 
              ? 'Processing...' 
              : tradeType === 'buy' 
                ? 'Buy Stock' 
                : 'Short Stock'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default StockTradingForm;