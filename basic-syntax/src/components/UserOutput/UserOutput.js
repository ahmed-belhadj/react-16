import React from "react";

import "./UserOutput.css";

const UserOutput = props => {
  return (
    <div className="UserOutput">
      <p>Username: {props.username}</p>
      <p>Ut voluptatem iusto quia illo sed deserunt provident.</p>
    </div>
  );
};

export default UserOutput;
