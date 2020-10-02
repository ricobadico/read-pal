import Head from 'next/head'
import OutputSection from '../components/outputSection'
import Layout from '../components/layout'
import App from 'next/app'

export default class Output extends React.Component{

    constructor(){
        super();
        this.state = {
            voiceIndex: 0
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

    render(){
        
        const inputText = this.props.inputText;
        const sentenceArray = inputText.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|");

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
                    <OutputSection sentenceArray={sentenceArray} getVoice={this.getVoice}/>
                </div>
                </Layout>
            </div>
        )
    }
}

