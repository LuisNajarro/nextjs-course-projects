import AllPosts from "@/components/posts/all-posts";
import { getAllPosts } from "@/lib/posts-util";
import { Post } from "@/lib/types";

function AllPostsPage(props: { posts: Post[] }) {
  return <AllPosts posts={props.posts} />;
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
