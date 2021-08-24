import Link from "next/link";
export default function About() {
  return (
    <>
      <h1>About Me</h1>;
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <h2>
        <Link href="/posts">
          <a>To the blog</a>
        </Link>
      </h2>
    </>
  );
}
