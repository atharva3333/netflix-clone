import ActionThrillers from "../../data/actionmovies.json"
import ScrollContents from "../common/ScrollContents"
const ActionMovies = () => {

  return (
    <div>
        <ScrollContents title={"Action Thrillers"} data={ActionThrillers}/>
    </div>
  )
}

export default ActionMovies