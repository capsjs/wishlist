import { useState } from "react";
import { useDispatch } from "react-redux";
import { addWish } from "./redux";

const WishForm = (props) => {
  const [text, setText] = useState("");
  const dispatch= useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(addWish(text));

    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ajouter un article"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
};
export default WishForm;