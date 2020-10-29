import { useRouter } from 'next/router';
import { Component, useEffect, useState } from 'react';
import Head from 'next/head'
import OutputSection from '../components/outputSection'
import Layout from '../components/layout'
import App from 'next/app'

export default function SavedOutput(props){

  const [voices, setVoices] = useState("");
  const [voiceIndex, setVoiceIndex] = useState(0);
  const router = useRouter();
  const { id } = router.query;
  var pageText = "No saved text found at this link!";

   //TODO: link to a real-deal database
   const database = {
    savedtexts: [
    {
        id: '00000', 
        text: "A beautiful young woman named Buttercup lives on a farm in the fictional kingdom of Florin. Whenever she instructs the farmhand Westley, he complies and answers, 'As you wish'. She eventually realizes that he truly means 'I love you' and that she loves him in return. He leaves to seek his fortune so they can marry, but his ship is attacked by the Dread Pirate Roberts, who is infamous for never leaving survivors, and Westley is believed dead."
    },
    {
        id: '00001',
        text: "The water chevrotain is a small animal that resembles a deer (Cervidae). This species is larger than its Asian counterparts, maintaining a size similar to a rabbit. The water chevrotain has a body length of between 45 and 85 cm and a tail length ranging from 7.5 to 17 cm. Animals of this species weigh 7-15 kg, however, the average weight for males is only 9.7 kg, whereas females average 12 kg. The weight at birth is unknown."
    }
    ]
  }

  const populateVoiceList = () => {
    if (typeof window !== "undefined") {
        var voices = window.speechSynthesis.getVoices();
        setVoices(voices);
    }
  }

  const voiceToggle = () => {
    if (voiceIndex != 1){
      setVoiceIndex(1);
    } else {
      setVoiceIndex(0);
    }
  }

  const getVoice =() => {
    return voiceIndex;
  }

  const getSetenceArray = (textId) => {
    //check for this page's id (based on URL) in the database (TODO: setup SQL database and select from that)
    for(let entry in database.savedtexts){
      if (database.savedtexts[entry].id == textId){
        pageText = database.savedtexts[entry].text;
        // Render saved database text to useable array form
        const sentenceArray = pageText.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|");
        return sentenceArray;
      }
    }
    return "No text found!".replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|");
  }

  useEffect(() =>{
    populateVoiceList();
    if (typeof window !== "undefined") {
        if(window.speechSynthesis.onvoiceschanged !== undefined){
            window.speechSynthesis.onvoiceschanged = populateVoiceList(); //NOTE ** populateVoiceList lacked () here, could be source of issue in outputtext>
        }
    }
  },[])

    return (
        <div className="container">
            <Head>
            <title>Read Pal</title>
            <link rel="icon" href="/favicon.svg" />
            </Head>
            <Layout loginToggle={props.loginToggle}> 
            <h2>Click a word to hear it! Click a speech bubble to hear the sentence. </h2>
            {/* Hide this button if extra voices don't load */}
            {voices == "" ? <div></div> : 
            <button style={{fontSize: "x-large", marginBottom: "1em"}} className="submitButton" 
            onClick={voiceToggle} id="changeVoiceButton">Change Voice</button>}
            <div className="card">
                <OutputSection sentenceArray={getSetenceArray(id)} getVoice={getVoice} voiceList={voices}/>
            </div>
            <div style={{ marginTop: '20px'}}>
                {props.login == true ? 
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