import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  formatTodayWeatherDate,
  formatDaysForecastDate,
  formatHourlyForecastDate,
} from "../helpers/formatHelpers";

const APIkey = "c228931bb8313f4f70954b0367327206";

export const fetchtWeatherDate = createAsyncThunk(
  "weather/fetchtWeatherDate",
  async (cityName, { dispatch, rejectWithValue }) => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${APIkey}&units=metric`;
    try {
      if (!cityName) throw new Error("empty");
      const responce = await fetch(url);

      if (!responce.ok) throw new Error("Incorrect data");

      const date = await responce.json();

      dispatch(toggleError(""));

      return date;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const weatherSlice = createSlice({
  name: "weather",

  initialState: {
    error: "",
    todayWaether: [],
    forecastForDays: [],
    hourlyForecast: [],
  },

  reducers: {
    toggleError(state, action) {
      state.error = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchtWeatherDate.fulfilled, (state, action) => {
        state.todayWaether = formatTodayWeatherDate(action.payload);
        state.forecastForDays = formatDaysForecastDate(action.payload);
        state.hourlyForecast = formatHourlyForecastDate(action.payload);
      })
      .addCase(fetchtWeatherDate.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});
const { toggleError } = weatherSlice.actions;
export default weatherSlice.reducer;
