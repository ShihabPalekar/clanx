const DayCard = (props: any) => {
  const { data, day } = props;
  console.log(data);
  return (
    <div className="bg-white shadow-sm px-2 py-1 rounded-md text-center">
      <div>{day}</div>
      <div>
        <img
          alt="weather-icon"
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        />
      </div>
      <div className="flex gap-2 justify-center">
        <div className="flex gap-1 justify-center">
          <div className="text-[16px]">{Math.round(data.temp.max)}</div>
          <div className="text-[8px] font-semibold pt-1">&#8451;</div>
        </div>
        <div className="flex gap-1 justify-center text-[#C0C0C0]">
          <div className="text-[16px]">{Math.round(data.temp.min)}</div>
          <div className="text-[8px] font-semibold pt-1">&#8451;</div>
        </div>
      </div>
    </div>
  );
};

export default DayCard;
