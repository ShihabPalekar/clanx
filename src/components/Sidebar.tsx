import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getWeatherDetails } from "../redux/slices/weatherdetails";
import { getCityImage } from "../redux/slices/cityImage";
import { convertUnit } from "../common/helper";

const Sidebar = () => {
  const [cityInput, setCityInput] = useState("");
  const { today, isLoading, isError, unit } = useAppSelector(
    (state) => state.weather
  );
  const cityImg = useAppSelector((state) => state.cityImg);
  const dispatch = useAppDispatch();
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const handleChange = (e: any) => {
    setCityInput(e.target.value);
  };

  const updateCityFn = (e: any) => {
    if (e.keyCode === 13) {
      dispatch(getWeatherDetails(cityInput));
      dispatch(getCityImage(cityInput));
    }
  };

  const getUnitSym = () => {
    if (unit === "celcius") {
      return <span>&#8451;</span>;
    } else {
      return <span>&#8457;</span>;
    }
  };

  return (
    <div className="w-[25%] px-4 py-2">
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          onChange={(e: any) => handleChange(e)}
          onKeyDown={(e: any) => updateCityFn(e)}
          value={cityInput}
          type="search"
          id="default-search"
          className="block w-full p-2 ps-10 text-sm text-black rounded-lg"
          placeholder="Search for city..."
          required
        />
      </div>
      {isLoading && (
        <div className="mt-[200px] flex justify-center text-blue-700">
          <div className="w-5 h-5 border-b-2 border-blue-700 rounded-full animate-spin"></div>
          <span className="ml-2 text-[14px]">Loading...</span>
        </div>
      )}
      {!isLoading && isError && (
        <div className="mt-6 text-center text-red-500">
          Please enter a valid city
        </div>
      )}
      {!isLoading && Object.keys(today).length > 0 && (
        <>
          <div className="my-3 flex justify-center">
            <img
              className=""
              alt="weather-icon"
              src={`https://openweathermap.org/img/wn/${today.weather[0].icon}@4x.png`}
            />
          </div>
          <div className="pb-4 border-b border-gray-200">
            <div className="flex gap-1">
              <div className="text-[50px]">
                {convertUnit(unit, today.temp.max)}
              </div>
              <div className="text-[25px] pt-3">{getUnitSym()}</div>
            </div>
            <div className="pl-1">
              {days[date.getDay()]},{" "}
              <span className="text-gray-400">
                {hours}:{minutes}
              </span>
            </div>
          </div>
          <div className="pt-4 text-[14px]">
            {today.clouds < 50 ? (
              <div className="mb-2 flex items-center gap-1">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="orange"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    />
                  </svg>
                </div>
                <div>Mostly Sunny</div>
              </div>
            ) : (
              <div className="mb-2 flex items-center gap-1">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="gray"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
                    />
                  </svg>
                </div>
                <div>Mostly Cloudy</div>
              </div>
            )}
            <div className="flex items-center gap-1">
              <div className="ml-[2px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="blue"
                  className="w-4 h-4"
                  transform="scale(1, -1)"
                >
                  <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z" />
                </svg>
              </div>
              <div className="ml-[2px]">
                Rain - {today.rain ? Math.round(today.rain) : 0}%
              </div>
            </div>
          </div>
          {!cityImg.isLoading && cityImg.image.urls.regular && (
            <div className="mt-8 mb-4">
              <div className="relative mx-auto">
                <img
                  className="w-full object-cover rounded-md"
                  src={cityImg.image.urls.regular}
                  alt={cityImg.image.alt_description}
                />
                <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-gray-200 font-semibold capitalize">
                    {cityInput}
                  </h2>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Sidebar;
