import React from "react";
import { formatNumber } from "../data/calculate-profit";
import PropTypes from "prop-types";

const Result = ({ result }) => {
  return (
    <div className="lead" style={{ marginTop: `3rem` }}>
      <p> Najveća moguća zarada iznosi {result.highestProfit.toFixed(2)} $.</p>
      <p>
        {" "}
        Točno rješenje pronađeno u {formatNumber(result.iterationCount)} koraka.
      </p>
    </div>
  );
};

Result.propTypes = {
  result: PropTypes.object.isRequired
};

export default Result;
