import Head from 'next/head'
import InputSection from '../components/inputSection'
import OutputSection from '../components/outputSection'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Read Pal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Read Pal
        </h1>

        <p className={styles.description}>
          Let me help you read your text.
        </p>
        
        <div className={styles.grid}>
          <InputSection />

          <div className={styles.card}>
            <OutputSection />
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
