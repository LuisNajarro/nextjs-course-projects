import ReactMarkdown from "react-markdown";

import PostHeader from "@/components/posts/post-detail/post-header";
import classes from "./post-content.module.css";
import { Post } from "@/lib/types";

function PostContent(props: { post: Post }) {
  const { post } = props;

  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
