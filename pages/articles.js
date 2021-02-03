import React from "react";
import Head from 'next/head'
import ArticleList from "../components/ArticleList";
import {server} from '../config';

// posts will be populated at build time by getStaticProps()
function Posts({ articles }) {
  return (
    <div>
      <Head>
        <title>Posts</title>
      </Head>
    <ArticleList articles={articles}/>
    </div>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json()

  // By returning { props: posts }, the Posts component
  // will receive `posts` as a prop at build time
  return {
    props: {
      articles,
    },
    // You can use incremental static regeneration using revalidate and fallback
  }




// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
/* export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
  const articles = await res.json()

  // By returning { props: posts }, the Posts component
  // will receive `posts` as a prop at build time
  return {
    props: {
      articles,
    },
    // You can use incremental static regeneration using revalidate and fallback
  } */
}

export default Posts;