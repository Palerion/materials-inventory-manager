import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function MaterialInputForm({ addMaterial, material: propMaterial }) {
  const defaultMaterial = {
    id: "",
    name: "",
    quantity: "",
    unit: "",
  };

  const [material, setMaterial] = useState(propMaterial || defaultMaterial);

  // Function to submit the form
  const submitForm = (e) => {
    e.preventDefault();
    if (material.name.trim() && material.quantity && material.unit.trim()) {
      addMaterial({
        ...material,
        id: material.id || uuidv4(),
        quantity: parseFloat(material.quantity),
      });
      // Reset form fields
      setMaterial(defaultMaterial);
    }
  };

  useEffect(() => {
    if (propMaterial) {
      setMaterial(propMaterial);
    } else {
      setMaterial(defaultMaterial);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [propMaterial]);

  // Function to handle input changes
  const handleChange = (e) => {
    setMaterial({
      ...material,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={submitForm}>
      <input
        type="text"
        placeholder="Material Name"
        name="name"
        value={material.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        placeholder="Quantity"
        name="quantity"
        value={material.quantity}
        onChange={handleChange}
        required
      />
      <select
        name="unit"
        value={material.unit}
        onChange={handleChange}
        required
      >
        <option value="">--Select Unit--</option>
        <option value="m">Meters (m)</option>
        <option value="m²">Square Meters (m²)</option>
        <option value="m³">Cubic Meters (m³)</option>
        <option value="kg">Kilograms (kg)</option>
        <option value="units">Units (units)</option>
      </select>
      <button type="submit">Add Material</button>
    </form>
  );
}

export default MaterialInputForm;
