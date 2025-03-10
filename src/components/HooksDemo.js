import { useMemo, useState } from "react";
 import { findPrime } from "../utils/helper";
const HooksDemo = () => {
    const [text, setText] = useState(0);
   const [isDarkTheme, setIsDarkTheme] = useState(false);
   console.log("Rendering...");
 //For every change in state or prop the whole component re renders
 //if there are heavy operations for state change and the action for change was taken twice and between those operations the whole page freze
 //which provides a very bad UX
 //caching the results based on dependencies will help solve this issue

   // const prime = findPrime(text);
   const prime = useMemo(() => findPrime(text), [text]);
    return (
        <div
        className={
          "m-4 p-2 w-96 h-96 border border-black " +
          (isDarkTheme && "bg-gray-900 text-white")
        }
      >
        <div>
          <button
            className="m-10 p-2 bg-green-200"
            onClick={() => setIsDarkTheme(!isDarkTheme)}
          >
            Toggle
          </button>
        </div>
        <div>
          <input
            className="border border-black w-72 px-2"
            type="number"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div>
          <h1 className="mt-4 font-bold text-xl">nth Prime : {prime}</h1>
        </div>
      </div>
    );
  };
  export default HooksDemo;
