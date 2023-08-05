import React, { useState } from "react";
import MaterialInputForm from "./MaterialInputForm";

function MaterialItem({ material, deleteMaterial, updateMaterial }) {
  const [edit, setEdit] = useState(false);

  const handleUpdate = (material) => {
    updateMaterial(material);
    setEdit(false);
  };

  return (
    <div>
      {edit ? (
        <MaterialInputForm addMaterial={handleUpdate} material={material} />
      ) : (
        <div>
          <p>
            {material.name} - {material.quantity} {material.unit}
          </p>
          <button onClick={() => deleteMaterial(material.id)}>Delete</button>
          <button onClick={() => setEdit(true)}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default MaterialItem;
