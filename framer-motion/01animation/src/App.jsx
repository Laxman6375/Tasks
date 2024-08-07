import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProgressBar from "./framer-components/ProgressBar";
import ExitEnterAnimation from "./framer-components/ExitEnterAnimation";
import Keyframes from "./framer-components/Keyframes";
import GeasureButton from "./framer-components/GeasureButton";
import DraggableDiv from "./framer-components/DraggableDiv";
import Variants from "./framer-components/Variants";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" w[100vw] h-[100vh] bg-zinc-900 text-white p-10 flex flex-col">
        <div className=" text-center text-4xl font-semibold">
          <h1 className="">Framer motion</h1>
          {/* <ProgressBar /> */}
          {/* <ExitEnterAnimation /> */}
          {/* <Keyframes /> */}
          {/* <GeasureButton /> */}
          {/* <DraggableDiv /> */}
          <Variants />
        </div>
      </div>
    </>
  );
}

export default App;
