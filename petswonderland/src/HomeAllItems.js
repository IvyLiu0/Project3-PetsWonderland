import "bootstrap/dist/css/bootstrap.min.css";
import "./css/petswonderland.css";
import { AllItems } from "./products/displayAllProducts";

export const HomeAll = (props) => {
  return (
    <div>
      <AllItems
        allList={props.allList}
        handleIncrease={props.handleIncrease}
        handleDecrease={props.handleDecrease}
        sortprice={props.sortprice}
      />
    </div>
  );
};
