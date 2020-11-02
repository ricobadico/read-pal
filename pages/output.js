import Head from 'next/head'
import OutputSection from '../components/outputSection'
import Layout from '../components/layout'
import App from 'next/app'
import Hashids from 'hashids'


export default class Output extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            voices : [],
            voiceIndex: 0,
            saveButtonUsed: false,
            savedTextId: false,
            messageIfSaving: ""
        }
    }

    // Loads list of voices from browser
    populateVoiceList = () => {
        if (typeof window !== "undefined") {
            var voices = window.speechSynthesis.getVoices();
            this.setState({voices: voices})
        }
    }
    
    // Swaps between two primary voices to use
    voiceToggle = () => {
        if (this.state.voiceIndex != 1){
            this.setState({ voiceIndex: 1 });
        } else {
            this.setState({ voiceIndex: 0 });
        }
    }

    // Returns current voice selection based on voiceToggle
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

    async saveText(){
        // We don't want the user to mash the save button and add multiple entries to the database
        if (!this.state.saveButtonUsed){
            // Prevent future presses
            this.setState({ saveButtonUsed: true });
            this.setState({ messageIfSaving: "Saving...one moment..." })

             // URL for api insert call, with text sent as query
            const apiURL = '/api/texts/saveNewText?textToSave=' + this.props.inputText;

            const res = await fetch(apiURL);
            const data = await res.json();

            //Create a message that shows link to new page
            this.setState({ savedTextId: data.createdId});
        }
    }

    render(){
        
        //Converts inputted text to array format that the reader parses
        const inputText = this.props.inputText;
        const sentenceArray = inputText.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|");

        //For saving pages: gets a hashed version of the db Id once created and appends it to the URL
        const MyIDHasher = new Hashids();
        const hashedId = MyIDHasher.encode(this.state.savedTextId)
        const newSavedURL = "https://readpal.vercel.app/"+ hashedId;

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
                {this.state.voices.length < 2 ? <div></div> : 
                <button style={{fontSize: "x-large", marginBottom: "1em"}} className="submitButton" 
                onClick={this.voiceToggle} id="changeVoiceButton">Change Voice</button>}
                <div className="card">
                    <OutputSection sentenceArray={sentenceArray} getVoice={this.getVoice} voiceList={this.state.voices}/>
                </div>
                <div className="container" style={{margin: "1em", minHeight: "0"}}>
                    <button style={{fontSize: "medium", marginTop: "1em", marginBottom: "20px"}} 
                        className="submitButton"
                        onClick={this.saveText.bind(this)}>
                        Save this text
                    </button>
                    {!this.state.savedTextId ?
                        <div>{this.state.messageIfSaving}</div>
                        :
                        <h2>Done! Share this text at
                        <br />
                        <a href={newSavedURL}
                            style={{color:'blue'}}>
                            {newSavedURL}
                        </a></h2>    
                    }
                </div>
                </Layout>
            </div>
        )
    }
}

