import { convertUnit } from "../../../common/helper";
import { useAppSelector } from "../../../redux/hooks";

const DayCard = (props: any) => {
  const { data, day } = props;
  const { unit } = useAppSelector((state) => state.weather);

  const getUnitSym = () => {
    if (unit === "celcius") {
      return <span>&#8451;</span>;
    } else {
      return <span>&#8457;</span>;
    }
  };

  return (
    <div className="bg-white shadow-sm px-2 py-2 rounded-md text-center">
      <div>{day}</div>
      <div>
        <img
          alt="weather-icon"
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        />
      </div>
      <div className="flex gap-2 pb-[2px] justify-center">
        <div className="flex gap-1 justify-center">
          <div className="text-[16px]">{convertUnit(unit, data.temp.max)}</div>
          <div className="text-[8px] font-semibold pt-1">{getUnitSym()}</div>
        </div>
        <div className="flex gap-1 justify-center text-[#C0C0C0]">
          <div className="text-[16px]">{convertUnit(unit, data.temp.min)}</div>
          <div className="text-[8px] font-semibold pt-1">{getUnitSym()}</div>
        </div>
      </div>
    </div>
  );
};

export default DayCard;
