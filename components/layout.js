import Head from 'next/head';
import styles from '../styles/layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import NaviButton from './naviButton'

const name = 'Read Pal';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home, loginToggle }) {
  return (
    <div className="container">

      <h1 className="title">
            Read Pal
          </h1>

          <p className="description">
            Let me help you read your text.
          </p>
          {children}
          {!home && (
      <div className={styles.backToHome}>
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </div>
    )}      
    </div>
    
  )
}