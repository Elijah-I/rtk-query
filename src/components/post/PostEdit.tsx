import { useUpdatePostMutation } from "../../api";
import { Post } from "../../types";

type Props = {
  post: Post;
};

export const PostEdit = ({ post }: Props) => {
  const [editPost, result] = useUpdatePostMutation();

  const handleEdit = () => {
    const title = prompt() || "";

    editPost({ ...post, title });
  };

  return (
    <button disabled={result.isLoading} onClick={handleEdit}>
      Edit
    </button>
  );
};
