import { useRouter } from "next/router";
import Link from "next/link";
import {server} from '../../../config/index';

import { useState } from 'react';

const Article = ({ article }) => {
  // const router = useRouter();
  // const {id} = router.query;
  
  const [number, setNumber] = useState(0);
  
  const sumNumber = ({sumQuantity = 1}) => {
    setNumber(number + sumQuantity);
  }


  const [name, setName] = useState("");
  
  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <button onClick={sumNumber}>{number}</button>
      <input type="text" onChange={(e) => setName(e.target.value)} value={name}></input>
      {name}

      <Link href="/articles">Go Back</Link>
    </>
  );
};




export const getStaticProps = async (context) => {
  const res = await fetch(
    `${server}/api/articles/${context.params.id}`
  );
  const article = await res.json();

  return {
    props: {
        article,
    }
  };
};
export const getStaticPaths = async() => {
    const res = await fetch(
        `${server}/api/articles/`
      );
      const articles = await res.json();


      const ids = articles.map(article => article.id);
      const paths = ids.map(id => ({params: {id: id.toString()}}))

      return {
          paths,
          fallback: false,
      }
};


// Dynamically generate paths with
//getServerSideProps: Fetch data at time of request(not at build time - getStaticProps)
//getStaticPaths: Dynamically generate paths
/* 
export const getStaticProps = async (context) => {
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
export const getStaticPaths = async() => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/`
      );
      const articles = await res.json();


      const ids = articles.map(article => article.id);
      const paths = ids.map(id => ({params: {id: id.toString()}}))

      return {
          paths,
          fallback: false,
      }
};
 */
export default Article;
