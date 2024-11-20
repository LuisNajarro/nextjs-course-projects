import ReactMarkdown, { ExtraProps } from "react-markdown";
import Image from "next/image";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";
import type { JSX } from "react";
import { Element } from "hast";

import PostHeader from "@/components/posts/post-detail/post-header";
import classes from "./post-content.module.css";
import type { Post } from "@/lib/types";

SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("css", css);

function PostContent(props: { post: Post }) {
  const { post } = props;

  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderers = {
    // img(image: JSX.IntrinsicElements["img"]) {
    //   return (
    //     <Image
    //       src={`/images/posts/${post.slug}/${image.src}`}
    //       alt={image.alt ?? ""}
    //       width={600}
    //       height={300}
    //     />
    //   );
    // },
    p(paragraph: JSX.IntrinsicElements["p"] & ExtraProps) {
      const { node } = paragraph;

      if ((node?.children[0] as Element).tagName === "img") {
        const image = node?.children[0] as Element;

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.properties.alt as string}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },

    code(code: JSX.IntrinsicElements["code"]) {
      const { className, children } = code;
      const language = className?.split("-")[1];
      return (
        <SyntaxHighlighter style={atomDark} language={language}>
          {children as string}
        </SyntaxHighlighter>
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
