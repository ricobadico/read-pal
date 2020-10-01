import '../styles/globals.css'
import App, { Container } from 'next/app'

export default class MyApp extends App {

  state={
    inputText: "Put some text here!",
    test: "seadog"
  }

   // Captures text placed in the inputSection
  onInputChange = (event) => {
    this.setState({inputText: event.target.value});
    console.log(event.target.value);
  }

  render(){
    const { Component, pageProps } = this.props;
    
    return <Component {...pageProps} {...this.state} onInputChange={this.onInputChange}/>
  }
}


