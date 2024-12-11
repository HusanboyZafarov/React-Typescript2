import { useState } from "react";
import usePosts from "./hooks/usePosts";

const PostList = () => {
  const pageSize = 10;
  const [page, setPage] = useState(1);
  const { data: posts, error, isLoading } = usePosts({ page, pageSize });

  if (isLoading)
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <h1>Posts</h1>

      <ul className="list-group">
        {posts?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.id}. | {post.title}
          </li>
        ))}
      </ul>
      <div className="btn-group mt-2">
        <button
          disabled={page === 1}
          className="btn btn-outline-primary"
          onClick={() => setPage(page - 1)}
        >
          Prev
        </button>

        <button
          className="btn btn-outline-primary"
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default PostList;
