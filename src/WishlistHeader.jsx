import { useSelector } from "react-redux";

const WishlistHeader = (props) => {
  const wishes = useSelector((state) => state.wish);

  const undoneWhislist = wishes.filter((t) =>
  t.done === false);

  return (
    <header>
      <h1>React wishList</h1>
      <p>
        Articles: <strong>{undoneWhislist.length}</strong>
      </p>
    </header>
  );
};
export default WishlistHeader;