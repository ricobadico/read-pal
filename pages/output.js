import Head from 'next/head'
import OutputSection from '../components/outputSection'
import Layout from '../components/layout'
import App from 'next/app'

export default class Output extends React.Component{

    constructor(){
        super();
        this.state = {
            voices : [],
            voiceIndex: 0
        }
    }

    populateVoiceList = () => {
        var voices = [];
        if (typeof window !== "undefined") {
            voices = window.speechSynthesis.getVoices()
            this.setState({voices: voices})
        }
    }
    

    voiceToggle = () => {
        // if (this.state.voiceIndex != 1){
        //     this.setState({ voiceIndex: 1 });
        // } else {
        //     this.setState({ voiceIndex: 0 });
        // }
        let nextVoice = this.state.voiceIndex +1;
        this.setState({voiceIndex: nextVoice})
    }

    getVoice =() => {
        return this.state.voiceIndex;
    }

    render(){
        
        const inputText = this.props.inputText;
        const sentenceArray = inputText.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|");

        if(this.state.voices == []){
            this.populateVoiceList();
            if (typeof window !== "undefined") {
                if(window.speechSynthesis.onvoiceschanged !== undefined){
                    window.speechSynthesis.onvoiceschanged = this.populateVoiceList;
                }
            }
        }  

        return (
            <div className="container">
                <Head>
                <title>Read Pal</title>
                <link rel="icon" href="/favicon.svg" />
                </Head>
                <Layout> 
                <h2>Click a word to hear it! Click a speech bubble to hear the sentence. </h2>
                <button style={{fontSize: "x-large", marginBottom: "1em"}} className="submitButton" onClick={this.voiceToggle}>Change Voice</button>
                <div className="card">
                    <OutputSection sentenceArray={sentenceArray} getVoice={this.getVoice} voiceList={this.state.voices}/>
                </div>
                </Layout>
            </div>
        )
    }
}

