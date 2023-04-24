import Link from "next/link";

export const Hero = () => {
  return (
    <section className="container mx-auto border-b py-12 text-center">
      <div>
        <h1 className="text-2xl md:text-4xl">
          Hey, <strong>welcome to {"James'"} blog</strong>. See my thoughts,
          stories and ideas.
        </h1>
        <p className="my-6 text-lg">
          Follow me on{" "}
          <Link
            href="https://twitter.com/jamesbrattin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Twitter
          </Link>
          .
        </p>
        <p className="text-center">😎😎😎</p>
      </div>
    </section>
  );
};
