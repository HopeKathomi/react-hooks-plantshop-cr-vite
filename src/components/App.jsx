import {useState, useEffect} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

// export const UserContext = createContext();
function App() {
  const [plants, setPlants] = useState([])

  useEffect(()=>{
    console.log("1. useEffect started");
    fetch('http://localhost:6001/plants')
    .then(res => {
      console.log("Respnse received")
      return res.json()})
    .then(plants =>{
      console.log("App plants: ", plants)
      setPlants(plants)
    })
    .catch((error) => {
      console.error("Error fetching plants:", error);
    });
  },[])

  return (
    <div className="app">
      <Header />
      {/* <UserContext.Provider value={plants}> */}
        <PlantPage plants={plants}/>
      {/* </UserContext.Provider> */}
    </div>
  );
}

export default App;
