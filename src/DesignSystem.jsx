import { ArrowDown } from "./assets/ArrowDown";
import { useState } from "react";

function DesignSystem() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <h1 className="">This is a title</h1>
      <h2 className="">This is a subtitle</h2>
      <p className="text-base">This is a paragraph</p>
      <a>This is an anchor</a>
      <div className="my-4">
        <button className="btn btn-primary">This is a primary button</button>
      </div>
      <div className="my-4">
        <button className="btn btn-secondary">
          This is a secondary button
        </button>
      </div>
      <div className="my-4">
        <button disabled className="btn btn-pri">
          This is a disabled button
        </button>
      </div>
      <div>
        <input type="text" placeholder="This is an input" />
      </div>
      <div>
        <input disabled type="text" placeholder="This is an input" />
      </div>
      <div>
        <input type="date" placeholder="" />
      </div>
      <div className="flex items-start my-4">
        <input type="checkbox" id="checkbox" />
        <label htmlFor="checkbox">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et suscipit
          quisquam quo voluptatem aliquam, illo eos nesciunt necessitatibus
          sapiente. Adipisci eum quae vero quos praesentium consectetur eius
          provident quo ipsam.
        </label>
      </div>
      <div>
        <select name="" id="">
          <option value="">Option 1</option>
          <option value="">Option 2</option>
          <option value="">Option 3</option>
        </select>
      </div>
      {/* custom select (can be created as component) */}
      <div className="Select">
        <div className="flex items-center justify-between">
          <span>option</span>
          <div className={isOpen ? "rotate-180 transition" : "rotate-0"}>
            <ArrowDown />
          </div>
        </div>
        <div>
          <ul className="flex flex-col divide-y border-t">
            <li className="child">option 1</li>
            <li className="child">option 2</li>
            <li className="child">option 3</li>
          </ul>
        </div>
      </div>
      <h1 className="">This is a title</h1>
      <h2 className="">This is a subtitle</h2>
    </div>
  );
}

export default DesignSystem;
