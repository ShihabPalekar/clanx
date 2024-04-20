import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getWeatherDetails = createAsyncThunk('getWeatherDetails', async(city:string) => {
    const response = await fetch(`https://openweathermap.org/data/2.5/find?q=${city}&appid=439d4b804bc8187953eb36d2a8c26a02&units=metric`)
    const data = await response.json()
    return data
})

export const weatherDetailsSlice = createSlice({
    name: "weatherdetails",
    initialState: {
        isLoading: false,
        weatherData: null,
        isError: false
    },
    reducers: {},
    extraReducers : (builder)=> {
        builder.addCase(getWeatherDetails.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getWeatherDetails.fulfilled, (state, action) => {
            state.isLoading = false;
            state.weatherData = action.payload.list[0]
        });
        builder.addCase(getWeatherDetails.rejected, (state, action) => {
            console.log("Error:", action.payload)
            state.isLoading = false;
            state.isError = true;
        });
    }
})

export default weatherDetailsSlice.reducer