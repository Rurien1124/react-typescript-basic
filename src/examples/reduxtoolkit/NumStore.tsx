import { configureStore, createSlice } from '@reduxjs/toolkit';

// 특정 도메인에 대한 상태(state)와 그 상태를 바꾸는 방법(reducer)
export const NumSlice = createSlice({
  name: 'numSlice',
  initialState: {
    num: 0,
  },
  reducers: {
    increase: (state, action) => {
      const { step, max } = action.payload;

      // 기존 Redux 와 달리 기존 상태값을 그대로 사용
      state.num = state.num + step <= max ? state.num + step : 0;
    },
  },
});

// 연관된 여러 Slice 들의 집합(Store)
export const NumStore = configureStore({
  reducer: {
    numSlice: NumSlice.reducer,
  },
});

// Store 에서 가져다 사용할 대상(상태)
export type NumRootState = ReturnType<typeof NumStore.getState>;

// Action 을 통해 상태 변경을 요청
export type NumDispatch = typeof NumStore.dispatch;
