import { useState } from "react";
import usePosts from "./hooks/usePosts";

const PostList = () => {
  const [userId, setUserId] = useState<number>();
  const { data: posts, error, isLoading } = usePosts(userId);

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

      <select
        onChange={(event) => setUserId(parseInt(event.target.value))}
        value={userId}
        className="form-select mb-2"
      >
        <option value="">Select User</option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select>

      <ul className="list-group">
        {posts?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.id}. | {post.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostList;
