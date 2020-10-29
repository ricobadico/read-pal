import Head from 'next/head'
import OutputSection from '../components/outputSection'
import Layout from '../components/layout'
import App from 'next/app'

export default class Output extends React.Component{

    constructor(){
        super();
        this.state = {
            voices : "",
            voiceIndex: 0
        }
    }

    populateVoiceList = () => {
        if (typeof window !== "undefined") {
            var voices = window.speechSynthesis.getVoices();
            this.setState({voices: voices})
        }
    }
    

    voiceToggle = () => {
        if (this.state.voiceIndex != 1){
            this.setState({ voiceIndex: 1 });
        } else {
            this.setState({ voiceIndex: 0 });
        }
    }

    getVoice =() => {
        return this.state.voiceIndex;
    }

    componentDidMount(){
        this.populateVoiceList();
        if (typeof window !== "undefined") {
            if(window.speechSynthesis.onvoiceschanged !== undefined){
                window.speechSynthesis.onvoiceschanged = this.populateVoiceList;
            }
        }  
    }

    render(){
        
        const inputText = this.props.inputText;
        const sentenceArray = inputText.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|");

        // if(this.state.voices == ""){ 
        //     if (typeof window !== "undefined") {
        //         if(window.speechSynthesis.onvoiceschanged !== undefined){
        //             window.speechSynthesis.onvoiceschanged = this.populateVoiceList;
        //         }
        //     }
        // }  

        return (
            <div className="container">
                <Head>
                <title>Read Pal</title>
                <link rel="icon" href="/favicon.svg" />
                </Head>
                <Layout loginToggle={this.props.loginToggle}> 
                <h2>Click a word to hear it! Click a speech bubble to hear the sentence. </h2>
                {/* Hide this button if extra voices don't load */}
                {this.state.voices == "" ? <div></div> : 
                <button style={{fontSize: "x-large", marginBottom: "1em"}} className="submitButton" 
                onClick={this.voiceToggle} id="changeVoiceButton">Change Voice</button>}
                <div className="card">
                    <OutputSection sentenceArray={sentenceArray} getVoice={this.getVoice} voiceList={this.state.voices}/>
                </div>
                <div style={{ marginTop: '20px'}}>
                    {this.props.login == true ? 
                        <button className="submitButton" style={{fontSize: 'x-large'}}>Share</button>
                        // TODO: have a message pop up when share is hit with new link
                        : 
                        <div></div>
                    }
                </div>
                
                </Layout>
            </div>
        )
    }
}

