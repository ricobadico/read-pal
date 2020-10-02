import styles from '../styles/outputSection.module.css'
import ConvertedWord from './convertedWord'

export default function OutputSection( { sentenceArray, getVoice }) {

 function populateVoiceList() {
        if(typeof speechSynthesis === 'undefined') {
            return;
        }
    
        var voices = speechSynthesis.getVoices().then(voices => console.log(voices));
        return voices;
    }
    
    // function makeVoiceHappen(){
    // populateVoiceList();
    //     if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
    //         speechSynthesis.onvoiceschanged = populateVoiceList;
    //     }
    // }
    // const populateVoiceList = () => {
    //     var voices = [];
    //     if (typeof window !== "undefined") {
    //         return voices = window.speechSynthesis.getVoices();
    //     }
    // }

    const speakSentence = (text) => {
        var voices = [];
        if (typeof window !== "undefined") {
                let msg = new SpeechSynthesisUtterance();
                voices = speechSynthesis.getVoices();
                while (voices == undefined) {
                    console.log("oh no");
                }
                // if(window.speechSynthesis.onvoiceschanged !== undefined){
                //     window.speechSynthesis.onvoiceschanged = populateVoiceList;
                // }
                //).filter(voice => voice.lang == "en-US");
                // console.log(voices);
                msg.voice = voices[getVoice()];
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