const Sidebar = () => {
    return(
        <div className="w-[25%] px-4 py-2">
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" id="default-search" className="block w-full p-2 ps-10 text-sm text-black rounded-lg" placeholder="Search for city..." required />
            </div>      
            <div className="my-3">
                <img alt="weather-icon" src="https://openweathermap.org/img/wn/10d@4x.png"/>
            </div>   
            <div className="pb-4 border-b border-gray-200">
                <div className="flex gap-1">
                    <div className="text-[50px]">12</div>
                    <div className="text-[25px] pt-3">&#8451;</div>
                </div>
                <div className="pl-2">Monday, <span className="text-gray-400">16:00</span></div>
            </div>
            <div className="pt-4 text-[14px]">
                <div className="mb-2">Mostly cloudy</div>
                <div>Rain - 30%</div>
            </div>
            <div className="mt-6 mb-4">
                <div className="relative mx-auto">
                    <img className="w-full object-cover rounded-md" src="https://media.istockphoto.com/id/1083982928/photo/jaipur-metro.jpg?s=1024x1024&w=is&k=20&c=0HGRudTKqVeLdDHer30coxKrzvYbH11G7V3bWu22wbw=" alt="City image" />
                    <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h2 className="text-gray-200 font-semibold">Mumbai</h2>
                    </div>
                    </div>
            </div>
        </div>
    )
}

export default Sidebar