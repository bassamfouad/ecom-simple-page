import Button from "@mui/material/Button";
import AverageRating from "../averageRating/AverageRating";

function ProductItem({ products }) {
  const { id, image, name, price, rating } = products;
  return (
    <div className="col-md-4 mb-4 ">
      <div className="bbb_deals">
        <div className="bbb_deals_title">Feature</div>
        <div className="bbb_deals_slider_container">
          <div className=" bbb_deals_item">
            <div className="bbb_deals_image">
              <img src={image} alt="" />
            </div>
            <div className="bbb_deals_content">
              <div className="bbb_deals_info_line d-flex flex-row justify-content-start">
                <div className="bbb_deals_item_category">
                  <Button variant="text">Laptops</Button>
                </div>
                <div className="bbb_deals_item_price_a ml-auto">
                  <strike>${price + 50}</strike>
                </div>
              </div>
              <div className="bbb_deals_info_line d-flex flex-row justify-content-between">
                <div className="bbb_deals_item_name">{name}</div>
                <div className="bbb_deals_item_price ml-auto">{`$${price}`}</div>
              </div>
              <div className="available">
                <div className="available_line d-flex flex-row justify-content-start">
                  <AverageRating stars={rating} type={true} />
                </div>
                <div className="available_bar">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
