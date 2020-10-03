import styles from '../styles/convertedWord.module.css';
import dynamic from "next/dynamic";


const ConvertedWord = ({ wordToConvert, getVoice, voiceList } ) => {

// If statement prevents issue where window is not defined on next.js prerenders
if (typeof window !== "undefined") {
    const speak = () => {
        var msg = new SpeechSynthesisUtterance();
        var voices = voiceList.filter(voice => voice.lang == "en_US");;
        msg.voice = voices[getVoice()];
        msg.text = wordToConvert;
        msg.lang = 'en_US';
        speechSynthesis.cancel();
        speechSynthesis.speak(msg);
        }
    

    return (
        <div className={styles.wordWrapper}>
            <button className={styles.speechButton} 
            onClick={speak}>
            {wordToConvert}
            </button>
        </div>
    )
} else {
    return (<p>loading</p>)
}
   
}

export default ConvertedWord;