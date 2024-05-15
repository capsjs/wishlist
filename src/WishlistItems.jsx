import { useDispatch } from "react-redux";
import { toggleWish, deleteWish } from "./redux";


const WishlistItems = (props) => {
  const {wish} = props;

  const dispatch = useDispatch();

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={wish.done}
          onChange={() => dispatch(toggleWish(wish.id))}
        />
        {wish.text}
        <span
          onClick={() => dispatch(deleteWish(wish.id))}
          role="button"
          style={{ padding: "5px", marginLeft: "20px" }}
        >
          X
        </span>
      </label>
    </div>
  );
};
export default WishlistItems;