import Head from 'next/head'
import styles from '../styles/Layout.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sembrando Sentido - Home Page</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name='keywords' content='web development, programming'/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
            Sembrando Sentido - Homepage
        </h1>


        
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
