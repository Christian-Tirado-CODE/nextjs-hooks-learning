import Head from "next/head";
import BottomNav from "../components/BottomNav/BottomNav";
import SearchBar from "../components/SearchBar/searchBar";
import styles from "../styles/Layout.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sembrando Sentido - Home Page</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="web development, programming" />
      </Head>

      <main className={styles.main}>
        <SearchBar />

        {/*https://uxdesign.cc/creating-horizontal-scrolling-containers-the-right-way-css-grid-c256f64fc585 */}

        <div className={styles.ScrollingContainer}></div>
        <h2>Eventos</h2>
        <p>Recientes</p>
        <ul class="hs full no-scrollbar">
          <li class="item">Evento</li>
          <li class="item">Evento</li>
          <li class="item">Evento</li>
          <li class="item">Evento</li>
        </ul>

        <div className={styles.ScrollingContainer}>
          <h2>Organizaciones</h2>
          <p>Recientes</p>
          <ul class="hs full no-scrollbar">
            <li class="item">organizacion</li>
            <li class="item">organizacion</li>
            <li class="item">organizacion</li>
            <li class="item">organizacion</li>
          </ul>
        </div>
      </main>

      <footer className={styles.footer}></footer>
      <BottomNav />
    </div>
  );
}
