import AdventureMoviesData from "../../data/adventure.json"
import ScrollContents from "../common/ScrollContents"
const AdventureMovies = () => {

  return (
    <div>
        <ScrollContents title={"Adventures"} data={AdventureMoviesData}/>
    </div>
  )
}

export default AdventureMovies