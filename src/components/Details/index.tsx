import { useState } from "react";
import Daily from "./Daily";
import Weekly from "./Weekly";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { updateUnit } from "../../redux/slices/weatherdetails";

const Details = () => {
  const [tab, setTab] = useState("today");
  const { unit, today, isLoading, isError } = useAppSelector(
    (state) => state.weather
  );
  const dispatch = useAppDispatch();

  const setUnit = (name: string) => {
    dispatch(updateUnit(name));
  };

  return (
    <>
      {isLoading && (
        <div className="w-[75%] px-8 py-2 bg-[#f6f6f8] rounded-r-xl text-center">
          <div className="mt-[250px] text-gray-600">Fetching data...</div>
        </div>
      )}
      {!isLoading && Object.keys(today).length === 0 && (
        <div className="w-[75%] px-8 py-2 bg-[#f6f6f8] rounded-r-xl text-center">
          <div className="mt-[250px] text-gray-600">
            Enter a city in the search bar to fetch weather data
          </div>
        </div>
      )}
      {!isLoading && Object.keys(today).length > 0 && (
        <div className="w-[75%] px-8 py-2 bg-[#f6f6f8] rounded-r-xl">
          <div className="flex justify-between">
            <nav className="flex space-x-6 font-semibold">
              <button
                onClick={() => setTab("today")}
                type="button"
                className={`py-2 px-1 inline-flex items-center gap-2 text-sm whitespace-nowrap hover:font-semibold hover:text-black ${
                  tab === "today" ? "text-black" : "text-[#C0C0C0]"
                } ${
                  tab === "today"
                    ? "border-black border-b-[3px] mb-[-1px]"
                    : "border-b-[2px] border-transparent"
                }`}
              >
                Today
              </button>
              <button
                onClick={() => setTab("week")}
                type="button"
                className={`py-2 px-1 inline-flex items-center gap-2 text-sm whitespace-nowrap hover:font-semibold hover:text-black ${
                  tab === "week" ? "text-black" : "text-[#C0C0C0]"
                } ${
                  tab === "week"
                    ? "border-black border-b-[3px] mb-[-1px]"
                    : "border-b-[2px] border-transparent"
                }`}
              >
                Week
              </button>
            </nav>
            <nav className="flex space-x-6 font-semibold">
              <button
                onClick={() => setUnit("celcius")}
                type="button"
                className={`w-[30px] h-[30px] text-xs rounded-full hover:font-semibold ${
                  unit === "celcius" ? "hover:text-white" : "hover:text-black"
                } ${unit === "celcius" ? "text-white" : "text-[#C0C0C0]"} ${
                  unit === "celcius" ? "bg-black" : "bg-transparent"
                }`}
              >
                &#8451;
              </button>
              <button
                onClick={() => setUnit("fahrenheit")}
                type="button"
                className={`w-[30px] h-[30px] text-xs rounded-full hover:font-semibold ${
                  unit === "fahrenheit"
                    ? "hover:text-white"
                    : "hover:text-black"
                } ${unit === "fahrenheit" ? "text-white" : "text-[#C0C0C0]"} ${
                  unit === "fahrenheit" ? "bg-black" : "bg-transparent"
                }`}
              >
                &#8457;
              </button>
            </nav>
          </div>
          <div>
            {tab === "week" && <Weekly />}
            <Daily />
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
