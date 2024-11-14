import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

import PostContent from "@/components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "@/lib/posts-util";
import { Post } from "@/lib/types";

function PostDetailPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return <PostContent post={props.post} />;
}

export const getStaticProps = ((context) => {
  const { params } = context;
  const { slug } = params as { slug: string };

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}) satisfies GetStaticProps<{ post: Post }>;

export const getStaticPaths = (() => {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}) satisfies GetStaticPaths;

export default PostDetailPage;
