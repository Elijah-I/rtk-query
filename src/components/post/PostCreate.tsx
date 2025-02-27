import { useCreatePostMutation } from "../../api";

export const PostCreate = () => {
  const [createPost, result] = useCreatePostMutation();

  const handleCreate = () => {
    const title = prompt() || "";

    createPost({
      title,
      views: 0
    });
  };

  return (
    <button disabled={result.isLoading} onClick={handleCreate}>
      Add new post
    </button>
  );
};
