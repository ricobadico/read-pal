import styles from '../styles/outputSection.module.css'
import ConvertedWord from './convertedWord'

export default function OutputSection( { sentenceArray, getVoice }) {

    const speakSentence = (text) => {
        if (typeof window !== "undefined") {
                var msg = new SpeechSynthesisUtterance();
                var voices = (window.speechSynthesis.getVoices()).filter(voice => voice.lang == "en-US");
                console.log(voices);
                msg.voice = voices[getVoice()];
                msg.volume = 1; // From 0 to 1
                msg.rate = 1; // From 0.1 to 10
                msg.pitch = 2; // From 0 to 2
                msg.text = text;
                msg.lang = 'en';
                speechSynthesis.cancel();
                speechSynthesis.speak(msg);
                }
    }

    return (
        <div className={styles.grid}>
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