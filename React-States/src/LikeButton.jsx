import { useState } from "react";

export default function LikeButton() {
  //hook
  let [isLiked, setIsLiked] = useState(false);
  let [cliks, setCliks] = useState(0);

  let toggleLike = () => {
    setIsLiked(!isLiked);
    setCliks(cliks + 1);
  };
  //styles
  let likeStyle = {
    color: "red",
    fontSize: "30px",
  };
  let unLikeStyle = {
    fontSize: "30px",
  };

  return (
    <div>
      <p onClick={toggleLike}>
        {isLiked ? (
          <i className="fa-solid fa-heart" style={likeStyle}></i>
        ) : (
          <i className="fa-regular fa-heart" style={unLikeStyle}></i>
        )}{" "}
        &nbsp; {cliks}
      </p>
    </div>
  );
}
