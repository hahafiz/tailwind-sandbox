import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 class="bg-miwulmajoo text-white border-4 border-amber-400 text-sm lg:text-lg">
        Hello world!!!!
      </h1>
      <h1 class="text-miwulmajoo">Hello world!!!!</h1>
      <br />
      <h1>Typography sandbox</h1>
      <h1 class="text-9xl">Title 1</h1>
      <h1 class="text-5xl">Title 2</h1>
      <h1 class="text-xl">Title 3</h1>
      <p class="text-base">A regular paragraph</p>
      <p class="text-sm">A description paragraph</p>
      <p class="text-xs note">A little footnote</p>
    </>
  );
}

export default App;
