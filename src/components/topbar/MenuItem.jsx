import React from "react";
import { Link } from "react-router-dom";

const MenuItem = (props) => {
  const { name, to, exact } = props;

  return (
    <button onClick={props.onClick}>
      <Link exact={exact} to={to} className="link">
        {name}
      </Link>
    </button>
  );
};

export default MenuItem;
