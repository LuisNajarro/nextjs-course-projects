import PostsGrid from "@/components/posts/posts-grid";
import classes from "./featured-posts.module.css";
import { Post } from "@/lib/types";

function FeaturedPosts(props: { posts: Post[] }) {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
}

export default FeaturedPosts;
