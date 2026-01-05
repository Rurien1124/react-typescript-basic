import { configureStore, createSlice } from '@reduxjs/toolkit';

export const NumSlice = createSlice({
  name: 'numSlice',
  initialState: {
    num: 0,
  },
  reducers: {
    increase: (state, action) => {
      // 기존 Redux 와 달리 value 값을 그대로 사용
      state.num = state.num + action.payload;
    },
  },
});

// 연관된 여러 Slice 들을 합쳐 하나의 Store 로 제공
export const NumStore = configureStore({
  reducer: {
    numSlice: NumSlice.reducer,
  },
});

export type NumRootState = ReturnType<typeof NumStore.getState>;
export type NumDispatch = typeof NumStore.dispatch;
