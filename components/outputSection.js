import styles from '../styles/outputSection.module.css'
import ConvertedWord from './convertedWord'

export default function OutputSection( { sentenceArray, getVoice, voiceList }) {

    const speakSentence = (text) => {
        var voices = [];
        if (typeof window !== "undefined") {
                let msg = new SpeechSynthesisUtterance();
                //).filter(voice => voice.lang == "en-US");
                // console.log(voices);
                voices = voiceList;
                msg.voiceURI = voices[getVoice()].voiceURI;
                msg.volume = 1; // From 0 to 1
                msg.rate = 1; // From 0.1 to 10
                msg.pitch = 2; // From 0 to 2
                msg.text = text;
                msg.lang = 'en-us';
                speechSynthesis.cancel();
                speechSynthesis.speak(msg);
                }
    }
   

    return (
        <div className={styles.grid}>
        <select id="voiceSelect"></select>
            {sentenceArray.map((sentence, index) =>
                (
                    <div className={styles.sentence} key={index}>
                        <img src="/images/speak.png" alt='!' onClick={(e) => speakSentence(sentence, e)} className={styles.sentenceButton} />
                        <div className={styles.sentence}>{
                            sentence.split(" ").map((element, index) => 
                                (
                                    <ConvertedWord key={index} className={styles.convertedText}
                                    wordToConvert={element} getVoice={getVoice}/>
                                )
                            )
                        }</div>
                    </div>
                )        
            )}   
        </div>
        );
}