import React from "react";

const UserInput = props => {
  const styles = {
    border: "2px solid red"
  };
  return (
    <input
      type="text"
      value={props.value}
      onChange={props.onChange}
      style={styles}
    />
  );
};

export default UserInput;
