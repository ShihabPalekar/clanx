import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getCityImage = createAsyncThunk('getCityImage', async(city:string) => {
    const response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${city}&client_id=lomj0qCcXbCPUVV0gJWCVlRKG7XrODFl3N5ExP4ADIw`)
    const data = await response.json()
    return data
})

type InitState = {
    image: Record<string, any>;
    isLoading: boolean;
    isError: boolean;
  };
  
  const initState: InitState = {
    image: {},
    isLoading: false,
    isError: false,
  };

export const cityImageSlice = createSlice({
    name: "cityImage",
    initialState: initState,
    reducers: {},
    extraReducers : (builder)=> {
        builder.addCase(getCityImage.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getCityImage.fulfilled, (state, action) => {
            state.isLoading = false;
            state.image = action.payload.results[0]
        });
        builder.addCase(getCityImage.rejected, (state, action) => {
            console.log("Error:", action.payload)
            state.isLoading = false;
            state.isError = true;
        });
    }
})

export default cityImageSlice.reducer