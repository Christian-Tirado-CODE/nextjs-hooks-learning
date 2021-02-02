import { useRouter } from "next/router";
import Link from "next/link";
const Article = ({ article }) => {
  // const router = useRouter();
  // const {id} = router.query;
  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />

      <Link href="/articles">Go Back</Link>
    </>
  );
};

// Dynamically generate paths with
//getServerSideProps: Fetch data at time of request(not at build time - getStaticProps)
//getStaticPaths: Dynamically generate paths

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const article = await res.json();

  return {
    props: {
        article,
    }
  };
};

export default Article;
