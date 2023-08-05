import React from "react";
import MaterialItem from "./MaterialItem";

function MaterialList({ materials, deleteMaterial, updateMaterial }) {
  return (
    <div>
      {materials.map((material) => (
        <MaterialItem
          key={material.id}
          material={material}
          deleteMaterial={deleteMaterial}
          updateMaterial={updateMaterial}
        />
      ))}
    </div>
  );
}

export default MaterialList;
