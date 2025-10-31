function PostItem( {userId, id, title, body}) {
  return (
    <li className="item">
      <span>{userId}</span>
      <span>{title}</span>
      <span>{body}</span>
    </li>
  );
}

export default PostItem;