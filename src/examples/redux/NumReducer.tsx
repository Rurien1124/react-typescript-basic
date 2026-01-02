import { Action, legacy_createStore as createStore } from 'redux';

export interface NumState {
  num: number;
}

export const NumActions = {
  INCREASE: 'INCREASE',
  DECREASE: 'DECREASE',
} as const;

// 기존 상태를 받아서 새로운 상태를 반환 (Reducer)
const NumReducer = (currentState: NumState | undefined, action: Action) => {
  if (currentState === undefined) {
    return {
      num: 1,
    };
  }

  // 새로운 상태를 생성하여 변경 (기존 상태는 그대로 유지)
  const newState = { ...currentState };

  switch (action.type) {
    case NumActions.INCREASE:
      newState.num++;
      break;
    case NumActions.DECREASE:
      newState.num--;
      break;
    default:
      break;
  }

  return newState;
};

export const NumStore = createStore(NumReducer);
