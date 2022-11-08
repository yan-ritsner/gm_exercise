import { useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useFetchData } from "../../hooks/useFetchData"

const FilmList = () => {

  const { search = '' } = useParams()
  const navigate = useNavigate()

  const [searchValue, setSearchValue] = useState(search)
  const { isLoading, data, error } = useFetchData(
    search
      ? `https://swapi.dev/api/films?search=${search}`
      : 'https://swapi.dev/api/films/'
  )

  const { results = [] } = data

  const onSearchChange = (e) => {
    setSearchValue(e.target.value)
  }

  const onSearchClick = () => {
    navigate(`/films/${searchValue}`)
  }

  return (
    <div>
      <div>Film List</div>
      <div>
        <input type="text"
          value={searchValue}
          onChange={e => onSearchChange(e)}
        ></input>
        <button
          type="button"
          onClick={onSearchClick}
        >
          Search
        </button>
      </div>
      {isLoading && (
        <div>...Loading</div>
      )}
      {!isLoading && error && (
        <div>{error}</div>
      )}
      {!isLoading && !error && (
        <div>
          {results.map(({ episode_id, title }) => (
            <div key={episode_id}>
              <Link to={`/film/${episode_id}`}>{title}</Link>
            </div>
          ))}
        </div>
      )}
    </div>

  )
}

export default FilmList