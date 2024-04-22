const DayCard = () => {
    return(
        <div className="bg-white shadow-sm px-2 py-1 rounded-md text-center">
            <div>Sun</div>
            <div><img alt="weather-icon" src="https://openweathermap.org/img/wn/10d@2x.png"/></div>
            <div className="flex gap-1 justify-center">
                    <div className="text-[16px]">12</div>
                    <div className="text-[8px] pt-1">&#8451;</div>
                </div>
        </div>
    )
}

export default DayCard