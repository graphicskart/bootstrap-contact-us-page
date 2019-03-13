import React from "react";

const AddressItem = props => {
  const { title = "", icon = null } = props;
  return (
    <p>
      {icon}
      <span className="address">{title}</span>
    </p>
  );
};

export default AddressItem;
