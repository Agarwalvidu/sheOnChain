import React, { useState, useEffect } from "react"; // Import React & Hooks

// 🧩 Counter Component (Using Props)
function Counter({ count, increment, decrement }) {
  return (
    <div className="p-4 border rounded text-center">
      <h2 className="text-2xl font-bold">Counter: {count}</h2>
      <div className="mt-4">
        <button className="px-4 py-2 bg-green-500 text-white rounded" onClick={increment}>
          ➕ Increase
        </button>
        <button className="ml-2 px-4 py-2 bg-red-500 text-white rounded" onClick={decrement}>
          ➖ Decrease
        </button>
      </div>
    </div>
  );
}

// 🏠 Main App Component
function App() {
  // 🔥 useState Hook for managing counter value
  const [count, setCount] = useState(0);

  // ✅ Function to Increase Counter
  const increment = () => {
    setCount(count + 1);
  };

  // ❌ Function to Decrease Counter
  const decrement = () => {
    setCount(count - 1);
  };

  // ⏳ useEffect Hook - Runs when `count` changes
  useEffect(() => {
    console.log("Counter Updated: ", count);
  }, [count]);

  return (
    <div className="p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Simple Counter App</h1>
      <Counter count={count} increment={increment} decrement={decrement} />
    </div>
  );
}

export default App;

