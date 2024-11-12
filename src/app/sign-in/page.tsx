import HelloCard from "@/components/HelloCard";


export default function SignIn() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>

        <input
          type="text"
          className="border border-red-500 focus:border-red-700 focus:ring-2 focus:ring-red-300 rounded py-2 px-3 text-[0.8rem] text-black mb-4 transition-transform transform hover:scale-100 active:scale-95"
          placeholder="Email"
        />

        <input
          type="password"
          className="border border-red-500 focus:border-red-700 focus:ring-2 focus:ring-red-300 rounded py-2 px-3 text-[0.8rem] text-black mb-4 transition-transform transform hover:scale-100 active:scale-95"
          placeholder="Password"
        />

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-transform transform active:scale-95 mb-4">
          Sign In
        </button>

        <button className="bg-red-500 text-white font-bold text-[2rem] w-8 h-8 flex items-center justify-center rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300 transition-transform transform active:scale-90">
          &times;
        </button>
      </div>
    </div>
  );
}