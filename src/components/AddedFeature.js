import React from "react";

const AddedFeature = (props) => {
  const onRemove = (e) => {
    props.removeFeature(props.feature);
  };
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={onRemove}>
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
