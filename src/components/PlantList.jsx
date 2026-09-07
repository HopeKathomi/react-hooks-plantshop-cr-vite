// import { UserContext } from "./App";
import { useContext } from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {
  // const {plants} = useContext(UserContext);
  // console.log("Plants: ", plants)
  return (
    <ul className="cards">{
      plants.map(plant=>
      <PlantCard plant={plant}/>
      )
      
    }
    </ul>
  );
}

export default PlantList;
