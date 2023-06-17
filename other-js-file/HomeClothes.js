import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import { ClothesItems } from "./products/displayProductClothes";

export const HomeClothes = (props) => {
  return (
    <div>
      <ClothesItems
        clothesList={props.clothesList}
        handleIncrease={props.handleIncrease}
        handleDecrease={props.handleDecrease}
        sortprice1={props.sortprice1}
      />
    </div>
  );
};
