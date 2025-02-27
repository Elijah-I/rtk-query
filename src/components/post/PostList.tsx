import { useGetPostsQuery } from "../../api";
import { PostDelete } from "./PostDelete";
import { PostEdit } from "./PostEdit";

export const PostList = () => {
  const { isLoading, data: posts = [] } = useGetPostsQuery();

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <>
      {posts.map((post) => (
        <div key={post.id} style={{ display: "flex", gap: "10px" }}>
          <b>{post.title}</b>
          <i>({post.views})</i>
          <PostDelete post={post} />
          <PostEdit post={post} />
        </div>
      ))}
    </>
  );
};
