import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import { BowlsItems } from "./products/displayProductBowls";

export const HomeBowls = (props) => {
  return (
    <div>
      <BowlsItems
        bowlList={props.bowlList}
        handleIncrease={props.handleIncrease}
        handleDecrease={props.handleDecrease}
        sortprice={props.sortprice}
      />
    </div>
  );
};
