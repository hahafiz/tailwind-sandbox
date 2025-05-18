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
      <br />
      <h1 className="text-4xl font-bold">Flex</h1>
      <div className="parent">
        <div>Header</div>
        <div className="flex">
          <div className="grow">Main Content</div>
          <div className="flex">
            <div className="basis-3/4">Sidebar</div>
            <div className="basis-1/4">Menu</div>
          </div>
        </div>
      </div>
      <br />
      <div className="flex flex-col">
        <div>Header</div>
        <div className="flex flex-col md:flex-row">
          <div className="w-32 bg-sky-500">Sidebar</div>
          <div className="w-full bg-red-600">Main Content</div>
        </div>
      </div>
      <br />
      <div className="flex flex-col md:flex-row">
        <div className="flex w-full flex-wrap">
          <div className="w-32 grow">01</div>
          <div className="w-32 grow">02</div>
          <div className="w-32 grow">03</div>
          <div className="w-32 grow">04</div>
          <div className="w-32 grow">05</div>
        </div>
      </div>
      <br />
      <div className="flex justify-evenly">
        <div>Justify</div>
        <div>Main Content</div>
        <div>Main Content</div>
      </div>
      <br />
      <div className="flex justify-center items-center">
        <div>Align</div>
        <div>
          <h1>Random title</h1>
          <p>
            lorem ipsum dolor sit amet consectetur adipiscing elit. Fuga, quis ?
            Exercitationem amet maxime
          </p>
        </div>
        <div>Main Content</div>
      </div>
      <br />
      <div className="flex items-baseline">
        <div className="pt-2 pb-6 bg-sky-500">01</div>
        <div className="pt-8 pb-12 bg-red-500">02</div>
        <div className="pt-12 pb-4 bg-green-500">03</div>
      </div>
      <br />
      <h1 className="text-4xl font-bold">Grid</h1>
      <div className="h-screen text-white parent bg-slate-900">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-sky-500 p-6 rounded-lg">1st columns</div>
            <div className="bg-sky-500 p-6 rounded-lg">2nd columns</div>
            <div className="bg-sky-500 p-6 rounded-lg">3rd columns</div>
            <div className="bg-red-500 p-6 rounded-lg col-span-2">
              4th columns
            </div>
            <div className="bg-sky-500 p-6 rounded-lg">5th columns</div>
            <div className="bg-sky-500 p-6 rounded-lg">6th columns</div>
          </div>
        </div>
      </div>
      <br />
      <h3 className="text-4xl font-bold">Grid - col start / end</h3>
      <div className="h-screen text-white parent bg-slate-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-6 gap-4">
            <div className="p-6 col-start-2 col-span-4 bg-sky-500 rounded-lg">
              01
            </div>
            <div className="p-6 col-start-1 col-end-3 bg-sky-500 rounded-lg">
              02
            </div>
            <div className="p-6 col-end-7 col-span-2 bg-sky-500 rounded-lg">
              03
            </div>
            <div className="p-6 col-start-1 col-end-7 bg-sky-500 rounded-lg">
              04
            </div>
          </div>
        </div>
      </div>
      <br />
      <h3 className="text-4xl font-bold">Grid - auto col</h3>
      <div className="h-screen text-white parent bg-slate-900">
        <div className="container mx-auto">
          <div className="grid grid-flow-col auto-cols-max">
            <div className="p-6 rounded-lg bg-sky-500">01</div>
            <div className="p-6 rounded-lg bg-sky-500">02</div>
            <div className="p-6 rounded-lg bg-sky-500">03</div>
          </div>
        </div>
      </div>
      <br />
      <h3 className="text-4xl font-bold">Grid - template rows</h3>
      <div className="h-screen text-white parent bg-slate-900">
        <div className="container mx-auto">
          <div className="grid grid-flow-col grid-rows-4 gap-4">
            <div className="p-6 rounded-lg bg-sky-500 row-span-2">01</div>
            <div className="p-6 rounded-lg bg-sky-500">02</div>
            <div className="p-6 rounded-lg bg-sky-500">03</div>
            <div className="p-6 rounded-lg bg-sky-500">04</div>
            <div className="p-6 rounded-lg bg-sky-500 row-span-3">05</div>
            <div className="p-6 rounded-lg bg-sky-500">06</div>
          </div>
        </div>
      </div>
      <br />
      <h3 className="text-4xl font-bold">Grid - auto flow</h3>
      <div className="h-screen text-white parent bg-slate-900">
        <div className="container mx-auto">
          <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-4">
            <div className="p-6 rounded-lg bg-sky-500 col-span-2">01</div>
            <div className=" col-span-2 p-6 rounded-lg bg-sky-500">02</div>
            <div className="p-6 rounded-lg bg-sky-500">03</div>
            <div className="p-6 rounded-lg bg-sky-500">04</div>
            <div className="p-6 rounded-lg bg-sky-500">05</div>
            <div className="col-span-2 p-6 rounded-lg bg-sky-500">06</div>
            <div className="p-6 rounded-lg bg-sky-500">07</div>
            <div className="p-6 rounded-lg bg-sky-500">08</div>
            <div className="p-6 rounded-lg bg-sky-500">09</div>
            <div className="p-6 rounded-lg bg-sky-500 col-span-2 ">10</div>
            <div className="p-6 rounded-lg bg-sky-500">11</div>
            <div className="p-6 rounded-lg bg-sky-500">12</div>
          </div>
        </div>
      </div>
      <br />
      <h1 className="text-4xl font-bold">Layouts</h1>
      <p>A component for fixing an element's width to the current breakpoint</p>
      <div className="h-screen text-white bg-slate-900">
        <div className="container mx-auto px-4 columns-md">
          <img
            src="https://images.unsplash.com/photo-1746704948958-76dd4751017f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <p>
            lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim
            ad minim veniam quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
          <p>
            lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim
            ad minim veniam quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
          <p>
            lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim
            ad minim veniam quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
        </div>
      </div>
      <br />
      <h3 className="text-4xl font-bold">Layout - float & clear</h3>
      <div className="h-screen text-white bg-slate-900">
        <div className="container mx-auto px-4">
          <img
            className="float-left w-64"
            src="https://images.unsplash.com/photo-1746704948958-76dd4751017f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <img
            className="float-right w-32"
            src="https://images.unsplash.com/photo-1746704948958-76dd4751017f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <p className="clear-left">
            lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim
            ad minim veniam quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
          <p>
            lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim
            ad minim veniam quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
          <p>
            lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim
            ad minim veniam quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
        </div>
      </div>
      <br />
      <h3 className="text-4xl font-bold">Layout - position</h3>
      <div className="h-screen text-white bg-slate-900">
        <div className="container px-2">
          <div className="relative bg-red-500 rounded-lg p-8 w-32 h-32">
            <div className="w-24 h-24 bg-green-500 rounded-lg absolute top-12 left-12"></div>
          </div>
        </div>
      </div>
      <br />
      <h3 className="text-4xl font-bold">Layout - overflow & visibility</h3>
      <div className="text-white bg-slate-900">
        <div className="container">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-teal-500">01</div>
            <div className="bg-teal-500 invisible">02</div>
            <div className="bg-teal-500">03</div>
          </div>
        </div>
      </div>
      <br />
      <h3 className="text-4xl font-bold">Layout - z-index</h3>
      <div className="text-white bg-slate-900">
        <div className="container flex">
          <div className="bg-red-500 p-3 border border-white rounded-full z-40">
            05
          </div>
          <div className="bg-red-500 p-3 border border-white rounded-full z-30">
            04
          </div>
          <div className="bg-red-500 p-3 border border-white rounded-full z-20">
            03
          </div>
          <div className="bg-red-500 p-3 border border-white rounded-full z-10">
            02
          </div>
          <div className="bg-red-500 p-3 border border-white rounded-full z-0">
            01
          </div>
        </div>
      </div>
      <h3 className="text-4xl font-bold">Layout - object position</h3>
      <div className="text-white bg-slate-900">
        <div className="container">
          <img
            className="object-none object-left-bottom w-64 h-64"
            src="https://images.unsplash.com/photo-1746704948958-76dd4751017f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
      <h1 className="text-4xl font-bold">Borders</h1>
      <div className=" text-white bg-slate-900">
        <header className="w-full border-b py-4 border-l-8 border-t-4">
          Header
        </header>
      </div>
      <div className=" text-white bg-slate-900">
        <div className="divide-y divide-red-500">
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
      </div>
      <div className="text-white bg-slate-900">
        <input
          type="text"
          className="border-2 border-dashed border-rose-600 outline-none"
        />
      </div>
      <div className="text-white bg-slate-900">
        <div className="grid grid-cols-3 divide-x divide-pink-500">
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
      </div>
      <div className="text-white bg-slate-900">
        <button className="outline-4 outline-offset-2">
          Button with outline
        </button>
      </div>
      <div className="text-white bg-slate-900">
        <button className="ring-4 ring-offset-2">Button with ring</button>
      </div>
    </>
  );
}

export default App;
