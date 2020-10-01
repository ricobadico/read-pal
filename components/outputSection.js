import styles from '../styles/outputSection.module.css'
import ConvertedWord from './convertedWord'

export default function OutputSection( { textArray }) {

    return (
        <div className={styles.grid}>
            {textArray.map((element, index) => (
                <ConvertedWord key={index} className={styles.convertedText}
                wordToConvert={element} />
            ))}
        </div>
        );
}