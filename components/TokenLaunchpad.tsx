export function TokenLaunchpad() {
  return (
    <div className="flex flex-col items-center justify-center p-10 max-w-screen gap-5">
      <h1 className="text-4xl font-bold mb-4">Solana Token Launchpad</h1>
      <input
        type="text"
        placeholder="Name"
        className="w-96 py-5 pl-2.5 border border-gray-600 rounded-xl"
      />
      <input
        type="text"
        placeholder="Symbol"
        className="w-96 py-5 pl-2.5 border border-gray-600 rounded-xl"
      />
      <input
        type="text"
        placeholder="Image URL"
        className="w-96 py-5 pl-2.5 border border-gray-600 rounded-xl"
      />
      <input
        type="text"
        placeholder="Initial Supply"
        className="w-96 py-5 pl-2.5 border border-gray-600 rounded-xl"
      />
      <button className="p-5 bg-gray-700 rounded-xl text-white text-xl hover:bg-gray-600 transition-colors duration-300 cursor-pointer">
        Create a token
      </button>
    </div>
  );
}
