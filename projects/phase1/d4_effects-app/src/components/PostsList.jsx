import PostItem from "./PostItem"
function PostsList({posts, query}) {
  if(!posts || posts.length === 0) { return <p>No posts</p>}
  return (
    <ul className="list">
      {posts
        .filter(p => {
          const q = (query ?? "").toLowerCase().trim();
          return !q || 
                  p.title.toLowerCase().includes(q) ||
                  p.body.toLowerCase().includes(q);
        })
        .map(p => (
          <PostItem key={p.id} userId={p.userId} title={p.title} body={p.body} />
      ))}
    </ul>
  )
}

export default PostsList;