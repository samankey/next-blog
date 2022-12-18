import Head from 'next/head';
import Layout from '/components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>첫번째요</title>
      </Head>
      <h1>첫번째 글</h1>
    </Layout>
  );
}
