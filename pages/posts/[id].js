// pages/posts/[id].js
import Head from 'next/head';
import Layout from '../../components/layout';
// import { getAllPostIds } from '../../lib/posts';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';

// export default function Post() {
//   return <Layout>...</Layout>;
// }
export default function Post({ postData }) {
//   return (
//     <Layout>
//       {postData.title}
//       <br />
//       {postData.id}
//       <br />
//       {postData.date}
//     </Layout>
//   );
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      {/* {postData.title}
      <br />
      {postData.id}
      <br />
      <Date dateString={postData.date} />
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} /> */}
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}


export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

// export async function getStaticProps({ params }) {
//   // Fetch necessary data for the blog post using params.id
// }
export async function getStaticProps({ params }) {
  // const postData = getPostData(params.id);
  // Add the "await" keyword like this:
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
