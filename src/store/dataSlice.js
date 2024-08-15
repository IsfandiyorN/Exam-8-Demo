import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
    watchList:
      typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem("watchList")) || []
        : [],
    isOpenDrawer: false,
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    addWatchList: (state, action) => {
      state.data = state.data.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isInMyWatchList: true };
        }
        return item;
      });
      state.watchList.push(action.payload);
      localStorage.setItem("watchList", JSON.stringify(state.watchList));
    },
    removeWatchList: (state, action) => {
      state.data = state.data.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isInMyWatchList: false };
        }
        return item;
      });
      state.watchList = state.watchList.filter(
        (item) => item !== action.payload
      );
      localStorage.setItem("watchList", JSON.stringify(state.watchList));
    },
    closeDrawer: (state) => {
      state.isOpenDrawer = false;
    },
    openDrawer: (state) => {
      state.isOpenDrawer = true;
    },
    clearAllWatchList: (state) => {
      state.data = state.data.map((item) => {
        return { ...item, isInMyWatchList: false };
      });
      state.watchList = [];
      localStorage.setItem("watchList", JSON.stringify(state.watchList));
    },
  },
});

export const {
  setData,
  addWatchList,
  removeWatchList,
  closeDrawer,
  openDrawer,
  clearAllWatchList,
} = dataSlice.actions;
export default dataSlice.reducer;
