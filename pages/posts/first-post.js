import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';
import styles from '../../styles/Home.module.css';

export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <h1>First First</h1>
        <h2>
          <Link href='/'>Back to home</Link>
        </h2>
      </Layout>
    </>
  );
}
