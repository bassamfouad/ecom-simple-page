import { Rating } from "@mui/material";
import { useState } from "react";

function AverageRating({ title, stars, type, border }) {
  const [value, setValue] = useState(3);

  return (
    <div className="d-flex flex-column p-2">
      <div className={`p-1 ${border}`}>
        <h4>{title ? title : ""}</h4>
        <Rating
          value={stars ? stars : value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          readOnly={type}
        />
      </div>
    </div>
  );
}

export default AverageRating;
