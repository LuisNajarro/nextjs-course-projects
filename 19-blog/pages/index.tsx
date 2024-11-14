import { GetStaticProps, InferGetStaticPropsType } from "next";

import FeaturedPosts from "@/components/home-page/featured-posts";
import Hero from "@/components/home-page/hero";
import { getFeaturedPosts } from "@/lib/posts-util";
import { Post } from "@/lib/types";

function HomePage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
}

export const getStaticProps = (() => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}) satisfies GetStaticProps<{ posts: Post[] }>;

export default HomePage;
