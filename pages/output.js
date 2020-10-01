import Head from 'next/head'
import OutputSection from '../components/outputSection'
import Layout from '../components/layout'
import App from 'next/app'

export default class Output extends React.Component{
    render(){
        
        const inputText = this.props.inputText;
        const textArray = inputText.split(" ");

        return (
            <div className="container">
                <Head>
                <title>Read Pal</title>
                <link rel="icon" href="/favicon.ico" />
                </Head>
                <Layout> 
                <div className="card">
                    <OutputSection textArray={textArray} />
                </div>
                </Layout>
            </div>
        )
    }
}

