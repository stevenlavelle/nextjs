import Link from "next/link";
import Head from "next/head";

import Layout from "../../components/layout";

export default function Blog() {
  return (
    <Layout>
      <Head>
        <title>My Blog</title>
      </Head>
      <h1>Blog</h1>

      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <h2>
        <Link href="/about">
          <a>About Me</a>
        </Link>
      </h2>
    </Layout>
  );
}
