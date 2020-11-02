import { useRouter } from 'next/router';
import { Component, useEffect, useState } from 'react';
import Head from 'next/head'
import OutputSection from '../components/outputSection'
import Layout from '../components/layout'
import App from 'next/app'
import useSWR from 'swr'
import Hashids from 'hashids'

//fetcher function for grabbing saved text from database
const textFetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
      throw new Error(data.message)
    }
    //pick through object to get what we need
    return data.foundtext[0].savedtext
}

export default function SavedOutput(props){

  // Pre-loaded voice data pulled from main app props
  const [voices, setVoices] = useState([]);
  const [voiceIndex, setVoiceIndex] = useState(0);

  //router is used to get id from url.
  const router = useRouter();
  const { id } = router.query;
  // Dehash this to get numeric id in database
  const MyIDHasher = new Hashids();
  const deHashedId = MyIDHasher.decode(id);

  // Saved text with default message
  var pageText = "No saved text found at this link!";

  // url that SWR fetch function will grab from, with query based on current page's url
  const apiURL = '/api/texts/getSavedTexts?id='+ deHashedId;

  //SWR fetcher grabs savedtext data from db
  const { data, error } = useSWR(apiURL, textFetcher);

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

  const getSetenceArray = (pageText) => {
    // Render saved database text to useable array form
    const sentenceArray = pageText.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|");
    return sentenceArray;
  }

  useEffect(() =>{
    populateVoiceList();
    if (typeof window !== "undefined") {
        if(window.speechSynthesis.onvoiceschanged !== undefined){
            window.speechSynthesis.onvoiceschanged = populateVoiceList;
        }
    }
  },[])

  //Returns that handle if the database is still loading
  if (error) return <div>I could not find any saved text at this web address!</div>
  if (!data) return <div>Loading...</div>

  // The main difference in this return vs the regular output.js is that the getSetenceArray function differs and takes db data
  return (
  <div className="container">
      <Head>
      <title>Read Pal</title>
      <link rel="icon" href="/favicon.svg" />
      </Head>
      <Layout loginToggle={props.loginToggle}>
      <h2>Click a word to hear it! Click a speech bubble to hear the sentence. </h2>
      {/* Hide this button if extra voices don't load */}
      {voices.length < 2 ? <div></div> : 
      <button style={{fontSize: "x-large", marginBottom: "1em"}} className="submitButton" 
      onClick={voiceToggle} id="changeVoiceButton">Change Voice</button>}
      <div className="card">
          <OutputSection sentenceArray={getSetenceArray(data)} getVoice={getVoice} voiceList={voices}/>
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