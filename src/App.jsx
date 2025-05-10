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
    </>
  );
}

export default App;
