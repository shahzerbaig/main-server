'use client';
import React, { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

type UserType = {
    id: string,
    name: string,
    email: string,
    status: boolean
}
type TradeType = {
    action:string,
    type:string,
    stock:string,
    price:string,
    amount:string,
    currency:string
}

const Admin = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<'trades' | 'users'>('trades');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [tradesData, setTradesData] = useState<TradeType []>([]);
  const [usersData, setUsersData] = useState<UserType []>([{id:'2777',name:'Big Bull',email:'anonym@ous.co',status:false }]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [errorDialogOpen, setErrorDialogOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        
        const response = await fetch('http://159.89.173.118/api/admin/');
        if (!response.ok) {
          throw new Error('Failed to fetch data from the API');
        }
        const data = await response.json();
        
        setTradesData(data || []);
        
        
      } catch (error) {
        if(error instanceof Error){
            setError(error.message);
        }
        
        setErrorDialogOpen(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [pathname, searchParams]);

  const handleErrorDialogClose = () => {
    setErrorDialogOpen(false);
    if (error === 'Failed to fetch data from the API') {
      window.location.href = '/';
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Side Drawer */}
      <div
        className={`fixed top-0 left-0 z-40 h-full bg-white shadow-lg transition-transform ${
          drawerOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:relative md:w-64`}
      >
        <div className="p-4 border-b">
          <h2 className="text-lg font-bold text-black">Admin Panel</h2>
        </div>
        <nav className="p-4">
          <button
            className={`w-full text-left p-2 mb-2 rounded text-black ${
              activeTab === 'trades' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab('trades')}
          >
            Trades
          </button>
          <button
            className={`w-full text-left p-2 rounded text-black ${
              activeTab === 'users' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab('users')}
          >
            Users
          </button>
        </nav>
      </div>

      {/* Overlay for mobile */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 p-6 md:ml-64">
        <button
          className="p-2 bg-blue-600 text-white rounded md:hidden"
          onClick={() => setDrawerOpen(!drawerOpen)}
        >
          Menu
        </button>

        {/* Loading and Error States */}
        {loading && <p>Loading...</p>}
        {error && (
          <div
            className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50"
            onClick={() => setErrorDialogOpen(false)}
          >
            <div className="bg-white p-6 rounded-lg shadow w-full max-w-md">
              <h3 className="text-lg font-bold mb-4">Error</h3>
              <p className="mb-4">{error}</p>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded"
                onClick={handleErrorDialogClose}
              >
                {error === 'Failed to fetch data from the API' ? 'Go to Home' : 'Close'}
              </button>
            </div>
          </div>
        )}

        {/* Tabs Content */}
        {!loading && !error && activeTab === 'trades' && (
          <div className="bg-white w-80 p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4 text-black">Trades</h2>
            <div className="overflow-auto">
            
              <table className="min-w-full border border-gray-200">
                <thead className="bg-gray-200 text-gray-600">
                  <tr>
                    <th className="p-3 text-left">Action</th>
                    <th className="p-3 text-left">Type</th>
                    <th className="p-3 text-left">Stock</th>
                    <th className="p-3 text-left">Price</th>
                    <th className="p-3 text-left">Amount</th>
                    <th className="p-3 text-left">Currency</th>
                  </tr>
                </thead>
                <tbody>
                  {tradesData.map((trade, index) => (
                    <tr key={index} className={`border-t text-black border-gray-200 ${
                      trade.action === "sell" ? "bg-red-100" : trade.action === "buy" ? "bg-green-300" : ""
                    }`}>
                      <td className="p-3">{trade.action}</td>
                      <td className="p-3">{trade.type}</td>
                      <td className="p-3">{trade.stock}</td>
                      <td className="p-3">{trade.price}</td>
                      <td className="p-3">{trade.amount}</td>
                      <td className="p-3">{trade.currency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {!loading && !error && activeTab === 'users' && (
          <div className="bg-white w-11/12 p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4 text-black">Users</h2>
            <div className="overflow-auto">
              <table className="min-w-full border border-gray-200">
                <thead className="bg-gray-200 text-gray-600">
                  <tr>
                    <th className="p-3 text-left">ID</th>
                    <th className="p-3 text-left">Name</th>
                    <th className="p-3 text-left">Email</th>
                    <th className="p-3 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {usersData?usersData.map((user) => (
                    <tr key={user.id} className="border-t text-black border-gray-200">
                      <td className="p-3">{user.id}</td>
                      <td className="p-3">{user.name}</td>
                      <td className="p-3">{user.email}</td>
                      <td className="p-3"><span
            style={{
              height: '10px',
              width: '10px',
              borderRadius: '50%',
              backgroundColor: user.status ? 'green' : 'red',
              display: 'inline-block',
              marginRight: '8px',
            }}
          ></span></td>
                    </tr>
                  )):<></>}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
