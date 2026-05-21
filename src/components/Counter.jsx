import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [multi, setMulti] = useState(2);

  useEffect(()=>{
      console.log("components loaded",count);
      return()=>{
      console.log("components uploaded")
      };
 },[count]);

  function Increment() {
    if (count < 20) {
      setCount(count +multi*multi);
    }
  }

  function Decrement() {
    if (count > 0) {
      setCount(count -multi*multi);
    }
  }

  function Reset() {
    setCount(0);
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1920&auto=format&fit=crop')",
      }}
    >
      {/* Pink & White Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200/70 via-white/60 to-pink-400/70 backdrop-blur-sm"></div>

      {/* Counter Card */}
      <div className="relative z-10 w-80 p-8 rounded-3xl bg-white/30 backdrop-blur-lg shadow-2xl border border-white/40">
        
        <h1 className="text-7xl font-extrabold text-pink-600 text-center mb-8 drop-shadow-md">
          {count}
        </h1>

        <div className="flex flex-col gap-4">
          
          <button
            onClick={Increment}
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-xl shadow-lg transition duration-300"
          >
            Increment+
          </button>

          <button
            onClick={Decrement}
            className="bg-white hover:bg-pink-100 text-pink-600 font-semibold py-3 rounded-xl shadow-lg transition duration-300 border border-pink-300"
          >
            Decrement-
          </button>

          <button
            onClick={Reset}
            className="bg-gradient-to-r from-pink-400 to-pink-600 hover:from-pink-500 hover:to-pink-700 text-white font-semibold py-3 rounded-xl shadow-lg transition duration-300"
          >
            Reset
          </button>

        </div>
      </div>
    </div>
  );
}

export default Counter;