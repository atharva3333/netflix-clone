import KidsMoviesData from "../../data/kidsmovies.json"
import ScrollContents from "../common/ScrollContents"

const KidsMovies = () => {
 
  return (
    <div>
  <ScrollContents title={"Kids"} data={KidsMoviesData}/>
    </div>
  );
};

export default KidsMovies;
