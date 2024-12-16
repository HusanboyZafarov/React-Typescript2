import { Fragment } from "react";
import usePosts from "./hooks/usePosts";

const PostList = () => {
  const pageSize = 10;
  const { data, error, isLoading, fetchNextPage, isFetchingNextPage } =
    usePosts({ pageSize });

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
        {data.pages.map((page, index) => (
          <Fragment key={index}>
            {page.map((post) => (
              <li key={post.id} className="list-group-item">
                {post.id}. | {post.title}
              </li>
            ))}
          </Fragment>
        ))}
      </ul>

      <button
        className="btn btn-primary mt-2"
        disabled={isFetchingNextPage}
        onClick={() => fetchNextPage()}
      >
        {isFetchingNextPage ? "Loading..." : "Load more"}
      </button>
    </>
  );
};

export default PostList;
