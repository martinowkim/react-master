import { useState } from "react";
function PostItem( {userId, id, title, body}) {
  const [details, setDetails] = useState(false);
  function toggleDetails() {
    setDetails(!details);
  }
  return (
    <li className="item">
      
      {!details && <span>{userId}</span>}
      {!details &&  <span>{title}</span>}
      {!details &&  <span>{body.slice(0, 100)}...</span>}
      {details && <span>{body}</span>}
      <button onClick={toggleDetails}>Details</button>
    </li>
  );
}

export default PostItem;