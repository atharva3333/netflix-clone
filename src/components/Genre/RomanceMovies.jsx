import ScrollContents from '../common/ScrollContents'
import RomanceMoviesData from "../../data/romancemovies.json"

const RomanceMovies = () => {
  return (
    <div>
        <ScrollContents title={"Romance"} data={RomanceMoviesData}/>
    </div>
  )
}

export default RomanceMovies