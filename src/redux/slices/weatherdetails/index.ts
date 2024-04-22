import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getLatLong = async(city:string) => {
    const response = await fetch(`https://openweathermap.org/data/2.5/find?q=${city}&appid=439d4b804bc8187953eb36d2a8c26a02&units=metric`)
    const data = await response.json()
    return data.list[0].coord
}

export const getWeatherDetails = createAsyncThunk('getWeatherDetails', async(city:string) => {
    const {lat, lon} : any = await getLatLong(city)
    const response = await fetch(`https://openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=439d4b804bc8187953eb36d2a8c26a02`)
    const data = await response.json()
    return data
})

type InitState = {
    weatherData: Record<string, any>;
    weeklyData: Array<any>
    isLoading: boolean;
    isError: boolean;
  };
  
  const initState: InitState = {
    weatherData: {},
    weeklyData: [],
    isLoading: false,
    isError: false,
  };
  

export const weatherDetailsSlice = createSlice({
    name: "weatherdetails",
    initialState: initState,
    reducers: {},
    extraReducers : (builder)=> {
        builder.addCase(getWeatherDetails.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getWeatherDetails.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.weatherData = action.payload.current;
            state.weeklyData = action.payload.daily.slice(0, 7)
        });
        builder.addCase(getWeatherDetails.rejected, (state, action) => {
            console.log("Error:", action.payload)
            state.isLoading = false;
            state.isError = true;
        });
    }
})

export default weatherDetailsSlice.reducer