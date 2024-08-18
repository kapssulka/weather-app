import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setArrayFromSearchCitys } from "../helpers/getData";

export const fetchSearchCitys = createAsyncThunk(
  "search/fetchSearchCitys",
  async (query) => {
    const url = `https://nominatim.openstreetmap.org/search?q=${query}&format=json&addressdetails=1&limit=5&accept-language=en&class=place&type=city`;

    const response = await fetch(url);
    const data = await response.json();

    return data;
  }
);

const searchSlice = createSlice({
  name: "search",

  initialState: {
    cityName: "",
    query: "",
    citysNames: [],
  },

  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
    setCityName(state, action) {
      state.cityName = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchSearchCitys.fulfilled, (state, action) => {
      state.citysNames = setArrayFromSearchCitys(action.payload);
    });
  },
});

export const { setQuery, setCityName } = searchSlice.actions;
export default searchSlice.reducer;
