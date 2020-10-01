import Head from 'next/head'
import OutputSection from '../components/outputSection'
import Layout from '../components/layout'

export default function Output() {
    return (
        <div className="container">
            <Head>
            <title>Read Pal</title>
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout> 
            <div className="card">
                <OutputSection />
            </div>
            </Layout>
        </div>
    )
}

