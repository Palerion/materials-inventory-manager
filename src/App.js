import React, { useState } from "react";
import MaterialInputForm from "./components/MaterialInputForm";
import MaterialList from "./components/MaterialList";
import "./App.css";

function App() {
  const [materials, setMaterials] = useState([]);

  // Function to add a new material to the state
  const addMaterial = (newMaterial) => {
    const existingMaterial = materials.find(
      (material) =>
        material.name === newMaterial.name && material.unit === newMaterial.unit
    );

    if (existingMaterial) {
      // Update quantity of the existing material
      const updatedMaterials = materials.map((material) =>
        material.id === existingMaterial.id
          ? {
              ...material,
              quantity: +material.quantity + +newMaterial.quantity,
            }
          : material
      );
      setMaterials(updatedMaterials);
    } else {
      // Add new material
      setMaterials([...materials, newMaterial]);
    }
  };

  // Function to delete a material
  const deleteMaterial = (id) => {
    setMaterials(materials.filter((material) => material.id !== id));
  };

  // Function to update a material
  const updateMaterial = (updatedMaterial) => {
    setMaterials(
      materials.map((material) =>
        material.id === updatedMaterial.id ? updatedMaterial : material
      )
    );
  };

  return (
    <div className="App">
      <h1>Materials Inventory Manager</h1>
      <MaterialInputForm addMaterial={addMaterial} />
      <MaterialList
        materials={materials}
        deleteMaterial={deleteMaterial}
        updateMaterial={updateMaterial}
      />
    </div>
  );
}

export default App;
