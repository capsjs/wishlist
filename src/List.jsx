import { useSelector } from "react-redux";
import WishlistItems from "./WishlistItems.jsx";

const List = (props) => {
  const wishes = useSelector((state) => state.wish);

  return(
    <>
      {wishes.map((t) => (
        <WishlistItems
          wish={t}
          key={t.id}
        />
      ))}
    </>
  );
};
export default List;