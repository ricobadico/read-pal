import Head from 'next/head'
import InputSection from '../components/inputSection'
import OutputSection from '../components/outputSection'
import styles from '../styles/Home.module.css'
import React, { Component } from 'react'
import Layout from "../components/layout"


class Home extends Component {

  constructor(){
    super();
    this.state = {
      inputText: "Put some text here",
    }
  }

  // Captures text placed in the inputSection
  onInputChange = (event) => {
    this.setState({inputText: event.target.value});
    console.log(event.target.value);
  }

  onInputSubmit = () => {
    
  }

  render(){
    return (
      <div className={styles.container}>
        <Head>
          <title>Read Pal</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <Layout home>
          
          <div className={styles.grid}>
            <InputSection inputText={this.state.inputText}
            onInputChange={this.onInputChange} />

            
          </div>
          </Layout>
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
}   

export default Home;