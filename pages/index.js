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
    console.log("State?: " + this.props.inputText)
    return (
      <div className="container">
        <Head>
          <title>Read Pal</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="main">
          <Layout home>
          
          <div className="grid">
            <InputSection inputText={this.props.inputText}
            onInputChange={this.props.onInputChange}
            onInputSubmit={this.onInputSubmit} />

            
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