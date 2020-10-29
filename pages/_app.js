import '../styles/globals.css'
import App, { Container } from 'next/app'

export default class MyApp extends App {

  state={
    // This gets updated and needs to be tracked across pages
    inputText: "Paste some text here!",
    login: false,
    logUser: "teacher",
    logPass: "pal"
  }

   // Captures text placed in the inputSection
  onInputChange = (event) => {
    this.setState({inputText: event.target.value});
  }

  // setSavedInput = (input) => {
  //   this.setState({input: input});
  // }

  loginToggle = (event) => {
    this.state.login == false ? this.setState({login: true}) : this.setState({login: false});
    console.log(this.state.login);
  }

  render(){
    const { Component, pageProps } = this.props;
    
    return <Component {...pageProps} {...this.state} onInputChange={this.onInputChange} loginToggle={this.loginToggle} setSavedInput={this.setSavedInput}/>
  }
}


