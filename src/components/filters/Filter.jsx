import AverageRating from "../averageRating/AverageRating";
import ColorFilter from "../colorFilter/ColorFilter";
import PriceRange from "../priceRange/PriceRange";

function Filter() {
  return (
    <div className="d-flex flex-column border p-3 sticky-top">
      <strong>Filter By</strong>
      <div className="sticky-top">
        <PriceRange />
        <ColorFilter />
        <AverageRating title="Average Rating" border="border" type={false} />
      </div>
    </div>
  );
}

export default Filter;
