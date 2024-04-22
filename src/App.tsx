import { useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Details from "./components/Details";

const App = () => {
  return (
    <div className="flex bg-white min-h-[calc(100vh-32px)] rounded-xl shadow-md">
      <Sidebar />
      <Details />
    </div>
  );
}

export default App;