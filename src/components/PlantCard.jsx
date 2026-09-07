import {useState} from "react";

function PlantCard({plant}) {
  const [buttonName, setButtonName] = useState(false)

  function handleClick(e){
    e.preventDefault();
    setButtonName(true);
  }
  return (
    <li className="card" data-testid="plant-item" key={plant.id}>
      <img src={"https://via.placeholder.com/400"} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {true ? (
        <button className="primary" onClick={handleClick}>{buttonName ? "Out of Stock" :"In Stock"}</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
