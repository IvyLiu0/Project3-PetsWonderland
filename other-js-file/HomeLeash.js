import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import { LeashItems } from "./products/displayProductLeash";

export const HomeLeash = (props) => {
  return (
    <div>
      <LeashItems
        leashList={props.leashList}
        handleIncrease={props.handleIncrease}
        handleDecrease={props.handleDecrease}
        sortprice2={props.sortprice2}
      />
    </div>
  );
};
