import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-miwulmajoo text-white border-4 border-amber-400 text-sm lg:text-lg">
        Hello world!!!!
      </h1>
      <h1 className="text-miwulmajoo">Hello world!!!!</h1>
      <br />
      <h1>Typography sandbox</h1>
      <h1 className="text-9xl italic">Title 1</h1>
      <h1 className="text-5xl underline decoration-amber-700 decoration-wavy">
        Title 2
      </h1>
      <h1 className="text-xl line-through">Title 3</h1>
      <p className="text-base overline">A regular paragraph</p>
      <p className="text-sm">A description paragraph</p>
      <p className="text-xs note">A little footnote</p>
      <br />
      <h1 className="text-4xl text-bold">Spaces & Sizes</h1>
      <div className="bg-red-500 font-bold text-white p-4">Mushi mushii</div>
      {/* add padding only on the left */}
      <div className="bg-red-500 font-bold text-white pl-4">Mushi mushii</div>
      {/* pr-x = padding right
      pl-x = padding left
      pt-x = padding top
      pb-x = padding bottom */}
      {/* works the same for margin */}
      {/* padding for top & bottom */}
      <div className="bg-red-500 font-bold text-white py-4">Mushi mushii</div>
      <div>
        <div className="bg-blue-500 font-bold text-white m-4">
          div with margin
        </div>
        <div className="bg-red-500 font-bold text-white p-4">
          div with padding
        </div>
      </div>
      <br />
      {/* using negative value */}
      <div>
        <div className="h-16 bg-blue-500 w-36 opacity-20"></div>
        <div className="bg-red-300 -mt-8">
          this div has -8 margin top (-mt-8)
        </div>
      </div>
      <br />
      <h1 className="text-4xl font-bold">Width (fixed vs percentage)</h1>
      <div className="w-16 h-16 bg-black"></div>
      <div className="flex">
        <div className="w-2/5 h-16 bg-blue-500 min-w-min"></div>
        <div className="w-3/5 h-16 bg-green-500"></div>
      </div>
    </>
  );
}

export default App;
