const FETCH_DATA_ACTIONS = {
  FETCH_DATA_STARTED: 'FETCH_DATA_STARTED',
  FETCH_DATA_SUCCESS: 'FETCH_DATA_SUCCESS',
  FETCH_DATA_FAILURE: 'FETCH_DATA_FAILURE',
}

export const fetchDataInitialState = {
  isLoading: false,
  data: {},
  error: '',
}

export const fetchDataStartedAction = () => ({
  type: FETCH_DATA_ACTIONS.FETCH_DATA_STARTED,
})

export const fetchDataSuccessAction = (data) => ({
  type: FETCH_DATA_ACTIONS.FETCH_DATA_SUCCESS,
  payload: data,
})

export const fetchDataFailureAction = (error) => ({
  type: FETCH_DATA_ACTIONS.FETCH_DATA_FAILURE,
  payload: error,
})

export const fetchDataReducer = (state, { type, payload }) => {
  switch (type) {
    case FETCH_DATA_ACTIONS.FETCH_DATA_STARTED:
      return {
        ...state,
        isLoading: true,
        data: {},
        error: '',
      }
    case FETCH_DATA_ACTIONS.FETCH_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload,
        error: '',
      }
    case FETCH_DATA_ACTIONS.FETCH_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        data: {},
        error: payload,
      }
    default:
      return state
  }
}