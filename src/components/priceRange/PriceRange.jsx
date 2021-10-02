import { useState } from "react";
import { Progress } from "reactstrap";
import "./priceRange.css";
const PriceRange = () => {
  const [value, setValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);

  const changeInputValue = (e) => {
    if (parseInt(e.target.value) && e.target.value > 0) {
      setValue(e.target.value);
    } else return;
  };
  const changeInputMaxValue = (e) => {
    if (parseInt(e.target.value) && e.target.value > 0) {
      setMaxValue(e.target.value);
    }
  };
  const resetAttributes = () => {
    setValue(0);
    setMaxValue(0);
  };
  return (
    <div className=" d-flex flex-column  p-2 position-relative">
      <div className="border p-2">
        <h4>Price Range</h4>
        <div className="d-flex flex-row justify-content-around   mb-3">
          <input
            step="any"
            type="number"
            placeholder="From($)"
            className="text-center w-100"
            value={value ? `${value}` : ""}
            onChange={(e) => {
              changeInputValue(e);
            }}
          />
          <input
            step="any"
            type="number"
            placeholder="to($)"
            className="text-center w-100"
            value={maxValue ? maxValue : ""}
            onChange={(e) => changeInputMaxValue(e)}
          />
        </div>
        <div className="text-center mb-2">{`From ${value} $ To ${maxValue}$`}</div>
        <div className="mt-3">
          <Progress value={value} max={maxValue} />
        </div>
        <div className=" d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-light"
            style={{ color: "blue" }}
            onClick={resetAttributes}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceRange;
