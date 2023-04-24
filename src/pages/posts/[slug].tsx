/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { type GetStaticProps } from "next";
import { type GetStaticPaths } from "next";
import { SEO } from "~/components/Seo";

import { getPosts, getPostBySlug } from "~/lib/service";

export default function PostDetails({ post }: { post: any }) {
  return (
    <>
      <SEO
        title={`${post.title} - Posts`}
        description={post.excerpt}
        image={post.featuredImage.node.sourceUrl}
        type="article"
      />
      <section className="container mx-auto py-12">
        <div
          className="post-header relative flex min-h-[200px] w-full flex-col items-center justify-center rounded-md"
          style={{
            backgroundImage: `url(${post.featuredImage.node.sourceUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="absolute z-10 h-full w-full"
            style={{ backgroundColor: "rgba(0, 0, 0, .5)" }}
          ></div>
          <div className="z-20 text-center">
            <h1 className="mb-4 text-2xl md:text-4xl">{post.title}</h1>
            <p className="italic">By James</p>
          </div>
        </div>
        <div
          className="post-content mx-auto mt-20 w-full py-6 text-lg md:w-3/5"
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></div>
      </section>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts(100); // retrieve first 100 posts

  return {
    paths: posts.map((post: any) => `/posts/${post.slug}`),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPostBySlug(params?.slug as string);

  return {
    props: { post },
  };
};
