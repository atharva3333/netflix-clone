import { useState, useEffect } from "react";
import { txtDB } from "../../firebase.config";
import { collection, getDocs } from "firebase/firestore";
import ScrollContents from "../common/ScrollContents";

const KidsMovies = () => {
  const [kidMovies, setKidMovies] = useState([]);
  
  
  const getData = async () => {
    const valRef = collection(txtDB, "txtData");
    const dataDb = await getDocs(valRef);
    const allData = dataDb.docs.map((val) => ({ ...val.data(), id: val.id }));
    setKidMovies(allData);
    console.log(dataDb);
  };

  useEffect(() => {
    getData();
  }, []);

  

  return (
    <>
  <ScrollContents title={"Kids"} data={kidMovies}/>
    </>
  );
};

export default KidsMovies;
