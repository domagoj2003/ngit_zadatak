import React from "react";
import PropTypes from "prop-types";

const Button = ({ onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        style={{ width: `250px` }}
        className="btn btn-dark"
      >
        IZRAČUNAJ
      </button>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired
};
export default Button;
