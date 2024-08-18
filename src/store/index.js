import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "./weatherSlice";
import searchSlice from "./searchSlice";

export default configureStore({
  reducer: {
    weather: weatherSlice,
    search: searchSlice,
  },
});
