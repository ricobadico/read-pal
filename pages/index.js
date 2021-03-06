import Head from 'next/head'
import InputSection from '../components/inputSection'
import OutputSection from '../components/outputSection'
import styles from '../styles/Home.module.css'
import React, { Component } from 'react'
import Layout from "../components/layout"



class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      input: this.props.inputText,
    }
  }

 

  onInputSubmit = () => {
    //get current input from state

    //convert input into an array of words

    //return that array to be passed
    return "renderedInput";
  }

  render(){
    return (
      <div className="container">
        <Head>
          <title>Read Pal</title>
          <link rel="icon" href="/favicon.svg" />
        </Head>

        <main className="main">
          <Layout home loginToggle={this.props.loginToggle}>
          
          <div className="grid">
            <InputSection inputText={this.props.inputText}
            onInputChange={this.props.onInputChange}
            onInputSubmit={this.onInputSubmit} />

            
          </div>
          </Layout>
        </main>

        <footer className={styles.footer}>
        <p>Created by Eric Biondic</p>
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