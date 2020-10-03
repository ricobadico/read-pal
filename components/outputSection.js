import styles from '../styles/outputSection.module.css'
import ConvertedWord from './convertedWord'

export default function OutputSection( { sentenceArray, getVoice, voiceList }) {

    const speakSentence = (text) => {
        var voices = [];
        if (typeof window !== "undefined") {
                let msg = new SpeechSynthesisUtterance();
                voices = voiceList;
                msg.voice = voices[getVoice()];
                msg.text = text;
                msg.lang = 'en_US';
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
                                    wordToConvert={element} getVoice={getVoice} voiceList={voiceList}/>
                                )
                            )
                        }</div>
                    </div>
                )        
            )}   
        </div>
        );
}