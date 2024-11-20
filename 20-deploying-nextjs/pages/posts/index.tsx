import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";

import AllPosts from "@/components/posts/all-posts";
import { getAllPosts } from "@/lib/posts-util";
import { Post } from "@/lib/types";

function AllPostsPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming-related tutorials and posts."
        />
      </Head>
      <AllPosts posts={props.posts} />
    </>
  );
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
