import { GetStaticProps, InferGetStaticPropsType } from "next";

import AllPosts from "@/components/posts/all-posts";
import { getAllPosts } from "@/lib/posts-util";
import { Post } from "@/lib/types";

function AllPostsPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return <AllPosts posts={props.posts} />;
}

export const getStaticProps = (() => {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}) satisfies GetStaticProps<{ posts: Post[] }>;

export default AllPostsPage;
