import { useDeletePostMutation } from "../../api";
import { Post } from "../../types";

type Props = {
  post: Post;
};

export const PostDelete = ({ post }: Props) => {
  const [deletePost, result] = useDeletePostMutation();

  const handleDelete = () => {
    deletePost(post);
  };

  return (
    <button disabled={result.isLoading} onClick={handleDelete}>
      Delete
    </button>
  );
};
