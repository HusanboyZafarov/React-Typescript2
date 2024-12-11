import usePosts from "./hooks/usePosts";

const PostList = () => {
  const { data: posts, error, isLoading } = usePosts();

  if (error) return <p>{error.message}</p>;

  return (
    <ul className="list-group">
      <h1>Posts</h1>
      {posts?.map((post) => (
        <li key={post.id} className="list-group-item">
          {post.id}. | {post.title}
        </li>
      ))}
    </ul>
  );
};

export default PostList;
