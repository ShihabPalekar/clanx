import { useEffect } from "react";
import Details from "./components/Details";
import Sidebar from "./components/Sidebar";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { getWeatherDetails } from "./redux/slices/weatherdetails";
import { getCityImage } from "./redux/slices/cityImage";

const App = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)

  return (
    <div className="flex bg-white px-4 py-2 rounded-xl shadow-md">
      <Sidebar />
      <Details />
    </div>
  );
}

export default App;