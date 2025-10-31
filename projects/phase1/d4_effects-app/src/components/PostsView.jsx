import { useState } from "react";
import useFetch from "../hooks/useFetch"

import PostsList from "./PostsList";

function PostsView() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [refresh, setRefresh] = useState(0);

  const url = new URL(`https://jsonplaceholder.typicode.com/posts`);
  url.searchParams.set("_page", String(page));
  url.searchParams.set("_limit", String(limit));
  url.searchParams.set("_r", String(refresh));
  const { data=[], loading, error } = useFetch(url.toString());

  return (
    <div className="card">
      <h3>Posts</h3>
      {loading && <p>Loading…</p>}
      <label htmlFor="postSearch">Search:</label>
      <input id="postSearch" type="text" value= {query} placeholder="search..." onChange={(e) => setQuery(e.target.value)}/>
      {error && <p style={{ color: "tomato" }}>Error: {error.message ?? String(error)}</p>}
      {!loading && !error && <PostsList posts={data} query={query}/>}
      <button onClick={() => setRefresh(r => r + 1) } disabled={loading}>
        {loading ? "Refreshing..." : "Refresh"}
      </button>
    </div>
  )
}

export default PostsView;