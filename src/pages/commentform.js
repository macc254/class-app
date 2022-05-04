import React, {useState} from "react";

const CommentForm = () => {
  const [name, setName] = useState("");

  return (
    <div className="App">
      <form>
        <input type="text" />

        <input type="file" />
      </form>
    </div>
  );
};
export default CommentForm;