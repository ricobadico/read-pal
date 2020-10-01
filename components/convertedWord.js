import Speech from 'react-speech';
import styles from './convertedWord.module.css'

const ConvertedWord = ({ children, wordToConvert } ) => {
    console.log(wordToConvert);

    const speechButtonStyle = {
        play: {
          button: {
            width: '28',
            height: '28',
            cursor: 'pointer',
            pointerEvents: 'none',
            outline: 'none',
            backgroundColor: 'yellow',
            border: 'solid 1px rgba(255,255,255,1)',
            borderRadius: 6
          },
        }
      };

    return (
        <div className={styles.word}>
            <Speech styles={speechButtonStyle} text={wordToConvert} />
            {wordToConvert}
        </div>
    )
}

export default ConvertedWord;