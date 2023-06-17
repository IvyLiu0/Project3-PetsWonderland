import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import { ToyItems } from "./products/displayProductToy";

export const HomeToy = (props) => {
  return (
    <div>
      <ToyItems
        toyList={props.toyList}
        handleIncrease={props.handleIncrease}
        handleDecrease={props.handleDecrease}
        sortprice3={props.sortprice3}
      />
    </div>
  );
};
