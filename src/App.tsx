import { useEffect } from "react";
import Sidebar from "./components/Sidebar";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { getWeatherDetails } from "./redux/slices/weatherdetails";
import { getCityImage } from "./redux/slices/cityImage";
import Details from "./components/Details";

const App = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)

  return (
    <div className="flex bg-white rounded-xl shadow-md">
      <Sidebar />
      <Details />
    </div>
  );
}

export default App;