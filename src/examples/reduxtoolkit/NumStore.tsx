import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

/**
 * Store: 전체 상태를 보관, 관리하는 저장소
 * Selector: 현재 상태를 조회
 * Slice: 액션을 받아서 해당하는 로직을 수행
 * Dispatch: 액션을 Store 로 전달
 *
 * 1. 초기화
 *  Slice(initialState) → Store (configureStore) → Provider → App
 *
 * 2. 조회
 *  Component(useSelector) → Store (current state) → Component
 *
 * 3. 수정
 *  Component(dispatch action, payload) → Store → Slice(reducer) → Store → Component(Re rendering)
 */

type NumPayload = {
  step: number;
  min: number;
  max: number;
};

export const NUM_CONFIG = {
  step: 2,
  min: -10,
  max: 10,
} as const;

// 특정 도메인에 대한 상태(state)와 그 상태를 바꾸는 방법(reducer)
export const NumSlice = createSlice({
  name: 'numSlice',
  initialState: {
    num: 0,
  },
  reducers: {
    init: (state) => {
      state.num = 0;
    },
    increase: (state, action: PayloadAction<NumPayload>) => {
      const { step, min, max } = action.payload;

      // 기존 Redux 와 달리 기존 상태값을 복사하지 않고 그대로 사용
      state.num = state.num + step <= max ? state.num + step : min;
    },
    decrease: (state, action: PayloadAction<NumPayload>) => {
      const { step, min, max } = action.payload;

      state.num = state.num - step >= min ? state.num - step : max;
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
