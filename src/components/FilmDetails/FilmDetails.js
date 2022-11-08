import { useParams } from "react-router-dom"
import { useFetchData } from "../../hooks/useFetchData"

const FilmDetails = () => {

  const { id } = useParams();

  const { isLoading, data, error } = useFetchData(`https://swapi.dev/api/films/${id}`)

  const keys = Object.keys(data)

  return (
    <div>
      <div>Film List</div>
      {isLoading && (
        <div>...Loading</div>
      )}
      {!isLoading && error && (
        <div>{error}</div>
      )}
      {!isLoading && !error && (
        <div>
          {keys.map((key) => (
            <div key={key}>
              <h5>{key}</h5>
              <h5>{data[key]}</h5>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default FilmDetails