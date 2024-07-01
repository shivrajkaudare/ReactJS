import { useState } from "react";
import "./comment.css";
import CommmentForm from "./CommentForm";

export default function Comment() {
  let [comments, setComments] = useState([
    {
      userName: "@sk",
      remarks: "great Job !!",
      rating: 4,
    },
  ]);

  let addNewComment = (comment) => {
    setComments((currComments) => [...currComments, comment]);
  };
  return (
    <>
      <div>
        <h3>All Cooments</h3>
        {comments.map((comment, idx) => (
          <div className="comment" key={idx}>
            <span>{comment.remarks}</span>
            &nbsp; <br />
            <span>rating = {comment.rating}</span>
            <br />
            <span>{comment.userName}</span>
          </div>
        ))}
      </div>
      <CommmentForm addNewComment={addNewComment} />
    </>
  );
}
