import Head from 'next/head'
import OutputSection from '../components/outputSection'
import Layout from '../components/layout'
import App from 'next/app'

export default class Output extends React.Component{
    render(){
        
        const inputText = this.props.inputText;
        const textArray = inputText.split(" ");
        const sentenceArray = inputText.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|");

        return (
            <div className="container">
                <Head>
                <title>Read Pal</title>
                <link rel="icon" href="/favicon.ico" />
                </Head>
                <Layout> 
                <h2>Click a word to hear it! Click a speech bubble to hear the sentence. </h2>
                <div className="card">
                    <OutputSection textArray={textArray} sentenceArray={sentenceArray} />
                </div>
                </Layout>
            </div>
        )
    }
}

