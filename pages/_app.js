import '../styles/globals.css'
import App, { Container } from 'next/app'

export default class MyApp extends App {

  state={
    // This gets updated and needs to be tracked across pages
    inputText: "Paste some text here!",
  }

   // Captures text placed in the inputSection
  onInputChange = (event) => {
    this.setState({inputText: event.target.value});
  }

  render(){
    const { Component, pageProps } = this.props;
    
    return <Component {...pageProps} {...this.state} onInputChange={this.onInputChange}/>
  }
}


