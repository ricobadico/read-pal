import styles from '../styles/convertedWord.module.css';
import dynamic from "next/dynamic";


const ConvertedWord = ({ wordToConvert } ) => {

// If statement prevents issue where window is not defined on next.js prerenders
if (typeof window !== "undefined") {
    const speak = () => {
        var msg = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    msg.voice = voices[1];
    msg.volume = 1; // From 0 to 1
    msg.rate = 1; // From 0.1 to 10
    msg.pitch = 2; // From 0 to 2
    msg.text = wordToConvert;
    msg.lang = 'en';
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