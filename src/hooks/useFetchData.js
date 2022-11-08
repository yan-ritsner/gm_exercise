import { useEffect, useReducer } from "react"
import { fetchDataFailureAction, fetchDataInitialState, fetchDataReducer, fetchDataStartedAction, fetchDataSuccessAction } from "../reducers/fetchDataReducer"

export const useFetchData = (url) => {
  const [state, dispatch] = useReducer(fetchDataReducer, fetchDataInitialState)

  useEffect(() => {

    const abortController = new AbortController()

    const fetchData = async () => {

      try {
        dispatch(fetchDataStartedAction())

        const response = await fetch(url, { signal: abortController.signal })
        const data = await response.json()

        dispatch(fetchDataSuccessAction(data))
      }
      catch ({ message = 'Unexpected error' }) {
        if (!abortController.signal.aborted) {
          dispatch(fetchDataFailureAction(message))
        }
      }
    }

    fetchData()

    return () => {
      abortController.abort()
    }

  }, [url])

  return state
}