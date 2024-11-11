import PostItem from "@/components/posts/post-item";
import classes from "./posts-grid.module.css";
import { Post } from "@/lib/types";

function PostsGrid(props: { posts: Post[] }) {
  const { posts } = props;

  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem />
      ))}
    </ul>
  );
}

export default PostsGrid;
